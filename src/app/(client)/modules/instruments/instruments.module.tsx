'use client'

import type { FC } from 'react'

import { type Instrument } from '../../entities/models'

interface IProps {
  instruments: Instrument[]
}

const InstrumentsModule: FC<Readonly<IProps>> = ({ instruments }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold'>Instruments</h1>
      <ul className='list-disc pl-6'>
        {instruments.map((instrument) => (
          <li key={instrument.id}>{instrument.name}</li>
        ))}
      </ul>
      {instruments.length === 0 && <p className='text-default-500'>No instruments found.</p>}
    </div>
  )
}

export default InstrumentsModule


