import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
	isLoading: boolean;
	error: string | null;
	searchQuery: string;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	clearError: () => void;
	setSearchQuery: (query: string) => void;
}

export const useAppStore = create<AppState>()(
	devtools(
		(set) => ({
			isLoading: false,
			error: null,
			searchQuery: '',
			setLoading: (isLoading) => set({ isLoading }),
			setError: (error) => set({ error }),
			clearError: () => set({ error: null }),
			setSearchQuery: (searchQuery) => set({ searchQuery }),
		})	
	)
);
