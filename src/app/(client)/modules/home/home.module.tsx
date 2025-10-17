'use client'

import dynamic from 'next/dynamic'
import { Locale } from 'next-intl'
import type { FC } from 'react'

import { PostsList } from '@/app/(client)/features/posts/posts-list'
import { ContainerComponent } from '@/app/(client)/shared/ui/container'

const HeroBlockComponent = dynamic(() =>
  import('@/app/(client)/features/posts/block').then((m) => m.HeroBlockComponent),
)

// interface
interface IProps {
  locale: Locale
  isNewPostCardDesignEnabled: boolean
}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { locale, isNewPostCardDesignEnabled } = props

  // return
  return (
    <ContainerComponent variant='main' className='flex-1'>
      <div className='flex flex-col gap-6'>
        <HeroBlockComponent />

        <PostsList locale={locale} isNewPostCardDesignEnabled={isNewPostCardDesignEnabled} />
      </div>
    </ContainerComponent>
  )
}

export default HomeModule
