# Supabase Setup Guide

This directory contains SQL migrations and scripts to set up your Supabase database and storage.

## Prerequisites

1. Supabase project created at: https://dhqddlezcqujkghcuckc.supabase.co
2. Service Role Key from Supabase Dashboard (Settings → API → service_role key)
3. Add the service role key to your `.env` file:

```env
VITE_SUPABASE_URL=https://dhqddlezcqujkghcuckc.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Setup Steps

### 1. Create Database Tables and Storage Policies

Run the SQL migration in your Supabase Dashboard:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `migrations/001_initial_schema.sql`
4. Click **Run** to execute the migration

This will create:
- `contacts` table - for contact form submissions
- `resume_reviews` table - for resume review submissions
- Indexes for better query performance
- Row Level Security (RLS) policies
- Storage policies for the resumes bucket

### 2. Create Storage Buckets

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to **Storage** in your Supabase Dashboard
2. Click **New bucket**
3. Create the following buckets:

**Bucket 1: `resumes`**
- Public: **No** (private)
- File size limit: **10 MB**
- Allowed MIME types: `application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/msword`

**Bucket 2: `public-uploads`** (optional, for general uploads)
- Public: **Yes**
- File size limit: **5 MB**

#### Option B: Using the Setup Script

1. Install dependencies (if not already installed):
```bash
npm install dotenv
npm install -D tsx
```

2. Add your service role key to `.env`:
```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

3. Run the setup script:
```bash
npx tsx supabase/scripts/setup-storage.ts
```

### 3. Storage Policies

The storage policies are included in the main migration file (`001_initial_schema.sql`). They allow:
- Anonymous users to upload resumes (for the resume review form)
- Authenticated users to read resumes (for admin access)
- Service role to have full access (for admin operations)

## Database Schema

### `contacts` Table
Stores contact form submissions.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Contact name |
| email | VARCHAR(255) | Contact email |
| company | VARCHAR(255) | Company name (optional) |
| interest | VARCHAR(50) | Type of interest (talent, startup, outsourcing, other) |
| message | TEXT | Contact message |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### `resume_reviews` Table
Stores resume review submissions.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| mpesa_code | VARCHAR(50) | M-Pesa payment confirmation code |
| resume_file_path | TEXT | Path to resume file in storage |
| resume_file_name | VARCHAR(255) | Original file name |
| created_at | TIMESTAMP | Creation timestamp |

## Storage Buckets

### `resumes` Bucket
- **Type:** Private
- **Purpose:** Store uploaded resume files
- **File size limit:** 10 MB
- **Allowed types:** PDF, DOCX, DOC

### `public-uploads` Bucket (Optional)
- **Type:** Public
- **Purpose:** General file uploads
- **File size limit:** 5 MB

## Usage in Your Application

### Inserting Contact Form Data

```typescript
import { supabase } from '@/lib/supabase'

const { data, error } = await supabase
  .from('contacts')
  .insert({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Corp',
    interest: 'startup',
    message: 'Looking to hire developers'
  })
```

### Uploading Resume Files

```typescript
import { supabase } from '@/lib/supabase'

// Upload file
const file = event.target.files[0]
const fileName = `${Date.now()}_${file.name}`
const filePath = `resumes/${fileName}`

const { data: uploadData, error: uploadError } = await supabase.storage
  .from('resumes')
  .upload(filePath, file)

if (uploadError) {
  console.error('Upload error:', uploadError)
  return
}

// Save to database
const { data, error } = await supabase
  .from('resume_reviews')
  .insert({
    mpesa_code: 'ABC123',
    resume_file_path: filePath,
    resume_file_name: file.name
  })
```

### Retrieving Resume Files

```typescript
// Get public URL (if bucket is public)
const { data } = supabase.storage
  .from('resumes')
  .getPublicUrl(filePath)

// Or create signed URL for private buckets
const { data } = await supabase.storage
  .from('resumes')
  .createSignedUrl(filePath, 3600) // URL valid for 1 hour
```

## Security Notes

1. **Row Level Security (RLS)** is enabled on all tables
2. **Storage policies** control who can upload/download files
3. The **anon key** is safe to use in client-side code
4. The **service role key** should NEVER be exposed in client-side code
5. For production, consider using Supabase Edge Functions for sensitive operations

## Troubleshooting

### "new row violates row-level security policy"
- Check that RLS policies are correctly set up
- Verify you're using the correct authentication method

### "Storage bucket not found"
- Ensure buckets are created before running the application
- Check bucket names match exactly (case-sensitive)

### "File upload failed"
- Check file size is within limits
- Verify file type is allowed
- Ensure storage policies allow uploads

## Next Steps

1. Test the database connection
2. Test file uploads to storage
3. Implement form submissions in your React components
4. Set up admin dashboard to view submissions (optional)

