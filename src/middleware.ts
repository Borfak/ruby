import createMiddleware from 'next-intl/middleware'

import { routing } from './pkg/libraries/locale'

// middleware
export default createMiddleware(routing)

// config
export const config = {
  matcher: ['/', '/(uk-UA|en)/:path*'],
}
