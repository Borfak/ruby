import type { Post } from '@/app/(client)/entities/models'
import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'
import Link from 'next/link'
import { type FC } from 'react'

interface IProps {
    post: Post
    locale?: string
}

export const PostCard: FC<IProps> = ({ post, locale = 'en' }) => {
    return (
        <Link href={`/${locale}/posts/${post.id}`} className='block'>
            <Card
                isPressable
                isHoverable
                className='h-full transition-transform duration-200 hover:-translate-y-1'
            >
                <CardHeader className='pb-0'>
                    <h3 className='line-clamp-2 text-lg font-semibold text-foreground'>
                        {post.title}
                    </h3>
                </CardHeader>
                <CardBody className='pt-2'>
                    <p className='line-clamp-3 text-sm text-foreground-600'>{post.body}</p>
                </CardBody>
                <CardFooter className='pt-0 justify-between'>
                    <Chip size='sm' variant='flat' color='primary'>
                        #{post.id}
                    </Chip>
                    <span className='text-xs text-foreground-400'>User {post.userId}</span>
                </CardFooter>
            </Card>
        </Link>
    )
}
