'use client'

import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env'

class MixpanelClient {
  private static instance: MixpanelClient | null = null
  private isInitialized = false

  private constructor() {
    this.initialize()
  }

  public static getInstance(): MixpanelClient {
    if (!MixpanelClient.instance) {
      MixpanelClient.instance = new MixpanelClient()
    }

    return MixpanelClient.instance
  }

  private initialize(): void {
    if (this.isInitialized) return

    const token = envClient.NEXT_PUBLIC_MIXPANEL_TOKEN
    if (!token) return

    mixpanel.init(token, {
      track_pageview: true,
      persistence: 'localStorage',
      autocapture: true,
      debug: false,
      record_sessions_percent: 0,
      api_host: envClient.NEXT_PUBLIC_MIXPANEL_API_HOST,
    })

    this.isInitialized = true

    // track initial page view
    if (typeof window !== 'undefined') {
      this.trackPageView(window.location.pathname)
    }
  }

  public trackEvent(eventName: string, properties?: Record<string, unknown>): void {
    if (!this.isInitialized) return
    mixpanel.track(eventName, properties)
  }

  public identifyUser(userId: string, traits?: Record<string, unknown>): void {
    if (!this.isInitialized) return

    mixpanel.identify(userId)

    if (traits) {
      mixpanel.people.set(traits)
    }
  }

  public trackPageView(pageName?: string, properties?: Record<string, unknown>): void {
    if (!this.isInitialized) return
    mixpanel.track('Page View', {
      page: pageName ?? window.location.pathname,
      ...properties,
    })
  }
}

// export methods
const mixpanelInstance = MixpanelClient.getInstance()

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  mixpanelInstance.trackEvent(eventName, properties)
}

export const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
  mixpanelInstance.identifyUser(userId, traits)
}

export const trackPageView = (pageName?: string, properties?: Record<string, unknown>) => {
  mixpanelInstance.trackPageView(pageName, properties)
}
