import type { QueryFunctionContext } from '@tanstack/react-query'
import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'
import type { Post, User } from '../../models'

//GET request helper
const apiGet = async <T>(opt: QueryFunctionContext, url: string): Promise<T> => {
  return restApiFetcher
    .get(url, { signal: opt.signal, cache: 'force-cache', next: { revalidate: 30 } })
    .json()
}

export const postsQueryApi = {
  list: (opt: QueryFunctionContext) => apiGet<Post[]>(opt, 'posts'),

  byId: (opt: QueryFunctionContext, { id }: { id: number }) =>
    apiGet<Post>(opt, `posts/${id}`),

  bySlug: (opt: QueryFunctionContext, { slug }: { slug: string }) => {
    const id = parseInt(slug, 10)
    if (isNaN(id)) throw new Error('Invalid post slug')
    return apiGet<Post>(opt, `posts/${id}`)
  },

  userById: (opt: QueryFunctionContext, { userId }: { userId: number }) =>
    apiGet<User>(opt, `users/${userId}`),
}
