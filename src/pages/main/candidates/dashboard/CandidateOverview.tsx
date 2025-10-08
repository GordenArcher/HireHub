import JobApplicationCard from '../../../../components/dashboard/JobApplicationCard'
import { ArrowRight } from 'lucide-react';
import { useJobStore } from '../../../../stores/useJob';
import { useEffect } from 'react';

interface ActiveTabProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const CandidateOverview = ({ setActiveTab }: ActiveTabProps) => {

    const { fetchUserJobs, appliesJobs, isGettingUserJobs} = useJobStore()
    
    useEffect(() => {
        fetchUserJobs()
    }, [fetchUserJobs])

    if(isGettingUserJobs){
        return "Loading applied jobs"
    }


    return (
        <div>
            <section className='relative'>
                    <div className='space-y-5 flex justify-between items-center gap-2.5 flex-wrap'>
                        <h2 className='font-black text-orange-500 text-md'>Recently Applied</h2>

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
                                        <th className="px-4 py-3 text-left">Date Applied</th>
                                        <th className="px-4 py-3 text-left">Status</th>
                                        <th className="px-4 py-3 text-left">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {appliesJobs.slice(0, 10).map((job) => (
                                        <JobApplicationCard key={job.id} job={job}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default CandidateOverview