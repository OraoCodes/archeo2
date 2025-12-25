/**
 * Script to set up Supabase Storage buckets
 * 
 * Run this script using: npx tsx supabase/scripts/setup-storage.ts
 * Or compile and run: npm run setup:storage
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://dhqddlezcqujkghcuckc.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY is required to set up storage buckets.');
  console.log('💡 Get your service role key from: Supabase Dashboard → Settings → API → service_role key');
  process.exit(1);
}

// Use service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

interface BucketConfig {
  name: string;
  public: boolean;
  allowedMimeTypes?: string[];
  fileSizeLimit?: number; // in bytes
}

const buckets: BucketConfig[] = [
  {
    name: 'resumes',
    public: false, // Private bucket for resume files
    allowedMimeTypes: [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword' // .doc
    ],
    fileSizeLimit: 10 * 1024 * 1024 // 10MB
  },
  {
    name: 'public-uploads',
    public: true, // Public bucket for general uploads
    fileSizeLimit: 5 * 1024 * 1024 // 5MB
  }
];

async function setupStorage() {
  console.log('🚀 Setting up Supabase Storage buckets...\n');

  for (const bucketConfig of buckets) {
    try {
      // Check if bucket exists
      const { data: existingBuckets, error: listError } = await supabase.storage.listBuckets();
      
      if (listError) {
        throw listError;
      }

      const bucketExists = existingBuckets?.some(b => b.name === bucketConfig.name);

      if (bucketExists) {
        console.log(`✅ Bucket "${bucketConfig.name}" already exists`);
        
        // Update bucket settings if needed
        const { error: updateError } = await supabase.storage.updateBucket(bucketConfig.name, {
          public: bucketConfig.public
        });

        if (updateError) {
          console.warn(`⚠️  Could not update bucket "${bucketConfig.name}":`, updateError.message);
        } else {
          console.log(`   Updated bucket settings`);
        }
      } else {
        // Create new bucket
        const { data, error } = await supabase.storage.createBucket(bucketConfig.name, {
          public: bucketConfig.public,
          fileSizeLimit: bucketConfig.fileSizeLimit,
          allowedMimeTypes: bucketConfig.allowedMimeTypes
        });

        if (error) {
          throw error;
        }

        console.log(`✅ Created bucket "${bucketConfig.name}"`);
        console.log(`   Public: ${bucketConfig.public}`);
        if (bucketConfig.fileSizeLimit) {
          console.log(`   File size limit: ${(bucketConfig.fileSizeLimit / 1024 / 1024).toFixed(0)}MB`);
        }
        if (bucketConfig.allowedMimeTypes) {
          console.log(`   Allowed types: ${bucketConfig.allowedMimeTypes.join(', ')}`);
        }
      }
    } catch (error: any) {
      console.error(`❌ Error setting up bucket "${bucketConfig.name}":`, error.message);
    }
    console.log('');
  }

  // Set up storage policies
  console.log('📋 Setting up storage policies...\n');
  await setupStoragePolicies();

  console.log('✨ Storage setup complete!');
}

async function setupStoragePolicies() {
  // Note: Storage policies need to be set up via SQL in Supabase Dashboard
  // or using the Supabase Management API
  console.log('💡 Storage policies need to be configured manually in Supabase Dashboard:');
  console.log('   1. Go to Storage → Policies');
  console.log('   2. For "resumes" bucket:');
  console.log('      - Allow INSERT for authenticated users');
  console.log('      - Allow SELECT for authenticated users (or specific users)');
  console.log('   3. For "public-uploads" bucket:');
  console.log('      - Allow INSERT for authenticated users');
  console.log('      - Allow SELECT for everyone (public bucket)');
  console.log('');
  console.log('   Or use the SQL script: supabase/migrations/002_storage_policies.sql');
}

// Run the setup
setupStorage().catch(console.error);


