import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type FC, type ReactNode } from 'react'

import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'
import { UiProvider } from '@/pkg/libraries/ui'

import { MainLayoutModule } from '../../modules/layout'

import '@/config/styles/global.css'
import { routing } from '@/pkg/libraries/locale'
import { notFound } from 'next/navigation'



interface IProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

const LocaleLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props
  const { locale } = await params
  if(!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = await getMessages()



  return (
    <html lang={locale} >
      <body suppressHydrationWarning>
    <NextIntlClientProvider messages={messages}>
      <UiProvider locale={locale}>
        <RestApiProvider>
          <MainLayoutModule>{children}</MainLayoutModule>
        </RestApiProvider>
      </UiProvider>
    </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
