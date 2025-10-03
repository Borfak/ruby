import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import { envServer } from '@/config/env/env.server'

// supabase singleton instance
let supabaseInstance: SupabaseClient | null = null

// get or create supabase client
export function getSupabaseServerClient(): SupabaseClient {
  if (!supabaseInstance) {
    supabaseInstance = createClient(envServer.SUPABASE_URL, envServer.SUPABASE_ANON_KEY)
  }
  return supabaseInstance
}
