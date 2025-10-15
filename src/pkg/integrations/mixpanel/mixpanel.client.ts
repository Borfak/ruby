import mixpanel from 'mixpanel-browser'

import { envClient } from '@/config/env/env.client'

let initialized = false

function init() {
  if (initialized) return
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
  initialized = true
}

function track(event: string, props?: Record<string, unknown>) {
  init()
  if (!initialized) {
    return
  }
  mixpanel.track(event, props)
}

function identify(id: string) {
  init()
  if (!initialized) return
  mixpanel.identify(id)
}

function peopleSet(props: Record<string, unknown>) {
  init()
  if (!initialized) return
  mixpanel.people.set(props)
}

export const mixpanelService = {
  init,
  track,
  identify,
  peopleSet,
}
