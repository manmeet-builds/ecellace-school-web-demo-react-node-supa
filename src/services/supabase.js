import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing in .env file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper to get public URL for an asset in the school-assets bucket
 * @param {string} path - The path to the file in the bucket
 * @param {string} fallback - A fallback URL (e.g. Unsplash) if bucket is empty
 */
export const getAssetUrl = (path, fallback) => {
  if (!path) return fallback;
  
  const { data } = supabase.storage
    .from('school-website') // Assuming bucket name is 'school-website'
    .getPublicUrl(path);
    
  return data?.publicUrl || fallback;
};
