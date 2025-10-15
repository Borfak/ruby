'use client'

// imports
import { type FC, type ReactNode } from 'react'

import { Footer } from '../../widgets/footer'
import { Header } from '../../widgets/header'

// interface
interface IProps {
  children: ReactNode
}

// module
const MainLayoutModule: FC<Readonly<IProps>> = ({ children }) => {
  // render main layout
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex-1'>{children}</main>

      <Footer />
    </div>
  )
}

export default MainLayoutModule
