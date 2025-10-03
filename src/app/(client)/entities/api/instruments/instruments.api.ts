// imports
import { getSupabaseServerClient } from '@/pkg/integrations/supabase/supabase.server'

import { type Instrument } from '../../models'

// api - fetch instruments from Supabase
export async function fetchInstruments(): Promise<Instrument[]> {
  const supabase = getSupabaseServerClient()
  
  // query instruments table
  const { data, error } = await supabase.from('instruments').select('id, name').order('id', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data ?? []
}
