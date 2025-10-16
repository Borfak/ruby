'use client'

// imports
import { type FC, type ReactNode } from 'react'

import { usePathname } from '@/pkg/libraries/locale'

import { Footer } from '../../widgets/footer'
import { Header } from '../../widgets/header'

// interface
interface IProps {
  children: ReactNode
}

// component
const MainLayoutModule: FC<Readonly<IProps>> = ({ children }) => {
  const pathname = usePathname()
  const isMyIqPage = pathname?.includes('/myiq')

  // return
  return (
    <div className='flex min-h-screen flex-col'>
      {!isMyIqPage && <Header />}

      <main className='flex-1'>{children}</main>

      <Footer />
    </div>
  )
}

export default MainLayoutModule
