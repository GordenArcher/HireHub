import { ArrowRight } from "lucide-react"
import JobPostCard from "../../../../layouts/employer/dashboard/JobPostCard"
import axiosClient from "../../../../utils/axiosClient";
import { UseCompanyStore } from "../../../../stores/UseCompanyStore";
import { useEffect, useState } from "react";
import type { Job } from "../../../../types/Shared";

interface ActiveTabProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const EmployerOverview = ({ setActiveTab }: ActiveTabProps) => {
        const [jobs, setJobs] = useState<Job[]>([]);
        const [loading, setLoading] = useState(true);
        const { company } = UseCompanyStore()

    const fetchJobs = async () => {
        try {
            const response = await axiosClient.get(`/jobs/company/${company?.id}/`);
            setJobs(response.data);
        } catch (error: any) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <div className="py-6">
                <section className='relative'>
                    <div className='space-y-5 flex justify-between items-center gap-2.5 flex-wrap'>
                        <h2 className='font-black text-orange-500 text-md'>Recently Posted Jobs</h2>

                        <button title='view more' onClick={() => setActiveTab("Applied Jobs")} className='cursor-pointer text-sm flex items-center gap-2.5 text-orange-500 hover:underline group '>
                            <span>
                                View all
                            </span>

                            <div>
                                <ArrowRight size={20} className='group-hover:pl-1' />
                            </div>
                        </button>
                    </div>

                    <div className="py-4">
                        <div className="overflow-x-auto shadow-sm rounded-lg">
                            <table className="w-full border-collapse">
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Job</th>
                                        <th className="px-4 py-3 text-left">Status</th>
                                        <th className="px-4 py-3 text-left">Applications</th>
                                        <th className="px-4 py-3 text-left">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {jobs.slice(0, 5).map(job => (
                                        <JobPostCard key={job.id} job={job} />
                                    ))}
                                    {loading && "Loading jobs..."}

                                    {jobs.length <= 0 && "No JOBS POSTED"}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}

export default EmployerOverview
