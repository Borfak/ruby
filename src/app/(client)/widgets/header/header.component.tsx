'use client'

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@heroui/react'
import { Search, Sparkles } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { useAppStore } from '../../shared/store'

const Header: FC = () => {
    const locale = useLocale()
    const t = useTranslations('components.nav')

    const searchQuery = useAppStore(state => state.searchQuery)
    const setSearchQuery = useAppStore(state => state.setSearchQuery)
    const { theme, setTheme, resolvedTheme } = useTheme()

    return (
        <Navbar
            maxWidth='xl'
            className='border-b border-divider bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        >
            <NavbarContent justify='start'>
                <NavbarMenuToggle className='sm:hidden' aria-label={t('openMenu')} />
                <NavbarBrand>
                    <Link
                        href={`/${locale}`}
                        className='inline-flex items-center gap-2 font-bold text-foreground'
                    >
                        <Sparkles size={18} className='text-primary' />
                        Ruby
                    </Link>
                </NavbarBrand>
            </NavbarContent>


            <NavbarContent justify='end'>
                <NavbarItem className='hidden md:flex w-64'>
                    <Input
                        size='sm'
                        radius='lg'
                        placeholder={t('searchPlaceholder')}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        startContent={<Search size={16} className='text-foreground-400' />}
                        variant='bordered'
                    />
                </NavbarItem>
                <NavbarItem>
                    <Dropdown placement='bottom-end'>
                        <DropdownTrigger>
                            <Button variant='flat' size='sm'>
                                {resolvedTheme === 'dark'
                                    ? 'Dark'
                                    : resolvedTheme === 'light'
                                    ? 'Light'
                                    : 'System'}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label='Theme selector'
                            selectedKeys={new Set([theme || 'system'])}
                            selectionMode='single'
                        >
                            <DropdownItem key='light' onPress={() => setTheme('light')}>
                                Light
                            </DropdownItem>
                            <DropdownItem key='dark' onPress={() => setTheme('dark')}>
                                Dark
                            </DropdownItem>
                            <DropdownItem key='system' onPress={() => setTheme('system')}>
                                System
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem className='sm:hidden'>
                    <Button isIconOnly variant='light' aria-label={t('searchAria')}>
                        <Search size={18} />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        href={`/${locale}`}
                        className='w-full text-foreground-600 hover:text-foreground'
                    >
                        {t('home')}
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        href={`/${locale}`}
                        className='w-full text-foreground-600 hover:text-foreground'
                    >
                        {t('posts')}
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default Header
