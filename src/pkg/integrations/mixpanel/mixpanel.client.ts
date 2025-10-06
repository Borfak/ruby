'use client'

import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env/env.client'

let isInitialized = false

// Initialize Mixpanel once
const initMixpanel = () => {
  if (isInitialized) return

  const token = envClient.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (!token) return

  mixpanel.init(token, {
    track_pageview: true,
    persistence: 'localStorage',
    autocapture: true,
    debug: false,
    record_sessions_percent: 0,
    api_host: 'https://api-eu.mixpanel.com',
  })
  isInitialized = true
}

// Initialize on import
initMixpanel()

// Simplified Mixpanel functions
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (!isInitialized) return
  mixpanel.track(eventName, properties)
}

export const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
  if (!isInitialized) return
  mixpanel.identify(userId)
  if (traits) {
    mixpanel.people.set(traits)
  }
}

export const trackPageView = (pageName?: string, properties?: Record<string, unknown>) => {
  if (!isInitialized) return
  mixpanel.track('Page View', {
    page: pageName ?? window.location.pathname,
    ...properties,
  })
}

// Track initial page view
if (typeof window !== 'undefined') {
  trackPageView(window.location.pathname)
}
