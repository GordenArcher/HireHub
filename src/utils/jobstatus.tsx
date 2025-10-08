import { Clock, XCircle, Briefcase, Calendar, Gift } from "lucide-react";

interface StatusProps {
  status: string;
}

export const RenderStatus: React.FC<StatusProps> = ({ status }) => {
    switch (status) {
        case "APPLIED":
            return (
                <div className="flex items-center gap-1.5 text-blue-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                        <Briefcase size={18} /> <span>Applied</span>
                    </span>
                </div>
            );

        case "UNDER_REVIEW":
            return (
                <div className="flex items-center gap-1.5 text-yellow-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                        <Clock size={18} /> <span>Under Review</span>
                    </span>
                </div>
            );

        case "INTERVIEW_SCHEDULED":
            return (
                <div className="flex items-center gap-1.5 text-indigo-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                        <Calendar size={18} /> <span>Interview Scheduled</span>
                    </span>
                </div>
            );

        case "OFFERED":
            return (
                <div className="flex items-center gap-1.5 text-green-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        <Gift size={18} /> <span>Offered</span>
                    </span>
                </div>
            );

        case "REJECTED":
            return (
                <div className="flex items-center gap-1.5 text-red-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
                        <XCircle size={18} /> <span>Rejected</span>
                    </span>
                </div>
            );

        default:
        return <span>{status}</span>;
    }
};