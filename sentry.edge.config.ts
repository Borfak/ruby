import * as Sentry from '@sentry/nextjs'

import { envClient } from '@/config/env/env.client'
import { envServer } from '@/config/env/env.server'

Sentry.init({
  dsn: envClient.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: envServer.NODE_ENV === 'production' ? 0.1 : 1.0,

  debug: false,
})
