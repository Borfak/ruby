import ky from 'ky'

import { dbService } from '../../db'
import type { Instrument } from '../../db/schemas'

// server-side api
export const getInstrumentsList = async (): Promise<Instrument[]> => {
  return dbService.instruments.findAll()
}

// client-side api
export const createInstrument = async (name: string): Promise<Instrument> => {
  return ky.post('/api/instruments', { json: { name } }).json<Instrument>()
}

export const updateInstrument = async (id: number, name: string): Promise<Instrument> => {
  return ky.put('/api/instruments', { json: { id, name } }).json<Instrument>()
}

export const deleteInstrument = async (id: number): Promise<void> => {
  await ky.delete('/api/instruments', { json: { id } })
}
