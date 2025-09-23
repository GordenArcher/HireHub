import { Link } from 'react-router-dom'
import AuthLogin from '../../assets/images/auth.svg'
import { BookmarkIcon, BriefcaseBusiness, type LucideIcon } from "lucide-react";
import type React from 'react';
import CandidateOverview from '../../pages/main/candidates/dashboard/CandidateOverview';
import EmployerOverview from '../../pages/main/employers/dashboard/EmployerOverview';

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

    const user_type = "EM"

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
                        <h2 className='text-xl font-black'>Hello! Gorden</h2>
                        <p className='text-slate-500'>Here is your daily activities and jobs</p>
                    </div>

                    <div className='py-2 w-full relative'>
                        <div className='grid grid-cols-2 gap-2 w-full max-md:grid-cols-1'>
                            {JobOverview.map((job) => {
                                return (
                                    <div key={job.id} className={`w-full bg-${job.bgcolor} bg-blue-600 rounded-md p-9 relative`}>
                                        <div className='flex items-center justify-between gap-2.5'>
                                            <div className='text-start space-y-2.5'>
                                                <h2 className='text-xl text-white font-black'>{job.figure}</h2>
                                                <p className='text-slate-200'>{job.label}</p>
                                            </div>

                                            <div className='w-15 h-15 rounded bg-white flex items-center justify-center'>
                                                <job.icon className={`text-${job.bgcolor} text-blue-600 `} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {user_type === "JS" ? (
                    <CandidateOverview setActiveTab={setActiveTab} />
                ) : (
                    <EmployerOverview setActiveTab={setActiveTab} />
                )}
            </div>
        </div>
    )
}

export default Overview