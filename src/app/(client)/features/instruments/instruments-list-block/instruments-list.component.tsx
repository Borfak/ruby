'use client'

import type { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { instrumentsListOptions } from '@/entities/api/instruments'
import { ErrorMessage } from '@/shared/ui/error-message'
import { LoadingSpinner } from '@/shared/ui/loading-spinner'

import { InstrumentListItem } from './elements/instrument-list-item'

// interface
interface IProps {}

// component
const InstrumentsListBlockComponent: FC<Readonly<IProps>> = () => {
  const { data: instruments, isLoading, error } = useQuery(instrumentsListOptions())

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message='Failed to load instruments' />
  }

  if (!instruments || instruments.length === 0) {
    return (
      <div className='py-8 text-center'>
        <p className='text-foreground-500'>No instruments found</p>
      </div>
    )
  }

  // return
  return (
    <ul className='flex flex-col gap-2'>
      {instruments.map((instrument) => (
        <InstrumentListItem key={instrument.id} instrument={instrument} />
      ))}
    </ul>
  )
}

export default InstrumentsListBlockComponent
