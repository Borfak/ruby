'use client'

import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@heroui/react'

import { useCreateInstrument } from '@/entities/api/instruments'
import { Button } from '@/shared/ui'

// interface
interface InstrumentFormData {
  name: string
}

interface IProps {}

// component
const InstrumentFormBlockComponent: FC<Readonly<IProps>> = () => {
  const createMutation = useCreateInstrument()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InstrumentFormData>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    createMutation.mutate(data.name, {
      onSuccess: () => {
        reset()
      },
    })
  })

  // return
  return (
    <form onSubmit={onSubmit} className='flex gap-2'>
      <Input
        {...register('name', {
          required: 'Instrument name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
        })}
        type='text'
        placeholder='Instrument name'
        className='flex-1'
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        isDisabled={isSubmitting || createMutation.isPending}
      />
      <Button
        type='submit'
        className='rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50'
        disabled={isSubmitting || createMutation.isPending}
      >
        {isSubmitting || createMutation.isPending ? 'Adding...' : 'Add'}
      </Button>
    </form>
  )
}

export default InstrumentFormBlockComponent
