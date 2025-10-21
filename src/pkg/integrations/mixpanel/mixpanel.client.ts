import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env/env.client'

class MixpanelClient {
  private static instance: MixpanelClient | null = null
  private initialized = false

  private constructor() {}

  public static getInstance(): MixpanelClient {
    if (!MixpanelClient.instance) {
      MixpanelClient.instance = new MixpanelClient()
    }
    return MixpanelClient.instance
  }

  private init() {
    if (this.initialized) return

    const token = envClient.NEXT_PUBLIC_MIXPANEL_TOKEN
    if (!token) return

    mixpanel.init(token, {
      track_pageview: true,
      persistence: 'localStorage',
      autocapture: true,
      debug: true,
      record_sessions_percent: 0,
      api_host: 'https://api-eu.mixpanel.com',
    })
    this.initialized = true
  }

  public track(event: string, props?: Record<string, unknown>) {
    this.init()
    if (!this.initialized) return
    mixpanel.track(event, props)
  }

  public identify(id: string) {
    this.init()
    if (!this.initialized) return
    mixpanel.identify(id)
  }

  public peopleSet(props: Record<string, unknown>) {
    this.init()
    if (!this.initialized) return
    mixpanel.people.set(props)
  }
}

export const mixpanelService = MixpanelClient.getInstance()
