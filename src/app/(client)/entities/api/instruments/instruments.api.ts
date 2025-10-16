import ky from 'ky'

import type { Instrument } from '../../db/schemas'

export const getInstrumentsList = async (): Promise<Instrument[]> => {
  return ky.get('/api/instruments').json<Instrument[]>()
}

export const createInstrument = async (name: string): Promise<Instrument> => {
  return ky.post('/api/instruments', { json: { name } }).json<Instrument>()
}

export const updateInstrument = async (id: number, name: string): Promise<Instrument> => {
  return ky.put('/api/instruments', { json: { id, name } }).json<Instrument>()
}

export const deleteInstrument = async (id: number): Promise<void> => {
  await ky.delete('/api/instruments', { json: { id } })
}
