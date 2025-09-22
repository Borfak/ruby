import Link from 'next/link'
import { type FC } from 'react'

import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'

import type { Post } from '@/app/(client)/entities/models'

interface IProps {
  post: Post
  locale?: string
}

export const PostCard: FC<IProps> = ({ post, locale = 'en' }) => {
  return (
    <Link href={`/${locale}/posts/${post.id}`} className='block'>
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
