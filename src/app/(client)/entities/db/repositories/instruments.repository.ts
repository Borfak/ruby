import { db } from '@/pkg/integrations/drizzle'

import { instruments } from '../schemas'

// instruments repository
export const InstrumentsRepository = {
  findAll: async () => {
    return db.select().from(instruments)
  },
}
