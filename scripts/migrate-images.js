import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import https from 'https';

// --- CONFIGURATION ---
// Using .env credentials
const supabaseUrl = 'https://puveuttwnllzgqgpjisa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dmV1dHR3bmxsemdxZ3BqaXNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDE5MzMxMiwiZXhwIjoyMDg5NzY5MzEyfQ.gundzV17Iffvk6JDfxa0CVj1CITqr5TnPWQmWka3CkY'; 
const bucketName = 'school-website';

const supabase = createClient(supabaseUrl, supabaseKey);

const imageMap = [
  { path: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40' },
  { path: 'news/science.jpg', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7' },
  { path: 'news/sports.jpg', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc' },
  { path: 'news/robotics.jpg', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e' },
  { path: 'school/classroom.jpg', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7' },
  { path: 'school/students.jpg', url: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab' },
  { path: 'team/principal.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { path: 'facilities/science.jpg', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758' },
  { path: 'facilities/library.jpg', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da' },
  { path: 'facilities/sports.jpg', url: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e' },
  { path: 'facilities/classroom.jpg', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7' }
];

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
      res.on('error', (err) => reject(err));
    });
  });
}

async function migrate() {
  console.log(`🚀 Checking buckets...`);
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  
  if (listError) {
    console.error(`❌ Could not list buckets:`, listError.message);
  } else {
    console.log(`📂 Available buckets:`, buckets.map(b => b.name).join(', ') || 'None');
  }

  // Attempt to create the bucket if it's missing (might fail with anon key)
  const bucketExists = buckets?.find(b => b.name === bucketName);
  if (!bucketExists) {
    console.log(`➕ Attempting to create bucket: ${bucketName}...`);
    const { error: createError } = await supabase.storage.createBucket(bucketName, {
      public: true,
      allowedMimeTypes: ['image/jpeg', 'image/png']
    });
    if (createError) {
      console.error(`❌ Failed to create bucket:`, createError.message);
      console.log('⚠️  Please manually create a public bucket named "school-website" in your Supabase dashboard.');
      return; 
    }
    console.log(`✅ Bucket "${bucketName}" created!`);
  }

  for (const item of imageMap) {
    try {
      console.log(`📥 Downloading ${item.path}...`);
      const buffer = await downloadImage(`${item.url}?auto=format&fit=crop&q=80&w=1200`);

      console.log(`📤 Uploading to Supabase...`);
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(item.path, buffer, {
          contentType: 'image/jpeg',
          upsert: true
        });

      if (error) {
        console.error(`❌ Failed to upload ${item.path}:`, error.message);
        if (error.message.includes('not found')) {
            console.error(`💡 Tip: Make sure the bucket "${bucketName}" exists in your Supabase dashboard.`);
        }
      } else {
        console.log(`✅ Successfully migrated ${item.path}`);
      }
    } catch (err) {
      console.error(`💥 Error migrating ${item.path}:`, err.message);
    }
  }

  console.log('🏁 Migration process finished.');
}

migrate();
