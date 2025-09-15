import { Link } from 'react-router-dom'
import AuthLogin from '../../../../assets/images/auth.svg'
import { ArrowRight, BookmarkIcon, BriefcaseBusiness, type LucideIcon } from "lucide-react";
import type React from 'react';
import { JobApplications } from '../../../../data/dashboard/candidateDashboard';
import JobApplicationCard from '../../../../components/dashboard/JobApplicationCard';

// interface User {
//     email: string,
//     full_name: string,
//     id : number, 
//     token :  string,
//     user_type : string, 
//     username: string
// }

interface JobOverview {
    id: number,
    figure: number,
    label: string,
    icon: LucideIcon,
    bgcolor: string
}

interface ActiveTabProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Overview = ({ setActiveTab }: ActiveTabProps) => {

    const JobOverview: JobOverview[] = [
        {
            id: 1,
            figure: 589,
            label: "Applied Job",
            icon: BriefcaseBusiness,
            bgcolor: "blue-500"
        },
        {
            id: 2,
            figure: 238,
            label: "Favorite Jobs",
            icon: BookmarkIcon,
            bgcolor: 'orange-500'
        },
    ]

    const is_auth = true

    if(!is_auth){
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className='flex flex-col items-center gap-3.5'>
                    <img src={AuthLogin} alt="" className='w-[70%]' />

                    <div className='space-y-4 text-center'>
                        <h3 className='text-3xl'>
                            OOps! gotta login first champ.
                        </h3>

                        <span className=''>
                            Login {" "}
                            <Link to={"/auth/login"} className='text-orange-500 hover:underline'>here</Link>
                        </span>
                    </div>
                    
                </div>
            </div>
        )
    }

    return (
        <div className="w-full relative">
            <div className='flex flex-col gap-4'>
                <div className='space-y-3 relative'>
                    <div className='flex flex-col gap-2.5 items-start'>
                        <h2 className='text-xl font-black'>Hello! </h2>
                        <p className='text-slate-500'>Here is your daily activities and jobs</p>
                    </div>

                    <div className='py-2 w-full relative'>
                        <div className='grid grid-cols-2 gap-2 w-full max-md:grid-cols-1'>
                            {JobOverview.map((job) => {
                                return (
                                    <div key={job.id} className={`w-full bg-${job.bgcolor} rounded-md p-9 relative`}>
                                        <div className='flex items-center justify-between gap-2.5'>
                                            <div className='text-start space-y-2.5'>
                                                <h2 className='text-xl text-white font-black'>{job.figure}</h2>
                                                <p className='text-slate-200'>{job.label}</p>
                                            </div>

                                            <div className='w-15 h-15 rounded bg-white flex items-center justify-center'>
                                                <job.icon className={`text-${job.bgcolor} `} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

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
                                {JobApplications.slice(0, 10).map((job) => {
                                    return (
                                        <JobApplicationCard job={job} />
                                    )
                                })}
                            
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Overview