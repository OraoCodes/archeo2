-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create resume_reviews table for resume review submissions
CREATE TABLE IF NOT EXISTS resume_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mpesa_code VARCHAR(50) NOT NULL,
  resume_file_path TEXT NOT NULL,
  resume_file_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_resume_reviews_created_at ON resume_reviews(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE resume_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for resume_reviews table
-- Allow anyone to insert (submit resume reviews)
CREATE POLICY "Allow public insert on resume_reviews"
  ON resume_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read resume reviews (for admin access)
CREATE POLICY "Allow authenticated read on resume_reviews"
ON resume_reviews FOR SELECT
TO authenticated
USING (true);

-- Add comments for documentation
COMMENT ON TABLE resume_reviews IS 'Stores resume review submissions with M-Pesa payment code';
COMMENT ON COLUMN resume_reviews.resume_file_path IS 'Path to the resume file in Supabase Storage';

-- ============================================================================
-- Storage Policies
-- ============================================================================
-- Note: These policies assume the 'resumes' bucket has been created
-- Create the bucket first using the Supabase Dashboard or setup-storage.js script

-- Policy for resumes bucket (private)
-- Allow anonymous users to upload resumes (for resume review form)
CREATE POLICY "Allow anonymous upload to resumes"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (
  bucket_id = 'resumes' AND
  (storage.extension(name)) IN ('pdf', 'docx', 'doc')
);

-- Allow authenticated users to read resumes (for admin access)
CREATE POLICY "Allow authenticated read on resumes"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'resumes');

-- Allow service role to have full access to resumes (for admin operations)
CREATE POLICY "Allow service role full access to resumes"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'resumes')
WITH CHECK (bucket_id = 'resumes');

