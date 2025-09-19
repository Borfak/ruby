'use client'

import { Card, CardBody } from '@heroui/react'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

const HeroBlockComponent: FC = () => {
    const t = useTranslations('pages.home')
    return (
        <Card className='mb-8 overflow-hidden border border-divider bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
            <CardBody className='py-12 text-center'>
                <div className='mx-auto max-w-3xl space-y-5'>
                    <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight'>
                        {t('title')}
                    </h2>
                    <p className='text-foreground-600 md:text-lg'>{t('description')}</p>
                    
                </div>
            </CardBody>
        </Card>
    )
}

export default HeroBlockComponent
