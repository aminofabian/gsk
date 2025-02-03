import { create } from 'zustand';
import { getDashboardData } from '@/actions/get-dashboard-data';

interface UserState {
  user: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    role: string;
    image: string | null;
  } | null;
  notifications: {
    id: string;
    title: string;
    message: string;
    time: string;
  }[];
  isLoading: boolean;
  error: string | null;
  fetchUserData: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  notifications: [],
  isLoading: false,
  error: null,
  fetchUserData: async () => {
    set({ isLoading: true });
    try {
      const data = await getDashboardData();
      if (data.error) {
        set({ error: data.error, isLoading: false });
      } else {
        set({ 
          user: data.user, 
          notifications: data.notifications,
          isLoading: false,
          error: null 
        });
      }
    } catch (error) {
      set({ 
        error: 'Failed to fetch user data', 
        isLoading: false 
      });
    }
  }
})); 