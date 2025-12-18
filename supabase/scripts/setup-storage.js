/**
 * Script to set up Supabase Storage buckets
 * 
 * Run this script using: node supabase/scripts/setup-storage.js
 * Make sure to set SUPABASE_SERVICE_ROLE_KEY in your .env file
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
function loadEnv() {
  try {
    const envPath = resolve(__dirname, '../../.env');
    const envFile = readFileSync(envPath, 'utf-8');
    const env = {};
    
    envFile.split('\n').forEach(line => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        env[match[1].trim()] = match[2].trim();
      }
    });
    
    return env;
  } catch (error) {
    console.warn('Could not load .env file, using process.env');
    return {};
  }
}

const env = loadEnv();
const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL || 'https://dhqddlezcqujkghcuckc.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY is required to set up storage buckets.');
  console.log('💡 Get your service role key from: Supabase Dashboard → Settings → API → service_role key');
  console.log('💡 Add it to your .env file: SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here');
  process.exit(1);
}

// Use service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const buckets = [
  {
    name: 'resumes',
    public: false,
    fileSizeLimit: 10 * 1024 * 1024, // 10MB
    allowedMimeTypes: [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ]
  },
  {
    name: 'public-uploads',
    public: true,
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
    } catch (error) {
      console.error(`❌ Error setting up bucket "${bucketConfig.name}":`, error.message);
    }
    console.log('');
  }

  console.log('📋 Next steps:');
  console.log('   1. Go to Supabase Dashboard → Storage → Policies');
  console.log('   2. Set up policies for each bucket (or run the SQL migration)');
  console.log('   3. See supabase/migrations/002_storage_policies.sql for policy examples\n');

  console.log('✨ Storage setup complete!');
}

// Run the setup
setupStorage().catch(console.error);

