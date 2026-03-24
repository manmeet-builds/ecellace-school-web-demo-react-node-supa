import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://puveuttwnllzgqgpjisa.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dmV1dHR3bmxsemdxZ3BqaXNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDE5MzMxMiwiZXhwIjoyMDg5NzY5MzEyfQ.gundzV17Iffvk6JDfxa0CVj1CITqr5TnPWQmWka3CkY';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdmin() {
  const email = 'admin@excellenceschool.edu';
  const password = 'admin_password_2025';

  console.log(`🛠️ Creating admin user: ${email}...`);

  // Use admin auth API to create user with confirmed email
  const { data, error } = await supabase.auth.admin.createUser({
    email: email,
    password: password,
    email_confirm: true,
    user_metadata: { role: 'admin' }
  });

  if (error) {
    if (error.message.includes('already registered')) {
      console.log('✅ User already exists. Resetting password just in case...');
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        (await supabase.auth.admin.listUsers()).data.users.find(u => u.email === email).id,
        { password: password }
      );
      if (updateError) console.error('❌ Failed to update password:', updateError.message);
      else console.log('✅ Password reset to: admin_password_2025');
    } else {
      console.error('❌ Error creating user:', error.message);
    }
  } else {
    console.log('✅ Admin user created and email confirmed!');
  }
}

createAdmin();
