'use client'

import type { FC } from 'react'
import { useState } from 'react'

import { createInstrument, deleteInstrument, updateInstrument } from '../../entities/api/instruments'
import { Instrument } from '../../entities/db/schemas'
import { ContainerComponent } from '../../shared/ui/container'

// interface
interface IProps {
  initialInstruments: Instrument[]
}

// component
const InstrumentsModule: FC<Readonly<IProps>> = ({ initialInstruments }) => {
  const [instruments, setInstruments] = useState<Instrument[]>(initialInstruments)
  const [name, setName] = useState('')
  const [editId, setEditId] = useState<number | null>(null)

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    const newInstrument = await createInstrument(name)
    setInstruments([...instruments, newInstrument])
    setName('')
  }

  const handleUpdate = async (id: number, newName: string) => {
    const updated = await updateInstrument(id, newName)
    setInstruments(instruments.map((i) => (i.id === id ? updated : i)))
    setEditId(null)
  }

  const handleDelete = async (id: number) => {
    await deleteInstrument(id)
    setInstruments(instruments.filter((i) => i.id !== id))
  }

  // return
  return (
    <ContainerComponent variant='main' className='flex-1'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold'>Instruments</h1>

        <form onSubmit={handleCreate} className='flex gap-2'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Instrument name'
            className='flex-1 rounded border px-3 py-2'
          />
          <button type='submit' className='rounded bg-blue-500 px-4 py-2 text-white'>
            Add
          </button>
        </form>

        <ul className='flex flex-col gap-2'>
          {instruments.map((instrument) => (
            <li key={instrument.id} className='flex items-center gap-2 rounded border p-3'>
              {editId === instrument.id ? (
                <>
                  <input
                    type='text'
                    defaultValue={instrument.name}
                    className='flex-1 rounded border px-2 py-1'
                    onBlur={(e) => handleUpdate(instrument.id, e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdate(instrument.id, e.currentTarget.value)}
                    autoFocus
                  />
                  <button onClick={() => setEditId(null)} className='text-gray-500'>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className='flex-1'>{instrument.name}</span>
                  <button onClick={() => setEditId(instrument.id)} className='text-blue-600'>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(instrument.id)} className='text-red-600'>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </ContainerComponent>
  )
}

export default InstrumentsModule
