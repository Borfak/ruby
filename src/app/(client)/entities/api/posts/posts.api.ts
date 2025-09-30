import type { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

import type { Post, User } from '../../models'

// GET request helper
const apiGet = async <T>(opt: QueryFunctionContext, url: string): Promise<T> => {
  return restApiFetcher.get(url, { signal: opt.signal, cache: 'force-cache', next: { revalidate: 30 } }).json()
}

// api
export const getPostsList = (opt: QueryFunctionContext) => apiGet<Post[]>(opt, 'posts')

export const getPostById = (opt: QueryFunctionContext, { id }: { id: number }) => apiGet<Post>(opt, `posts/${id}`)

export const getPostBySlug = (opt: QueryFunctionContext, { slug }: { slug: string }) => {
  const id = parseInt(slug, 10)
  if (isNaN(id)) throw new Error('Invalid post slug')
  return apiGet<Post>(opt, `posts/${id}`)
}

export const getUserById = (opt: QueryFunctionContext, { userId }: { userId: number }) =>
  apiGet<User>(opt, `users/${userId}`)
