import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { postsListOptions } from '@/client/entities/api'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

import { HomeModule } from '../../modules/home/index'

interface IProps {
  params: Promise<{ locale: Locale }>
}

export const revalidate = 30

const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(postsListOptions())

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <HomeModule locale={locale} />
    </HydrationBoundary>
  )
}

export default HomePage
