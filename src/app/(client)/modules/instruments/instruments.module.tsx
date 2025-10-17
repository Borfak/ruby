'use client'

import type { FC } from 'react'

import { InstrumentFormBlockComponent } from '@/features/instruments'
import { InstrumentsListBlockComponent } from '@/features/instruments'
import { ContainerComponent } from '@/shared/ui/container'

// interface
interface IProps {}

// component
const InstrumentsModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent variant='main' className='flex-1'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold'>Instruments</h1>
        <InstrumentFormBlockComponent />
        <InstrumentsListBlockComponent />
      </div>
    </ContainerComponent>
  )
}

export default InstrumentsModule
