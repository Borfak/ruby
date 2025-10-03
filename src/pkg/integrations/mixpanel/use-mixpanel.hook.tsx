'use client'

import { useCallback } from 'react'

import { mixpanelClient } from './mixpanel.client'

export const useMixpanel = () => {
  const track = useCallback((eventName: string, properties?: Record<string, any>) => {
    mixpanelClient.track(eventName, properties)
  }, [])

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    mixpanelClient.identify(userId, traits)
  }, [])

  const trackPageView = useCallback((pageName?: string, properties?: Record<string, any>) => {
    mixpanelClient.trackPageView(pageName, properties)
  }, [])

  return {
    track,
    identify,
    trackPageView,
  }
}
