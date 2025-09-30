import { queryOptions } from '@tanstack/react-query'

import { getPostById, getPostBySlug, getPostsList, getUserById } from './posts.api'

// options
export const postsListOptions = () =>
  queryOptions({
    queryKey: ['posts', 'list'] as const,
    queryFn: (opt) => getPostsList(opt),
  })

export const postByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ['posts', 'detail', id] as const,
    queryFn: (opt) => getPostById(opt, { id }),
    enabled: !!id && id > 0,
  })

export const postBySlugOptions = (slug: string) =>
  queryOptions({
    queryKey: ['posts', 'slug', slug] as const,
    queryFn: (opt) => getPostBySlug(opt, { slug }),
    enabled: !!slug,
  })

export const userByIdOptions = (userId: number) =>
  queryOptions({
    queryKey: ['users', 'detail', userId] as const,
    queryFn: (opt) => getUserById(opt, { userId }),
    enabled: !!userId && userId > 0,
  })
