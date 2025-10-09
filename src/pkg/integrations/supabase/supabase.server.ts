import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'

import { envServer } from '@/config/env'

// supabase client
export async function createClient() {
  const cookieStore = await cookies()

  // return
  return createServerClient(envServer.SUPABASE_URL, envServer.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },

      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          //
        }
      },
    },
  })
}
