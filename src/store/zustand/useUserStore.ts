import { create } from 'zustand';

interface UserState {
  name: string;
  isLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  setName: (name: string) => void;
  toggleLogin: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: '',
  isLoggedIn: false,
  setName: (name) => set(() => ({ name })),
  toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}));
