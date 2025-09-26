import { envClient } from "@/config/env/env.client"
import { envServer } from "@/config/env/env.server"
import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/pkg/libraries/locale/request.ts')

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: envServer.NODE_ENV !='production',
    },
  },
}

export default withNextIntl(nextConfig)
