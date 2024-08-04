import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = 'https://kpodttozarkpqypzlhji.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwb2R0dG96YXJrcHF5cHpsaGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTUxMTksImV4cCI6MjAzODM3MTExOX0.rZLzpl6Z2s7bcwmkJDkHdC_7lngjflYWtP-4t3jGEKg';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})