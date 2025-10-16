'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { FC, useState } from 'react'

import { Button } from '@/app/(client)/shared/ui'
import { Link } from '@/pkg/libraries/locale'

import { IMenuItem, MENU_ITEMS } from './myiq-header.constants'

// interface
interface IProps {}

// component
const MyIqHeaderComponent: FC<Readonly<IProps>> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // return
  return (
    <>
      <header className='bg-background/70 fixed top-0 right-0 left-0 z-50 shadow-md backdrop-blur'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6'>
          <div className='flex items-center gap-6'>
            <Link href='/'>
              <Image
                src='/icons/logo.svg'
                alt='myIQ Logo'
                height={30}
                width={105}
                className='h-[30px] w-[105px] cursor-pointer invert'
              />
            </Link>
            </div>

          <div className='hidden items-center gap-4 lg:flex'>
            <Button variant='outline' size='md'>
              Log in
            </Button>
            <Button variant='primary' size='md'>
              Start test
            </Button>
          </div>

          <button onClick={toggleMenu} className='text-dark-custom lg:hidden' aria-label='Toggle menu'>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between px-6 py-4 shadow-md'>
            <Link href='/'>
              <Image
                src='/icons/logo.svg'
                alt='myIQ Logo'
                height={30}
                width={105}
                className='h-[30px] w-[105px] cursor-pointer brightness-0'
              />
            </Link>
            <button onClick={toggleMenu} aria-label='Close menu'>
              <X size={28} />
            </button>
          </div>

          <nav className='flex flex-1 flex-col gap-1 px-6 py-6'>
            {MENU_ITEMS.map((item: IMenuItem) => (
              <a key={item.label} href={item.href} className='py-3 font-medium text-gray-500' onClick={toggleMenu}>
                {item.label}
              </a>
            ))}

            <div className='my-4 h-px bg-gray-200' />

            <div className='flex flex-col gap-3'>
              <Button variant='outline' size='lg' className='w-full text-gray-700' onClick={toggleMenu}>
                Log in
              </Button>
              <Button variant='primary' size='lg' className='w-full' onClick={toggleMenu}>
                Start test
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MyIqHeaderComponent
