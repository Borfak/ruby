import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'

import { envClient } from '@/config/env/env.client'

// supabase client
export async function createClient() {
  const cookieStore = await cookies()

  // return
  return createServerClient(envClient.NEXT_PUBLIC_SUPABASE_URL, envClient.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
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
