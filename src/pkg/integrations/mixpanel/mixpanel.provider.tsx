'use client'

import { FC, PropsWithChildren, useEffect } from 'react'

import { mixpanelClient } from './mixpanel.client'

// interface
interface IProps extends PropsWithChildren {
  userId?: string
  userTraits?: Record<string, any>
}

// component
export const MixpanelProvider: FC<Readonly<IProps>> = (props) => {
  const { children, userId, userTraits } = props

  useEffect(() => {
    mixpanelClient.init()
  }, [])

  useEffect(() => {
    if (userId) {
      mixpanelClient.identify(userId, userTraits)
    }
  }, [userId, userTraits])

  return <>{children}</>
}
