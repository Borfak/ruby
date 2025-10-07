import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { FC } from 'react'

import { getInstrumentsList } from '@/client/entities/api/instruments'
import InstrumentsModule from '@/client/modules/instruments/instruments.module'
import { ErrorMessage } from '@/client/shared/ui/error-message'

// cache
export const revalidate = 30

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const InstrumentsPage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params
  setRequestLocale(locale)

  // fetch data on server
  try {
    const instruments = await getInstrumentsList()
    return <InstrumentsModule instruments={instruments} />
  } catch {
    return <ErrorMessage message='Failed to load instruments. Please try again later.' />
  }
}

export default InstrumentsPage
