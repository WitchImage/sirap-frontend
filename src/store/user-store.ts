import { type UserStore } from '@/types';
import { create } from 'zustand';

export const useUserStore = create<UserStore>(set => ({
    user: {
        email: undefined,
        token: undefined,
    },
}));
