'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/react'

// interface
interface IProps {
  children: ReactNode
  locale?: string
}

// component
const UiProvider: FC<Readonly<IProps>> = (props) => {
  const { children, locale } = props

  // return
  return (
    <HeroUIProvider locale={locale}>
      <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

export default UiProvider
