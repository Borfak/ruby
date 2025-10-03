'use client'

// imports
import { type FC, type ReactNode } from 'react'

import { ContainerComponent } from '../../shared/ui/container'
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
      <ContainerComponent variant='main' className='flex-1'>
        {children}
      </ContainerComponent>
      <Footer />
    </div>
  )
}

export default MainLayoutModule
