import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import { envServer } from '@/config/env/env.server'

let supabaseInstance: SupabaseClient | null = null

export function getSupabaseServerClient(): SupabaseClient {
  if (!supabaseInstance) {
    supabaseInstance = createClient(envServer.SUPABASE_URL, envServer.SUPABASE_ANON_KEY)
  }
  return supabaseInstance
}
