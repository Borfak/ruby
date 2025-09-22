import type { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

import type { Post, User } from '../../models'

export const postsQueryApi = {
  list: async (opt: QueryFunctionContext): Promise<Post[]> => {
    return restApiFetcher.get('posts', { signal: opt.signal }).json()
  },

  byId: async (opt: QueryFunctionContext, params: { id: number }): Promise<Post> => {
    const { id } = params
    return restApiFetcher.get(`posts/${id}`, { signal: opt.signal }).json()
  },

  bySlug: async (opt: QueryFunctionContext, params: { slug: string }): Promise<Post> => {
    const { slug } = params
    const id = parseInt(slug, 10)
    if (isNaN(id)) {
      throw new Error('Invalid post slug')
    }
    return restApiFetcher.get(`posts/${id}`, { signal: opt.signal }).json()
  },

  userById: async (opt: QueryFunctionContext, params: { userId: number }): Promise<User> => {
    const { userId } = params
    return restApiFetcher.get(`users/${userId}`, { signal: opt.signal }).json()
  },
}
