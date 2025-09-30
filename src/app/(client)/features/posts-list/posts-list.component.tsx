'use client'

import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { postsListOptions } from '../../entities/api'
import { useAppStore } from '../../shared/store'
import { ErrorMessage } from '../../shared/ui/error-message'
import { LoadingSpinner } from '../../shared/ui/loading-spinner'
import { PostCard } from '../../shared/ui/post-card'

//interface
interface IProps {
  locale?: string
}

//component
const PostsList: FC<Readonly<IProps>> = (props) => {
  const { locale = 'en' } = props
  const { data: posts, isLoading, isError, error } = useQuery(postsListOptions())
  const t = useTranslations('components.postsList')
  const searchQuery = useAppStore((state) => state.searchQuery)

  if (isLoading) {
    return <LoadingSpinner size='lg' />
  }

  if (isError) {
    return <ErrorMessage message={error?.message || t('failedToLoadPosts')} title={t('unableToLoadPosts')} />
  }

  const normalized = (searchQuery || '').trim().toLowerCase()
  const postsArray = Array.isArray(posts) ? posts : []
  const filtered = postsArray.filter(
    (p) => !normalized || p.title.toLowerCase().includes(normalized) || p.body.toLowerCase().includes(normalized),
  )

  if (!filtered || filtered.length === 0) {
    return (
      <div className='py-8 text-center'>
        <p className='text-foreground-500'>{t('noPostsFound')}</p>
      </div>
    )
  }

  // return
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} locale={locale} />
      ))}
    </div>
  )
}

export default PostsList
