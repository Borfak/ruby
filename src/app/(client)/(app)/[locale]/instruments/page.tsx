import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { FC } from 'react'

import { getInstrumentsList } from '@/client/entities/api/instruments'
import InstrumentsModule from '@/client/modules/instruments/instruments.module'

export const dynamic = 'force-dynamic'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const InstrumentsPage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const instruments = await getInstrumentsList()

  return <InstrumentsModule initialInstruments={instruments} />
}

export default InstrumentsPage
