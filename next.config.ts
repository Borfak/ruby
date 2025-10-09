import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import { withSentryConfig } from '@sentry/nextjs'

import { envServer } from '@/config/env'

const withNextIntl = createNextIntlPlugin('./src/pkg/libraries/locale/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    optimizeServerReact: true,
  },
  optimizePackageImports: ['lucide-react', '@heroui/react', 'framer-motion', 'zod', 'zustand'],
  logging: {
    fetches: {
      fullUrl: envServer.NODE_ENV !== 'production',
    },
  },
}

export default withSentryConfig(withNextIntl(nextConfig), {
  org: 'borfak',
  project: 'javascript-nextjs',
  authToken: envServer.SENTRY_AUTH_TOKEN,

  widenClientFileUpload: true,
  disableLogger: true,

  reactComponentAnnotation: {
    enabled: true,
  },
})
