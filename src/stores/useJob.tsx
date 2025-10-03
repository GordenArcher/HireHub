import { create } from "zustand";
import { getAllJobs } from "../services/api";

interface Job {
    id: string;
    title: string;
    type: string;
    level?: string;
    salary: {
        min: number;
        max: number;
    };
    description: string;
    requirements: string[];
    desirable: string[];
    benefits: string[];
    tags: string[];
    company: {
        id: string;
        name: string;
        logo?: string;
        location?: string;
    };
}

interface JobState {
    jobs: Job[];
    setJobs: (jobs: Job[]) => void;
    filteredJobs: Job[];
    fetchJobs: () => Promise<void>;
    filterJobs: (search: string, location: string) => void;
}

export const useJobStore = create<JobState>((set, get) => ({
    jobs: [],
    filteredJobs: [],
    setJobs: (jobs) => set({ jobs }),

    fetchJobs: async () => {
        try {
            const res = await getAllJobs();
            if (res) {
                set({ jobs: res, filteredJobs: res }); 
            }
        } catch (err) {
            console.error("Fetching jobs failed", err);
            set({ jobs: [], filteredJobs: [] });
        }
    },

    filterJobs: (search, location) => {
        const { jobs } = get();

        const filtered = jobs.filter((job) => {
            const matchSearch =
                search === "" ||
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.company.name.toLowerCase().includes(search.toLowerCase());

            const matchLocation =
                location === "" ||
                (job.company.location &&
                 job.company.location.toLowerCase().includes(location.toLowerCase()));

            return matchSearch && matchLocation;
        });

        set({ filteredJobs: filtered });
    },
}));
