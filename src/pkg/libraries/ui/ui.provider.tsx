'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'

interface IProps {
  children: ReactNode
  locale?: string
}

const UiProvider: FC<Readonly<IProps>> = (props) => {
  const { children, locale } = props

  return (
    <HeroUIProvider locale={locale}>
      <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
        {children}

        <ToastProvider
          maxVisibleToasts={3}
          placement='top-right'
          toastProps={{
            radius: 'md',
            timeout: 3500,
            classNames: {
              title: 'first-letter:uppercase',
              description: 'first-letter:uppercase',
            },
          }}
        />
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

export default UiProvider
