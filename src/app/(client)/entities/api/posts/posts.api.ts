import ky from 'ky'

import type { QueryFunctionContext } from '@tanstack/react-query'

import type { Post, User } from '@/client/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

// GET request helper for external API
const apiGet = async <T>(opt: QueryFunctionContext, url: string): Promise<T> => {
  return restApiFetcher.get(url, { signal: opt.signal, cache: 'force-cache', next: { revalidate: 30 } }).json()
}

// api
export const getPostsList = (opt: QueryFunctionContext, params?: { q?: string }) => {
  if (params && params.q) {
    return ky.get('/api/posts', { searchParams: params, signal: opt.signal }).json<Post[]>()
  }

  return apiGet<Post[]>(opt, 'posts')
}

export const getPostById = (opt: QueryFunctionContext, { id }: { id: number }) => apiGet<Post>(opt, `posts/${id}`)

export const getPostBySlug = (opt: QueryFunctionContext, { slug }: { slug: string }) => {
  const id = parseInt(slug, 10)

  if (isNaN(id)) throw new Error('Invalid post slug')

  return apiGet<Post>(opt, `posts/${id}`)
}

export const getUserById = (opt: QueryFunctionContext, { userId }: { userId: number }) =>
  apiGet<User>(opt, `users/${userId}`)
