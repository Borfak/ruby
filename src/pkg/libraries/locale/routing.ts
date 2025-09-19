import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['en', 'ua'],
	localePrefix: 'always',
	localeDetection: true,
	defaultLocale: 'en',
})