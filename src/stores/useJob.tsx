import { create } from "zustand";
import { getAllJobs, jobs_applied } from "../services/api";

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
    appliesJobs: Job[];
    setJobs: (jobs: Job[]) => void;
    setAppliedJobs: (appliesJobs: Job[]) => void;
    filteredJobs: Job[];
    fetchJobs: () => Promise<void>;
    fetchUserJobs: () => Promise<void>;
    filterJobs: (search: string, location: string) => void;
    isGettingUserJobs: boolean
}

export const useJobStore = create<JobState>((set, get) => ({
    jobs: [],
    appliesJobs: [],
    filteredJobs: [],
    setAppliedJobs: (appliesJobs) => set({ appliesJobs }),
    isGettingUserJobs: false,
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

    fetchUserJobs: async () => {
        set({ isGettingUserJobs: true });
            try {
            const res = await jobs_applied();
            if (res) {
                const formattedJobs = res.map((app) => ({
                    id: app.id,
                    job_id: app.job.id,
                    title: app.job.title,
                    type: app.job.type,
                    level: app.job.level,
                    location: app.job.company?.contact_info?.map_location || "Not specified",
                    salary: `₵${app.job.salary?.min?.toLocaleString()} - ₵${app.job.salary?.max?.toLocaleString()}`,
                    dateApplied: new Date(app.applied_at).toLocaleDateString(),
                    status: app.status,
                    companyLogo: app.job.company?.logo || null,
                }));

                set({ appliesJobs: formattedJobs});
            }
        } catch (err) {
        console.error("Fetching user jobs failed", err);
        set({ jobs: [], filteredJobs: [] });
        } finally {
        set({ isGettingUserJobs: false });
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
