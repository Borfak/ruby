import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { FC } from 'react'

import { fetchInstruments } from '@/client/entities/api/instruments/instruments.api'
import InstrumentsModule from '@/client/modules/instruments/instruments.module'

export const revalidate = 30

interface IProps {
  params: Promise<{ locale: Locale }>
}

const InstrumentsPage: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params
  setRequestLocale(locale)

  const instruments = await fetchInstruments()

  return <InstrumentsModule instruments={instruments} />
}

export default InstrumentsPage
