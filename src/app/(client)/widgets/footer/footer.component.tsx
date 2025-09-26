'use client'

import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const Footer: FC<Readonly<IProps>> = () => {
  const t = useTranslations('components.footer')

  // return
  return (
    <footer className='border-divider bg-background/70 border-t backdrop-blur'>
      <div className='mx-auto w-full max-w-screen-lg px-4 py-8 md:px-6'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-foreground-500 text-center text-sm sm:text-left'>
            © {new Date().getFullYear()} Ruby. {t('allRightsReserved')}
          </p>

          <div className='text-foreground-500 flex items-center gap-4'>
            <Link href='https://github.com' target='_blank' rel='noreferrer' className='hover:text-foreground'>
              {t('github')}
            </Link>

            <Link href='https://x.com' target='_blank' rel='noreferrer' className='hover:text-foreground'>
              {t('x')}
            </Link>

            <Link href='mailto:info@example.com' className='hover:text-foreground'>
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
