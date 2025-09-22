import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['en', 'uk'],
	localePrefix: 'always',
	localeDetection: true,
	defaultLocale: 'en',
})