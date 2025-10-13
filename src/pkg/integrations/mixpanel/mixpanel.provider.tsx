'use client'

import { type FC, type ReactNode, useEffect } from 'react'

import { mixpanelService } from './mixpanel.client'

// interface
interface IProps {
  children: ReactNode
}

// component
export const MixpanelProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  useEffect(() => {
    mixpanelService.init()
  }, [])

  return <>{children}</>
}
