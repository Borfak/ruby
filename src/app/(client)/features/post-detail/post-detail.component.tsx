'use client'

import { Calendar, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { Avatar, Card, CardBody, CardHeader, Chip, Divider } from '@heroui/react'

import { CommentForm } from './elements/comment-form/comment-form.component'

import { usePostBySlugQuery, useUserQuery } from '../../entities/api'
import { ErrorMessage, LoadingSpinner } from '../../shared/ui'

interface IProps {
  slug: string
}

export const PostDetail: FC<Readonly<IProps>> = ({ slug }) => {
  const { data: post, isLoading: isPostLoading, isError: isPostError, error: postError } = usePostBySlugQuery(slug)

  const { data: user, isLoading: isUserLoading } = useUserQuery(post?.userId || 0)
  const t = useTranslations('components.postDetail')
  const tPost = useTranslations('pages.post')
  const tCommon = useTranslations('common')

  if (isPostLoading) {
    return <LoadingSpinner size='lg' />
  }

  if (isPostError) {
    return <ErrorMessage message={postError?.message || tPost('failedToLoad')} title={tPost('postNotFound')} />
  }

  if (!post) {
    return <ErrorMessage message={tPost('requestedPostNotFound')} title={tPost('postNotFound')} />
  }

  return (
    <div className='mx-auto max-w-4xl space-y-6'>
      <Card className='border-divider bg-background/80 border backdrop-blur'>
        <CardHeader className='pb-2'>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-foreground text-2xl font-bold md:text-3xl'>{post.title}</h1>

            <div className='flex items-center space-x-3'>
              <Avatar icon={<User />} name={user?.name || 'Loading...'} size='sm' className='bg-primary' />
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>
                  {isUserLoading ? tCommon('loading') : user?.name || t('unknownAuthor')}
                </span>
                <span className='text-foreground-400 text-xs'>@{user?.username || 'username'}</span>
              </div>
              <Chip size='sm' variant='flat' color='primary' startContent={<Calendar size={12} />}>
                Post #{post.id}
              </Chip>
            </div>
          </div>
        </CardHeader>

        <Divider />

        <CardBody className='pt-6'>
          <div className='prose max-w-none'>
            <p className='text-foreground-700 text-base leading-relaxed'>{post.body}</p>
          </div>

          {user && (
            <div className='border-divider mt-6 border-t pt-4'>
              <h3 className='mb-2 text-sm font-semibold'>{t('aboutAuthor')}</h3>
              <div className='text-foreground-500 flex flex-col space-y-1 text-sm'>
                <span>
                  {t('email')}: {user.email}
                </span>
                <span>
                  {t('website')}: {user.website}
                </span>
                <span>
                  {t('company')}: {user.company.name}
                </span>
              </div>
            </div>
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className='text-lg font-semibold'>{t('addComment')}</h2>
        </CardHeader>
        <CardBody>
          <CommentForm postId={post.id} />
        </CardBody>
      </Card>
    </div>
  )
}
