import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://goovhuczwuncnkumdbuo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvb3ZodWN6d3VuY25rdW1kYnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDM1MzcsImV4cCI6MjAzNzU3OTUzN30.-gY1yBgHK4iyBdwF5j7ucE6-6KB_339HhE1lzMFEAlQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})