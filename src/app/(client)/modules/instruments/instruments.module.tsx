'use client'

import type { FC } from 'react'

import { useSuspenseQuery } from '@tanstack/react-query'

import { instrumentsListOptions } from '../../entities/api'
import { ErrorMessage } from '../../shared/ui/error-message'

// interface
interface IProps {}

// component
const InstrumentsModule: FC<Readonly<IProps>> = () => {
  const { data: instruments, error } = useSuspenseQuery(instrumentsListOptions())

  // error state
  if (error) {
    return <ErrorMessage message='Failed to load instruments' />
  }

  // return
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
