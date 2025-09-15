import { CheckCircle, XCircle, Clock } from "lucide-react";

interface StatusProps {
  status: string;
}

export const RenderStatus: React.FC<StatusProps> = ({ status }) => {
    switch (status) {
        case "Active":
            return (
                <div className="flex items-center gap-1.5 text-green-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        <CheckCircle size={18} /> <span>{status}</span>                        
                    </span>
                </div>
            );

        case "Pending":
            return (
                <div className="flex items-center gap-1.5 text-yellow-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-yellow-100">
                        <Clock size={18} /> <span>{status}</span>                          
                    </span>
                </div>
            );

        case "Rejected":
            return (
                <div className="flex items-center gap-1.5 text-red-600">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-red-100">
                       <XCircle size={18} /> <span>{status}</span>                             
                    </span>
                    
                </div>
            );

        default:
            return <span>{status}</span>;
    }
};
