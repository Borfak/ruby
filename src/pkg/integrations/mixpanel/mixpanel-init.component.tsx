'use client'

// eslint-disable-next-line no-restricted-imports
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { mixpanelClient } from './mixpanel.client'

interface IProps {
  userId?: string
  userTraits?: Record<string, unknown>
}

export const MixpanelInit = ({ userId, userTraits }: IProps) => {
  const pathname = usePathname()

  useEffect(() => {

 mixpanelClient.init()
  }, [])

  useEffect(() => {
    if (userId) {
      mixpanelClient.identify(userId, userTraits)
    } else {
      return
    }
  }, [userId, userTraits])

  useEffect(() => {
    mixpanelClient.trackPageView(pathname)
  }, [pathname])

  return null
}
