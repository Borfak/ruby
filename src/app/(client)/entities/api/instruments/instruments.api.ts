import type { QueryFunctionContext } from '@tanstack/react-query'

import { supabaseFetcher } from '@/pkg/libraries/rest-api/fetcher/supabase.fetcher'

import type { Instrument } from '../../models'

// GET request helper for Supabase
const apiGet = async <T>(opt: QueryFunctionContext, url: string): Promise<T> => {
  return supabaseFetcher
    .get(url, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()
}

// api
export const getInstrumentsList = (opt: QueryFunctionContext) =>
  apiGet<Instrument[]>(opt, 'instruments?select=id,name&order=id.asc')
