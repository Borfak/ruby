import { UiProvider } from '@/pkg/libraries/ui'
import { Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type ReactNode } from 'react'
import { MainLayoutModule } from '../../modules/layout'
import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'

interface IProps {
    children: ReactNode
    params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: IProps) {
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
