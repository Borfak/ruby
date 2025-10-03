import { GrowthBook } from '@growthbook/growthbook'

import { envServer } from '@/config/env/env.server'

const gb = new GrowthBook({
  apiHost: envServer.GROWTHBOOK_API_HOST,
  clientKey: envServer.GROWTHBOOK_CLIENT_KEY,
  enableDevMode: true,
})

let initialized = false
async function ensureInitialized() {
  if (!initialized) {
    await gb.init({ timeout: 2000 })
    initialized = true
  }
}

export async function getFeatureValue<T>(key: string, defaultValue: T, attributes: Record<string, any>): Promise<T> {
  await ensureInitialized()

  gb.setAttributes(attributes)

  const result = gb.evalFeature<T>(key)

  return result?.value ?? defaultValue
}
