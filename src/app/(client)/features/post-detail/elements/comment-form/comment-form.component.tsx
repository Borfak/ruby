'use client'

import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input, Textarea } from '@heroui/react'

import { useAppStore } from '../../../../shared/store'

interface CommentFormData {
  name: string
  email: string
  comment: string
}

interface IProps {
  postId: number
}

export const CommentForm: FC<Readonly<IProps>> = ({ postId }) => {
  const { handleSetLoading, handleClearError } = useAppStore()
  const t = useTranslations('components.commentForm')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>()

  const onSubmit = async (data: CommentFormData) => {
    try {
      handleSetLoading(true)
      handleClearError()

      console.log('Submitting comment for post:', postId, data)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      reset()

      alert(t('submitSuccess'))
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      handleSetLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Input
          {...register('name', {
            required: t('nameRequired'),
            minLength: {
              value: 2,
              message: t('nameTooShort'),
            },
          })}
          label={t('name')}
          placeholder={t('yourName')}
          variant='bordered'
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message}
        />

        <Input
          {...register('email', {
            required: t('emailRequired'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('emailInvalid'),
            },
          })}
          label={t('email')}
          type='email'
          placeholder={t('yourEmail')}
          variant='bordered'
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />
      </div>

      <Textarea
        {...register('comment', {
          required: t('commentRequired'),
          minLength: {
            value: 10,
            message: t('commentTooShort'),
          },
        })}
        label={t('comment')}
        placeholder={t('commentPlaceholder')}
        variant='bordered'
        minRows={4}
        isInvalid={!!errors.comment}
        errorMessage={errors.comment?.message}
      />

      <div className='flex justify-end'>
        <Button
          type='submit'
          color='primary'
          isLoading={isSubmitting}
          startContent={!isSubmitting && <Send size={16} />}
          className='min-w-32'
        >
          {isSubmitting ? t('submitting') : t('submitComment')}
        </Button>
      </div>
    </form>
  )
}
