import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type FC, type ReactNode } from 'react'

import { routing } from '@/pkg/libraries/locale'
import { MixpanelInit } from '@/pkg/integrations/mixpanel'
import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'
import { UiProvider } from '@/pkg/libraries/ui'

import '@/config/styles/global.css'

import { MainLayoutModule } from '../../modules/layout'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

// static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// component
const LocaleLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = await getMessages()

  // Get userId for Mixpanel tracking
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value

  // return
  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <MixpanelInit userId={userId} />
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
