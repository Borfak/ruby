import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
  isLoading: boolean
  error: string | null
  searchQuery: string
  handleSetLoading: (loading: boolean) => void
  handleSetError: (error: string | null) => void
  handleClearError: () => void
  handleSetSearchQuery: (query: string) => void
  handleClearStore: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      isLoading: false,
      error: null,
      searchQuery: '',
      handleSetLoading: (isLoading) => set({ isLoading }),
      handleSetError: (error) => set({ error }),
      handleClearError: () => set({ error: null }),
      handleSetSearchQuery: (searchQuery) => set({ searchQuery }),
      handleClearStore: () => set({ isLoading: false, error: null, searchQuery: '' }),
    }),
    { enabled: process.env.NODE_ENV === 'development', name: 'app-store' },
  ),
)
