import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// interface
interface IState {
  error: string | null
  searchQuery: string
}

interface IStore extends IState {
  handleAppStore: (value: Partial<IState>) => void
}

// store
export const useAppStore = create<IStore>()(
  devtools(
    (set) => ({
      error: null,
      searchQuery: '',
      handleAppStore: (value: Partial<IState>) => set((state: IState) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
