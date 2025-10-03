'use client'

import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env/env.client'

let isInitialized = false

export const mixpanelClient = {
  init: () => {
    if (isInitialized) return

    const token = envClient.NEXT_PUBLIC_MIXPANEL_TOKEN
    if (!token) {
      return
    }

    mixpanel.init(token, {
      track_pageview: true,
      persistence: 'localStorage',
      autocapture: true,
    })
    isInitialized = true
  },

  identify: (userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return
    mixpanel.identify(userId)
    if (traits) {
      mixpanel.people.set(traits)
    }
  },

  track: (eventName: string, properties?: Record<string, any>) => {
    if (!isInitialized) return
    mixpanel.track(eventName, properties)
  },

  trackPageView: (pageName?: string, properties?: Record<string, any>) => {
    if (!isInitialized) return
    mixpanel.track_pageview(properties)
  },
}
