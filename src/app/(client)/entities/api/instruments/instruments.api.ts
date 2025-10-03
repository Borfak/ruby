import { getSupabaseServerClient } from '@/pkg/integrations/supabase/supabase.server'

import { type Instrument } from '../../models'

export async function fetchInstruments(): Promise<Instrument[]> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase.from('instruments').select('id, name').order('id', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data ?? []
}
