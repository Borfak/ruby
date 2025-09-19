import createMiddleware from 'next-intl/middleware'

import { routing } from './pkg/libraries/locale'

export default createMiddleware(routing)

export const config = {
	matcher: ['/', '/(ua|en)/:path*']
}
