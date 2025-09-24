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
}

export const UseCompanyStore = create<CompanyState>((set) => {

    // (async () => {
    //         set({ isGettingAuth: true });
    //     try {
    //         const res = await get_auth();
    //         set({ isAuthenticated: res?.auth ?? false });
    //     } catch (err) {
    //         console.error("Auth check failed", err);
    //         set({ isAuthenticated: false });
    //     } finally {
    //         set({ isGettingAuth: false });
    //     }
    // })();

    (async () => {
        try {
            const res = await get_company();
            if (res) set({ company: res });
        } catch (err) {
            console.error("User fetch failed", err);
            set({ company: null });
        } 
    })();

    // (async () => {
    //     try {
    //         const res = await get_socials();
    //         if (res) set({ socials: res });
    //     } catch (err) {
    //         console.error("User socials failed", err);
    //     }
    // })();

    return {
        company: null,
        // socials: null,
        // isAuthenticated: false,
        // isGettingAuth: false,
        // isGettingUser: false,
        setCompany: (company) => set({ company }),
        // setAuthenticated: (value) => set({ isAuthenticated: value }),
        // setIsGettingAuth: (value) => set({ isGettingAuth: value }),
        // setIsGettingUser: (value) => set({ isGettingUser: value }),
    };
});
