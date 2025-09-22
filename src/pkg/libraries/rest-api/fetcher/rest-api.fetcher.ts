import ky, { type KyInstance } from 'ky'

import { envClient } from '@/config/env/env.client'

export const restApiFetcher: KyInstance = ky.create({
  prefixUrl: `${envClient.NEXT_PUBLIC_CLIENT_API_URL}`,

  credentials: 'include',
  throwHttpErrors: false,
})
