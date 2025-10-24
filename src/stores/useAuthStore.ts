import { create } from "zustand";
import { get_auth, get_socials, getuser } from "../services/api";
import type { Socials } from "../types/Shared";

interface user {
  id: number;
  first_name: string;
  username: string;
  email: string;
  is_staff?: boolean
}

interface User {
    user: user;
    full_name: string;
    gender?: string;
    location?: string;
    nationality?: string;
    bio?: string;
    education?: string;
    phone?: string;
    biography?: string;
    experience?: string;
    birth_date?: string | null;
    profile_image?: string | null;
    user_type: "JS" | "EM" | "AD";
}

interface AuthState {
    user: User | null;
    socials: Socials | null;
    isAuthenticated: boolean;
    isGettingAuth: boolean;
    isGettingUser: boolean;

    setUser: (user: User | null) => void;
    setSocials: (socials: Socials | null) => void;
    setAuthenticated: (value: boolean) => void;
    setIsGettingAuth: (value: boolean) => void;
    setIsGettingUser: (value: boolean) => void;

    fetchAuth: () => Promise<void>;
    fetchUser: () => Promise<void>;
    fetchSocials: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    socials: null,
    isAuthenticated: false,
    isGettingAuth: false,
    isGettingUser: false,

    setUser: (user) => set({ user }),
    setSocials: (socials) => set({ socials }),
    setAuthenticated: (value) => set({ isAuthenticated: value }),
    setIsGettingAuth: (value) => set({ isGettingAuth: value }),
    setIsGettingUser: (value) => set({ isGettingUser: value }),

    fetchAuth: async () => {
        set({ isGettingAuth: true });
        try {
            const res = await get_auth();
            set({ isAuthenticated: res?.auth ?? false });
        } catch (err) {
            console.error("Auth check failed", err);
            set({ isAuthenticated: false });
        } finally {
            set({ isGettingAuth: false });
        }
    },

    fetchUser: async () => {
        set({ isGettingUser: true });
        try {
            const res = await getuser();
            if (res) set({ user: res });
        } catch (err) {
            console.error("User fetch failed", err);
            set({ user: null, isAuthenticated: false });
        } finally {
            set({ isGettingUser: false });
        }
    },

    fetchSocials: async () => {
        try {
            const res = await get_socials();
            if (res) set({ socials: res });
        } catch (err) {
            console.error("User socials failed", err);
        }
    },
}));
