'use client'

import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { PostsList } from '../../features/posts-list'

const HeroBlockComponent = dynamic(() =>
    import('../../features/block').then(m => m.HeroBlockComponent)
)

interface IProps {
    locale: string
}

const HomeModule: FC<Readonly<IProps>> = ({ locale }) => {
    return (
        <div className='flex flex-col gap-6'>
            <HeroBlockComponent />
            <PostsList locale={locale} />
        </div>
    )
}

export default HomeModule
