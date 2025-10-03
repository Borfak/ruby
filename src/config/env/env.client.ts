import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

// env client
export const envClient = createEnv({
  client: {
    NEXT_PUBLIC_CLIENT_API_URL: z.string().min(1, { message: 'NEXT_PUBLIC_CLIENT_API_URL is required' }),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_MIXPANEL_TOKEN: z.string().optional(),
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NEXT_PUBLIC_CLIENT_API_URL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
})
