import { NextRequest, NextResponse } from 'next/server'

import { dbService } from '@/client/entities/db'

// GET all instruments
export async function GET() {
  const instruments = await dbService.instruments.findAll()
  return NextResponse.json(instruments)
}

// POST new instrument
export async function POST(request: NextRequest) {
  const { name } = await request.json()
  const instrument = await dbService.instruments.create({ name })
  return NextResponse.json(instrument)
}

// PUT update instrument
export async function PUT(request: NextRequest) {
  const { id, name } = await request.json()
  const instrument = await dbService.instruments.update(id, { name })
  return NextResponse.json(instrument)
}

// DELETE instrument
export async function DELETE(request: NextRequest) {
  const { id } = await request.json()
  await dbService.instruments.delete(id)
  return NextResponse.json({ success: true })
}
