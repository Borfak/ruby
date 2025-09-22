'use client'

import { useTranslations } from 'next-intl'
import { type FC } from 'react'
import { usePostsQuery } from '../../entities/api'
import { useAppStore } from '../../shared/store'
import { ErrorMessage, LoadingSpinner, PostCard } from '../../shared/ui'

interface IProps {
    locale?: string
}

export const PostsList: FC<IProps> = ({ locale = 'en' }) => {
    const { data: posts, isLoading, isError, error } = usePostsQuery()
    const t = useTranslations('components.postsList')
    const searchQuery = useAppStore(state => state.searchQuery)

    if (isLoading) {
        return <LoadingSpinner size='lg' />
    }

    if (isError) {
        return (
            <ErrorMessage
                message={error?.message || t('failedToLoadPosts')}
                title={t('unableToLoadPosts')}
            />
        )
    }

    const normalized = (searchQuery || '').trim().toLowerCase()
    const postsArray = Array.isArray(posts) ? posts : []
    const filtered = postsArray.filter(
        p =>
            !normalized ||
            p.title.toLowerCase().includes(normalized) ||
            p.body.toLowerCase().includes(normalized)
    )

    if (!filtered || filtered.length === 0) {
        return (
            <div className='text-center py-8'>
                <p className='text-foreground-500'>{t('noPostsFound')}</p>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {filtered.map(post => (
                <PostCard key={post.id} post={post} locale={locale} />
            ))}
        </div>
    )
}
