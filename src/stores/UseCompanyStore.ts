import { create } from "zustand";
import { get_company } from "../services/api";

// interface user {
//     id: number;
//     first_name: string;
//     username: string;
//     email: string;
// }

// interface Company {
//     user: user;
//     full_name: string;
//     gender?: string;
//     location?: string;
//     nationality?: string;
//     bio?: string;
//     education?: string;
//     phone?: string;
//     biography?: string;
//     experience?: string;
//     birth_date?: string | null;
//     profile_image?: string | null;
//     user_type: "JS" | "EM" | "AD";
// }


interface CompanyState {
    company: null
    setCompany: (company: | null) => void;
    fetchCompany: () => Promise<void>
}

export const UseCompanyStore = create<CompanyState>((set) => ({
    company: null,
    setCompany: (company) => set({ company }),

    fetchCompany: async () => {
        try {

            const res = await get_company();
            if (res) set({ company: res });
        } catch (err) {
            console.error("User fetch failed", err);
            set({ company: null });
        } 
    }

}));
