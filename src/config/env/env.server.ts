import z from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

// env server
export const envServer = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']).optional().default('development'),
    SENTRY_AUTH_TOKEN: z.string().optional(),
    GROWTHBOOK_CLIENT_KEY: z.string().min(1, { message: 'GROWTHBOOK_CLIENT_KEY is required' }),
    GROWTHBOOK_API_HOST: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    GROWTHBOOK_CLIENT_KEY: process.env.GROWTHBOOK_CLIENT_KEY,
    GROWTHBOOK_API_HOST: process.env.GROWTHBOOK_API_HOST,
  },
})
