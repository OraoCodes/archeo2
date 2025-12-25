import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || 'https://dhqddlezcqujkghcuckc.supabase.co'
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocWRkbGV6Y3F1amtnaGN1Y2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NjQ1NTcsImV4cCI6MjA3NDU0MDU1N30.hlyaXV4dn3BRHlFwL0Ip-vRlq9lpCXvJqy6eoBYrz3Q'

if (!supabaseAnonKey) {
  console.error('❌ VITE_SUPABASE_ANON_KEY is required. Please add it to your .env file and restart the dev server.')
  throw new Error('Supabase anon key is missing')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

