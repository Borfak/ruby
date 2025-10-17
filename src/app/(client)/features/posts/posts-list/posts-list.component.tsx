'use client'

import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { postsListOptions } from '@/app/(client)/entities/api'
import type { Post } from '@/app/(client)/entities/models'
import { useAppStore } from '@/app/(client)/shared/store'
import { ErrorMessage } from '@/app/(client)/shared/ui/error-message'
import { LoadingSpinner } from '@/app/(client)/shared/ui/loading-spinner'
import { PostCard } from '@/app/(client)/shared/ui/post-card'

// interface
interface IProps {
  locale?: string
  isNewPostCardDesignEnabled: boolean
}

// component
const PostsList: FC<Readonly<IProps>> = (props) => {
  const { locale = 'en', isNewPostCardDesignEnabled } = props
  const searchQuery = useAppStore((state) => state.searchQuery)
  const { data: posts, isLoading, isError, error } = useQuery(postsListOptions(searchQuery || ''))
  const t = useTranslations('components.postsList')
  const postsArray = Array.isArray(posts) ? posts : []

  if (isLoading) {
    return <LoadingSpinner size='lg' />
  }

  if (isError) {
    return <ErrorMessage message={error?.message || t('failedToLoadPosts')} title={t('unableToLoadPosts')} />
  }

  // empty state
  if (!postsArray || postsArray.length === 0) {
    return (
      <div className='py-8 text-center'>
        <p className='text-foreground-500'>{t('noPostsFound')}</p>
      </div>
    )
  }

  // return
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {postsArray.map((post: Post) => (
        <PostCard key={post.id} post={post} locale={locale} isNewDesign={isNewPostCardDesignEnabled} />
      ))}
    </div>
  )
}

export default PostsList
