import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './pkg/libraries/locale'

// generate a simple unique ID
function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

// middleware
export default function middleware(request: NextRequest) {
  const userId = request.cookies.get('user_id')?.value

  const response = createMiddleware(routing)(request)

  if (!userId && response) {
    const newUserId = generateUserId()
    response.cookies.set('user_id', newUserId, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    })
  }

  return response
}

// config
export const config = {
  matcher: ['/', '/(uk-UA|en)/:path*'],
}
