import { cookies } from 'next/headers'
import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { postsListOptions } from '@/client/entities/api'
import { getFeatureValue } from '@/pkg/integrations/growthbook'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

import { HomeModule } from '../../modules/home/index'

// cache
export const revalidate = 30

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(postsListOptions())

  const dehydratedState = dehydrate(queryClient)

  // evaluate feature via GrowthBook
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value || 'anonymous'

  const isNewPostCardDesignEnabled = await getFeatureValue<boolean>('new_post_card_design', false, { id: userId })

  // return
  return (
    <HydrationBoundary state={dehydratedState}>
      <HomeModule locale={locale} isNewPostCardDesignEnabled={isNewPostCardDesignEnabled} />
    </HydrationBoundary>
  )
}

export default HomePage
