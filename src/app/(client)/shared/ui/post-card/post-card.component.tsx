'use client'

import { type FC } from 'react'

import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'

import type { Post } from '@/app/(client)/entities/models'
import { trackEvent } from '@/pkg/integrations/mixpanel'
import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {
  post: Post
  locale?: string
  isNewDesign?: boolean
}

// component
const PostCard: FC<Readonly<IProps>> = (props) => {
  const { post, isNewDesign = false } = props

  // track post click event
  const handlePostClick = () => {
    trackEvent('Post Card Clicked', {
      post_id: post.id,
      post_title: post.title,
      user_id: post.userId,
      design_variant: isNewDesign ? 'new' : 'old',
    })
  }

  // render new design variant
  if (isNewDesign) {
    return (
      <Link href={`/posts/${post.id}`} className='block' onClick={handlePostClick}>
        <Card
          isPressable
          isHoverable
          className='h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
        >
          <CardHeader className='pb-0'>
            <div className='flex w-full items-start justify-between'>
              <h3 className='text-foreground line-clamp-2 text-xl font-bold'>{post.title}</h3>
              <Chip size='sm' variant='flat' color='secondary'>
                #{post.id}
              </Chip>
            </div>
          </CardHeader>
          <CardBody className='pt-3'>
            <p className='text-foreground-700 line-clamp-4 text-base leading-relaxed'>{post.body}</p>
          </CardBody>
          <CardFooter className='flex-col items-start gap-2 pt-0'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-foreground-500 text-sm font-medium'>User {post.userId}</span>
              <Chip size='sm' variant='dot' color='success'>
                New
              </Chip>
            </div>
          </CardFooter>
        </Card>
      </Link>
    )
  }

  // render old design variant
  return (
    <Link href={`/posts/${post.id}`} className='block' onClick={handlePostClick}>
      <Card isPressable isHoverable className='h-full transition-transform duration-200 hover:-translate-y-1'>
        <CardHeader className='pb-0'>
          <h3 className='text-foreground line-clamp-2 text-lg font-semibold'>{post.title}</h3>
        </CardHeader>
        <CardBody className='pt-2'>
          <p className='text-foreground-600 line-clamp-3 text-sm'>{post.body}</p>
        </CardBody>
        <CardFooter className='justify-between pt-0'>
          <Chip size='sm' variant='flat' color='primary'>
            #{post.id}
          </Chip>
          <span className='text-foreground-400 text-xs'>User {post.userId}</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PostCard
