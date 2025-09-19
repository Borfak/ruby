'use client'

import { type FC, type ReactNode } from 'react'
import { ContainerComponent } from '../../shared/ui/container'
import { Footer } from '../../widgets/footer'
import { Header } from '../../widgets/header'

interface IProps {
    children: ReactNode
}

const MainLayoutModule: FC<Readonly<IProps>> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <ContainerComponent variant='main' className='flex-1'>
                {children}
            </ContainerComponent>
            <Footer />
        </div>
    )
}

export default MainLayoutModule
