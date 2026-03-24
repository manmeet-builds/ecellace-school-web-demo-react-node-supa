-- RUN THIS IN THE SUPABASE SQL EDITOR --

-- 1. Create the Admin User in Auth.Users
-- Default Credentials: 
-- Email: admin@excellenceschool.edu
-- Password: admin_password_2025

-- Note: Supabase Auth doesn't allow direct SQL inserts into auth.users easily without bypass.
-- Recommended Way: Use the Supabase Dashboard "Users" tab to create the user.

-- If you MUST use SQL (as a superuser):
-- INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, role)
-- VALUES (
--   gen_random_uuid(),
--   'admin@excellenceschool.edu',
--   crypt('admin_password_2025', gen_salt('bf')),
--   now(),
--   'authenticated'
-- );

-- 2. (Optional) Create a Profile in public.profiles for names/roles
-- CREATE TABLE IF NOT EXISTS public.profiles (
--   id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
--   full_name text,
--   role text DEFAULT 'ADMIN'
-- );

-- INSERT INTO public.profiles (id, full_name, role)
-- SELECT id, 'School Administrator', 'ADMIN' FROM auth.users WHERE email = 'admin@excellenceschool.edu';
