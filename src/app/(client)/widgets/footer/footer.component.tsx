'use client'

import { useTranslations } from 'next-intl'
import type { FC } from 'react'

const Footer: FC = () => {
    const t = useTranslations('components.footer')
    return (
        <footer className='border-t border-divider bg-background/70 backdrop-blur'>
            <div className='mx-auto w-full max-w-screen-lg px-4 md:px-6 py-8'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <p className='text-center sm:text-left text-sm text-foreground-500'>
                        © {new Date().getFullYear()} Ruby. {t('allRightsReserved')}
                    </p>
                    <div className='flex items-center gap-4 text-foreground-500'>
                        <a
                            href='https://github.com'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-foreground'
                        >
                            {t('github')}
                        </a>
                        <a
                            href='https://x.com'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-foreground'
                        >
                            {t('x')}
                        </a>
                        <a href='mailto:info@example.com' className='hover:text-foreground'>
                            {t('contact')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
