'use client'

import dynamic from 'next/dynamic'
import { Locale } from 'next-intl'
import type { FC } from 'react'

import { PostsList } from '../../features/posts-list'

const HeroBlockComponent = dynamic(() => import('../../features/block').then((m) => m.HeroBlockComponent))

interface IProps {
  locale: Locale
  isNewPostCardDesignEnabled: boolean
}

const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { locale, isNewPostCardDesignEnabled } = props

  return (
    <div className='flex flex-col gap-6'>
      <HeroBlockComponent />
      <PostsList locale={locale} isNewPostCardDesignEnabled={isNewPostCardDesignEnabled} />
    </div>
  )
}

export default HomeModule
