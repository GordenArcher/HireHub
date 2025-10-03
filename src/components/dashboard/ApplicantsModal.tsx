import { X } from "lucide-react";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";

interface Applicant {
    id: string;
    applicant: {
        id: number;
        full_name: string;
        profile_image: string | null;
        location?: string;
        user: {
        id: number;
        username: string;
        email: string;
        };
    };
    applied_at: string;
    cover_letter?: string;
    resume?: string | null;
    status: string;
}

interface ApplicantsModalProps {
    jobId: string;
    onClose: () => void;
}

const ApplicantsModal = ({ jobId, onClose }: ApplicantsModalProps) => {
    const [loading, setLoading] = useState(true);
    const [applicants, setApplicants] = useState<Applicant[]>([]);

    useEffect(() => {
        const fetchApplicants = async () => {
        try {
            const res = await axiosClient.get(`/applications_list/${jobId}/`);
            setApplicants(res.data);
        } catch (err) {
            console.error("Failed to fetch applicants", err);
        } finally {
            setLoading(false);
        }
        };

        fetchApplicants();
    }, [jobId]);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                    <X size={20} />
                </button>
                <h2 className="text-xl font-bold mb-4">Applicants</h2>

                {loading ? (
                    <p className="text-gray-500">Loading...</p>
                ) : applicants.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {applicants.map((app) => (
                            <li key={app.id} className="py-3 flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                                    {app.applicant.profile_image ? (
                                        <img
                                            src={`http://localhost:8000${app.applicant.profile_image}`}
                                            alt={app.applicant.full_name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    ) : (
                                        app.applicant.full_name.charAt(0)
                                    )}
                                </div>

                                <div className="flex-1">
                                    <p className="font-medium">{app.applicant.full_name}</p>
                                    <p className="text-sm text-gray-600">
                                        {app.applicant.user.email}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Applied on {new Date(app.applied_at).toLocaleDateString()}
                                    </p>
                                </div>

                                {app.resume && (
                                    <a
                                        href={app.resume}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-orange-500 hover:underline text-sm"
                                    >
                                        Resume
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No applicants yet.</p>
                )}
            </div>
        </div>
    );
};

export default ApplicantsModal;
