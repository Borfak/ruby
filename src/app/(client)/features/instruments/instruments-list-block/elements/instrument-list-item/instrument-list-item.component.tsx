'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@heroui/react'

import { useDeleteInstrument, useUpdateInstrument } from '@/entities/api/instruments'
import type { Instrument } from '@/entities/db/schemas'
import { Button } from '@/shared/ui'

// interface
interface EditFormData {
  name: string
}

interface IProps {
  instrument: Instrument
}

// component
const InstrumentListItem: FC<Readonly<IProps>> = (props) => {
  const { instrument } = props

  const [isEditing, setIsEditing] = useState(false)
  const updateMutation = useUpdateInstrument()
  const deleteMutation = useDeleteInstrument()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<EditFormData>({
    defaultValues: {
      name: instrument.name,
    },
  })

  useEffect(() => {
    if (isEditing) {
      reset({ name: instrument.name })
    }
  }, [isEditing, instrument.name, reset])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    reset()
  }

  const onSubmit = handleSubmit((data) => {
    if (!isDirty) {
      handleCancel()
      return
    }

    updateMutation.mutate(
      { id: instrument.id, name: data.name },
      {
        onSuccess: () => {
          setIsEditing(false)
          reset()
        },
      },
    )
  })

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const handleDelete = () => {
    deleteMutation.mutate(instrument.id)
  }

  // return
  return (
    <li className='flex items-center gap-2 rounded border p-3'>
      {isEditing ? (
        <form onSubmit={onSubmit} className='flex flex-1 items-center gap-2'>
          <Input
            {...register('name', {
              required: 'Instrument name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
            autoFocus={true}
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
            isDisabled={updateMutation.isPending}
            onKeyDown={handleKeyDown}
            onBlur={onSubmit}
          />
          <Button type='button' onClick={handleCancel} disabled={updateMutation.isPending}>
            Cancel
          </Button>
        </form>
      ) : (
        <>
          <span className='flex-1'>{instrument.name}</span>
          <Button
            variant='outline'
            onClick={handleEdit}
            className='text-blue-600 disabled:opacity-50'
            disabled={deleteMutation.isPending}
          >
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            className='text-red-600 disabled:opacity-50'
            disabled={deleteMutation.isPending}
          >
            {deleteMutation.isPending && deleteMutation.variables === instrument.id ? 'Deleting...' : 'Delete'}
          </Button>
        </>
      )}
    </li>
  )
}

export default InstrumentListItem
