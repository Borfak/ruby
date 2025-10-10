import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

// instruments table
export const instruments = pgTable('instruments', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// instrument type
export type Instrument = typeof instruments.$inferSelect
