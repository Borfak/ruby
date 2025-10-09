'use client'

import { Search, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'

import { Link } from '@/pkg/libraries/locale'

import { useAppStore } from '../../shared/store'

// interface
interface IProps {}

// component
const Header: FC<Readonly<IProps>> = () => {
  const t = useTranslations('components.nav')

  const searchQuery = useAppStore((state) => state.searchQuery)
  const handleAppStore = useAppStore((state) => state.handleAppStore)

  // return
  return (
    <Navbar
      maxWidth='xl'
      className='border-divider bg-background/70 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur'
    >
      <NavbarContent justify='start'>
        <NavbarMenuToggle className='sm:hidden' aria-label={t('openMenu')} />

        <NavbarBrand>
          <Link href={'/'} className='text-foreground inline-flex items-center gap-2 font-bold'>
            <Sparkles size={18} className='text-primary' />
            Ruby
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden w-64 md:flex'>
          <Input
            size='sm'
            radius='lg'
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => handleAppStore({ searchQuery: e.target.value })}
            startContent={<Search size={16} className='text-foreground-400' />}
            variant='bordered'
          />
        </NavbarItem>

        <NavbarItem className='sm:hidden'>
          <Button isIconOnly variant='light' aria-label={t('searchAria')}>
            <Search size={18} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href={'/'} className='text-foreground-600 hover:text-foreground w-full'>
            {t('home')}
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link href={'/'} className='text-foreground-600 hover:text-foreground w-full'>
            {t('posts')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
