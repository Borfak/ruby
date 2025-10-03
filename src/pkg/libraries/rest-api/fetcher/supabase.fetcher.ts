import ky, { type KyInstance } from 'ky'

import { envClient } from '@/config/env/env.client'

// Supabase fetcher
export const supabaseFetcher: KyInstance = ky.create({
  prefixUrl: `${envClient.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`,
  headers: {
    apikey: envClient.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${envClient.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  },
  credentials: 'include',
  throwHttpErrors: false,
})
