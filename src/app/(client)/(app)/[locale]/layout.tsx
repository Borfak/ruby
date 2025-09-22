import { Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type FC, type ReactNode } from 'react'

import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'
import { UiProvider } from '@/pkg/libraries/ui'

import { MainLayoutModule } from '../../modules/layout'

interface IProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

const LocaleLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props
  const { locale } = await params
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <UiProvider locale={locale}>
        <RestApiProvider>
          <MainLayoutModule>{children}</MainLayoutModule>
        </RestApiProvider>
      </UiProvider>
    </NextIntlClientProvider>
  )
}

export default LocaleLayout
