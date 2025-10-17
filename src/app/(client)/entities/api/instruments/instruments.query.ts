import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { createInstrument, deleteInstrument, getInstrumentsList, updateInstrument } from './instruments.api'

// options
export const instrumentsListOptions = () =>
  queryOptions({
    queryKey: ['instruments', 'list'] as const,
    queryFn: (opt) => getInstrumentsList(opt),
  })

// mutations
export const useCreateInstrument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (name: string) => createInstrument(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['instruments', 'list'] })
    },
  })
}

export const useUpdateInstrument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) => updateInstrument(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['instruments', 'list'] })
    },
  })
}

export const useDeleteInstrument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteInstrument(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['instruments', 'list'] })
    },
  })
}

