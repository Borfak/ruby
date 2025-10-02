'use client'

import { Calendar, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { Avatar, Card, CardBody, CardHeader, Chip, Divider, Skeleton } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { CommentForm } from './elements/comment-form'

import { postBySlugOptions, userByIdOptions } from '../../entities/api'

// interface
interface IProps {
  slug: string
}

// component
const PostDetail: FC<Readonly<IProps>> = (props) => {
  const { slug } = props
  const { data: post, isLoading: isPostLoading } = useQuery(postBySlugOptions(slug))
  const { data: user, isLoading: isUserLoading } = useQuery(userByIdOptions(post?.userId || 0))
  const t = useTranslations('components.postDetail')
  const tCommon = useTranslations('common')

  if (isPostLoading) {
    return (
      <div className='mx-auto max-w-4xl space-y-6'>
        <Card className='border-divider bg-background/80 border backdrop-blur'>
          <CardHeader className='pb-2'>
            <div className='flex flex-col space-y-4'>
              <Skeleton className='h-8 w-3/5 rounded-lg md:h-10' />
              <div className='flex items-center space-x-3'>
                <Skeleton className='h-8 w-8 rounded-full' />
                <div className='flex flex-col space-y-2'>
                  <Skeleton className='h-4 w-24 rounded' />
                  <Skeleton className='h-3 w-16 rounded' />
                </div>
                <Skeleton className='h-6 w-20 rounded-full' />
              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className='pt-6'>
            <div className='space-y-3'>
              <Skeleton className='h-4 w-full rounded' />
              <Skeleton className='h-4 w-4/5 rounded' />
              <Skeleton className='h-4 w-3/5 rounded' />
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }

  if (!post) {
    return (
      <div className='mx-auto max-w-4xl'>
        <Card className='border-danger bg-danger-50'>
          <CardBody className='text-center'>
            <p className='text-danger'>{tCommon('postNotFound')}</p>
          </CardBody>
        </Card>
      </div>
    )
  }

  // return
  return (
    <div className='mx-auto max-w-4xl space-y-6'>
      <Card className='border-divider bg-background/80 border backdrop-blur'>
        <CardHeader className='pb-2'>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-foreground text-2xl font-bold md:text-3xl'>{post.title}</h1>

            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <Avatar icon={<User />} name={user?.name || 'Loading...'} size='sm' className='bg-primary' />
                <div className='flex flex-col'>
                  <span className='text-sm font-medium'>
                    {isUserLoading ? tCommon('loading') : user?.name || t('unknownAuthor')}
                  </span>
                  <span className='text-foreground-400 text-xs'>@{user?.username || 'username'}</span>
                </div>
              </div>
              <Chip size='sm' variant='flat' color='primary' startContent={<Calendar size={12} />}>
                Post #{post.id}
              </Chip>
            </div>
          </div>
        </CardHeader>

        <Divider />
        <button
          onClick={() => {
            throw new Error('test error works')
          }}
        >
          Error
        </button>
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

export default PostDetail
