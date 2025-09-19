import createMiddleware from 'next-intl/middleware'

import { routing } from './src/pkg/libraries/locale'

export default createMiddleware(routing)

export const config = {
	matcher: ['/', '/(ua|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
