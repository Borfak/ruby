import { eq } from 'drizzle-orm'

import { db } from '@/pkg/integrations/drizzle'

import { Instrument, instruments } from '../schemas'

// instruments repository
export const InstrumentsRepository = {
  // find all instruments
  findAll: async (): Promise<Instrument[]> => {
    return db.select().from(instruments)
  },

  // find instrument by id
  findById: async (id: number): Promise<Instrument | undefined> => {
    const result = await db.select().from(instruments).where(eq(instruments.id, id))
    return result[0]
  },

  // create new instrument
  create: async (data: { name: string }): Promise<Instrument> => {
    const result = await db
      .insert(instruments)
      .values({
        name: data.name,
      })
      .returning()
    return result[0]
  },

  // update instrument
  update: async (id: number, data: { name: string }): Promise<Instrument | undefined> => {
    const result = await db
      .update(instruments)
      .set({
        name: data.name,
        updatedAt: new Date(),
      })
      .where(eq(instruments.id, id))
      .returning()
    return result[0]
  },

  // delete instrument
  delete: async (id: number): Promise<void> => {
    await db.delete(instruments).where(eq(instruments.id, id))
  },
}
