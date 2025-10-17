import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { instrumentsListOptions } from '@/client/entities/api'
import { InstrumentsModule } from '@/modules/instruments'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// cache
export const revalidate = 30

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const InstrumentsPage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(instrumentsListOptions())

  const dehydratedState = dehydrate(queryClient)

  // return
  return (
    <HydrationBoundary state={dehydratedState}>
      <InstrumentsModule />
    </HydrationBoundary>
  )
}

export default InstrumentsPage
