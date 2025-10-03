import { queryOptions } from '@tanstack/react-query'

import { getInstrumentsList } from './instruments.api'

// options
export const instrumentsListOptions = () =>
  queryOptions({
    queryKey: ['instruments', 'list'] as const,
    queryFn: (opt) => getInstrumentsList(opt),
  })
