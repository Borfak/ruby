import { type FC } from 'react'

import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'

import type { Post } from '@/app/(client)/entities/models'
import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {
  post: Post
  locale?: string
}

// component
const PostCard: FC<Readonly<IProps>> = ({ post }) => {
  // return
  return (
    <Link href={`/posts/${post.id}`} className='block'>
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
