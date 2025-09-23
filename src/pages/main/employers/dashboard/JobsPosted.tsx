import JobPostCard from "../../../../layouts/employer/dashboard/JobPostCard"

const JobsPosted = () => {
    return (
        <div className="w-full h-full relative">
            <div className="space-y-5">
                <div className="py-5">
                    <div className="w-full flex items-center justify-between max-md:flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                            <h3>My Jobs</h3>
                            <span className="text-slate-400">(589)</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>Job status</span>

                            <select className="px-3 py-2 rounded border border-orange-400 outline-none" title="job status" name="job-status" id="job-status">
                                <option value="all">All Jobs</option>
                                <option value="active">Active Jobs</option>
                                <option value="expired">Expired Jobs</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <>
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
                                    <JobPostCard  />
                                </tbody>
                            </table>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default JobsPosted