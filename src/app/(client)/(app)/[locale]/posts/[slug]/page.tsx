import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { type FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { postBySlugOptions, postsListOptions, userByIdOptions } from '@/client/entities/api/posts/posts.query'
import type { Post } from '@/client/entities/models'
import { getQueryClient } from '@/pkg/libraries/rest-api/service/rest-api.service'

import { PostDetail } from '../../../../features/post-detail'

interface IProps {
  params: Promise<{ locale: Locale; slug: string }>
}

export const revalidate = 30

async function prefetchPostDetail(slug: string) {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(postBySlugOptions(slug))

  const post = queryClient.getQueryData<Post>(['posts', 'slug', slug])
  if (post?.userId) {
    await queryClient.prefetchQuery(userByIdOptions(post.userId))
  }

  return dehydrate(queryClient)
}

// export async function generateStaticParams() {
//   try {
//     const queryClient = getQueryClient()
//     const posts = await queryClient.fetchQuery(postsListOptions()) as Post[]

//     return posts.slice(0, 20).map((post) => ({
//       slug: post.id.toString(),
//     }))
//   } catch (error) {
    
//     return []
//   }
// }

const PostPage: FC<Readonly<IProps>> = async ({ params }) => {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'pages.post' })

  const dehydratedState = await prefetchPostDetail(slug)

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Link href={`/${locale}`} className='text-foreground-600 hover:text-foreground inline-flex items-center gap-2'>
          <ArrowLeft size={16} />

          <span>{t('backToPosts')}</span>
        </Link>
      </div>

      <HydrationBoundary state={dehydratedState}>
        <PostDetail slug={slug} />
      </HydrationBoundary>
    </div>
  )
}

export default PostPage
