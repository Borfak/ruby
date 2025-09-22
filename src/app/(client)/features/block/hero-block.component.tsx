'use client'

import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Card, CardBody } from '@heroui/react'

const HeroBlockComponent: FC = () => {
  const t = useTranslations('pages.home')
  return (
    <Card className='border-divider from-primary/5 via-background to-secondary/5 mb-8 overflow-hidden border bg-gradient-to-br'>
      <CardBody className='py-12 text-center'>
        <div className='mx-auto max-w-3xl space-y-5'>
          <h2 className='text-3xl font-extrabold tracking-tight md:text-4xl'>{t('title')}</h2>
          <p className='text-foreground-600 md:text-lg'>{t('description')}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default HeroBlockComponent
