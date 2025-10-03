import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import { envClient } from '@/config/env/env.client'

// supabase singleton instance for server-side operations
let supabaseInstance: SupabaseClient | null = null

export function getSupabaseServerClient(): SupabaseClient {
  if (!supabaseInstance) {
    supabaseInstance = createClient(envClient.NEXT_PUBLIC_SUPABASE_URL, envClient.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }
  return supabaseInstance
}
