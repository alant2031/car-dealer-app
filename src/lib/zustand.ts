import { create } from 'zustand';

interface AppState {
	modelYear: string;
	setModelYear: (year: string) => void;

	makeId: string;
	setMakeId: (id: string) => void;
}

export const useStore = create<AppState>()((set) => ({
	modelYear: '',
	setModelYear: (year: string) => set({ modelYear: year }),

	makeId: '',
	setMakeId: (id: string) => set({ makeId: id })
}));
