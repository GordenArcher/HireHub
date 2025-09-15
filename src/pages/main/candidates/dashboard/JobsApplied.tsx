import JobApplicationCard from "../../../../components/dashboard/JobApplicationCard"
import { JobApplications } from "../../../../data/dashboard/candidateDashboard"

const JobsApplied = () => {
    const total_jobs = JobApplications.length

    return (
        <div className="w-full relative h-full">
            <div className="space-y-5">
                <div className="p-3">
                    <h3 className="text-lg font-black text-orange-400">Applied Jobs {" "} <span className="text-slate-600">({total_jobs})</span> </h3>
                </div>

                <div className="w-full h-full">

                    <div className="py-4">
                        <table className="w-full border-collapse rounded-lg overflow-scroll shadow-sm">
                            <thead className="bg-gray-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Job</th>
                                    <th className="px-4 py-3 text-left">Date Applied</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {JobApplications.map((job) => {
                                    return (
                                        <JobApplicationCard job={job} />
                                    )
                                })}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsApplied