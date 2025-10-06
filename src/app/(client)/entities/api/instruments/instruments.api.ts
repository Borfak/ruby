import { supabase } from '@/pkg/integrations/supabase'

import type { Instrument } from '../../models'

// api
export const getInstrumentsList = async (): Promise<Instrument[]> => {
  const { data, error } = await supabase().from('instruments').select('id,name').order('id', { ascending: true })

  if (error) {
    throw new Error(`Failed to fetch instruments: ${error.message}`)
  }

  return data || []
}
