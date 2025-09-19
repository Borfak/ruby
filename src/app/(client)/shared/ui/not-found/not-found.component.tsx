'use client'

import { CircleAlert } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { Button } from '@heroui/button'
import { useRouter } from '@/pkg/libraries/locale'


interface IProps {
    title?: string
    description?: string
    buttonText?: string
}

const NotFoundComponent: FC<Readonly<IProps>> = props => {
    const { title, description, buttonText } = props

    const t = useTranslations('pages.notFound')

    const router = useRouter()

    return (
        <div className='grid h-fit w-fit place-items-center items-center gap-4'>
            <CircleAlert className='text-primary size-10' />

            <h1 className='text-2xl font-bold'>{title || t('title')}</h1>

            <p className='text-foreground/70 text-sm'>
                {description || t('description')}
            </p>

            <Button variant='flat' className='w-fit' color='primary' onPress={() => router.back()}>
                {buttonText || t('backHome')}
            </Button>
        </div>
    )
}

export default NotFoundComponent
