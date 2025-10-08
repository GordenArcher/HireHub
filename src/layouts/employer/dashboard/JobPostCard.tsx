import { CheckCircle, Eye, LucideMenuSquare, User2Icon, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ApplicantsModal from "../../../components/dashboard/ApplicantsModal";

interface Job {
    id: string;
    title: string;
    type: string;
    level?: string;
    is_expired: boolean;
    applicant_count?: number;
    expires_at?: string;
}

interface Props {
    job: Job;
}

const JobPostCard = ({ job }: Props) => {
    const [showPop, setShowPop] = useState(false);
    const [showApplicants, setShowApplicants] = useState(false);

    const remainingDays = job?.expires_at
        ? Math.max(0, Math.ceil((new Date(job?.expires_at).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
        : null;

    return (
        <tr className="hover:bg-gray-50 transition duration-150 ease-in">
            <td className="px-4 py-3">
                <div className="flex flex-col justify-between items-start gap-1.5">
                    <h3 className="font-black">{job?.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                        <span>{job?.type}</span>
                        <span>.</span>
                        <span>{remainingDays !== null ? `${remainingDays} days remaining` : "No expiry"}</span>
                    </div>
                </div>
            </td>

            <td className="px-4 py-3">
                <div className={`px-2 rounded-2xl flex items-center gap-2 ${job?.is_expired ? 'text-red-500' : 'text-green-500'}`}>
                    <CheckCircle size={16} />
                    <span>{job?.is_expired ? "Expired" : "Active"}</span>
                </div>
            </td>

            <td className="px-4 py-3">
                <div className="flex items-center gap-1 text-sm">
                    <User2Icon size={16} />
                    <span className="font-black">{job?.applicant_count || 0}</span>
                    <span>Applicants</span>
                </div>
            </td>

            <td className="px-4 py-3 relative">
                <div className="flex items-center gap-2">
                    <button onClick={() => setShowApplicants(true)} className="w-full px-4 py-2 cursor-pointer rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                        View Application
                    </button>

                    <button
                        onClick={() => setShowPop(!showPop)}
                        title="menu"
                        className="px-4 py-2 cursor-pointer rounded-md hover:bg-slate-100 text-orange-500 font-medium transition"
                    >
                        <LucideMenuSquare size={20} />
                    </button>
                </div>

                {showPop && (
                    <div className="absolute right-0 mt-3 z-50 w-45 bg-white shadow shadow-slate-200 rounded p-3">
                        <ul className="flex flex-col w-full">
                            <li className="w-full px-2 py-1 rounded hover:bg-amber-300/50">
                                <Link to={`/position/details/${job?.id}`} className="flex items-center gap-1.5">
                                    <Eye size={20} />
                                    <span className="text-slate-700">View Details</span>
                                </Link>
                            </li>

                            <li className="w-full px-2 py-1 rounded hover:bg-amber-300/50">
                                <button className="cursor-pointer flex items-center gap-1.5">
                                    <XCircle size={20} />
                                    <span className="text-slate-700">Make it expire</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

                {showApplicants && (
                    <ApplicantsModal
                    jobId={job.id}
                    onClose={() => setShowApplicants(false)}
                    />
                )}
            </td>
        </tr>
    );
};

export default JobPostCard;
