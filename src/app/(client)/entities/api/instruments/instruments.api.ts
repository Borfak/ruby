import { dbService } from '../../db'
import type { Instrument } from '../../db/schemas'

// api
export const getInstrumentsList = async (): Promise<Instrument[]> => {
  return dbService.instruments.findAll()
}
