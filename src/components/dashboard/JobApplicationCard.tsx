import { BadgeDollarSign, MapPin } from "lucide-react";
import { RenderStatus } from '../../utils/jobstatus'
import { Link } from "react-router-dom";


const JobApplicationCard = ({ job } ) => {
    
    return (
        <>
            <tr key={job.id} className="hover:bg-gray-50 transition duration-150 ease-in">
                <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-lg bg-orange-500 flex-shrink-0"></div>

                        <div className='flex flex-col justify-between gap-2.5'>
                            <div className="flex items-center gap-3">
                                <div>
                                    <h2 className="font-medium text-gray-900">{job.title}</h2>
                                    
                                </div>

                                <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                                    {job.type}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600 mt-1 text-sm">
                                <span className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    {job.location}
                                </span>

                                <span className="flex items-center gap-1">
                                    <BadgeDollarSign size={16} />
                                    {job.salary}
                                </span>
                            </div>
                        </div>
                    </div>
                </td>

                <td className="px-4 py-3 text-sm text-gray-600">{job.dateApplied}</td>

                <td className="px-4 py-3">
                    <RenderStatus status={job.status} />
                </td>

                <td className="px-4 py-3">
                    <Link to={`/position/details/${job.job_id}`} className="px-4 py-2 cursor-pointer rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                        Details
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default JobApplicationCard