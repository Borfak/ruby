import * as Sentry from '@sentry/nextjs'

import { envClient } from './src/config/env'

Sentry.init({
  dsn: envClient.NEXT_PUBLIC_SENTRY_DSN,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  replaysOnErrorSampleRate: 1.0,

  debug: false,

  sendDefaultPii: true,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
