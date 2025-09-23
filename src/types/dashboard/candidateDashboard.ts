
export interface JobApplication {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: "Remote" | "On-site" | "Hybrid";
    dateApplied: string;
    status: "Active" | "Pending" | "Rejected";
}

