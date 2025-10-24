import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../../assets/images/auth.svg";
import {
    BookmarkIcon,
    BriefcaseBusiness,
    Building2,
    UserCheck2,
    Loader2,
    FileCheck2,
} from "lucide-react";
import CandidateOverview from "../../pages/main/candidates/dashboard/CandidateOverview";
import EmployerOverview from "../../pages/main/employers/dashboard/EmployerOverview";
import { useAuthStore } from "../../stores/useAuthStore";
import axiosClient from "../../utils/axiosClient";

interface JobOverviewItem {
    id: number;
    figure: number | string;
    label: string;
    icon: React.ElementType;
    gradient: string;
}

interface ActiveTabProps {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Overview = ({ setActiveTab }: ActiveTabProps) => {
    const { user } = useAuthStore();
    const user_type = user?.user_type;

    const [stats, setStats] = useState<JobOverviewItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            if (!user_type) return;
            setLoading(true);
            setError(null);

            try {
                const endpoint =
                    user_type === "EM"
                        ? "/dashboard/employer/"
                        : "/dashboard/jobseeker/";

                const { data } = await axiosClient.get(endpoint);

                if (user_type === "EM") {
                    setStats([
                        {
                            id: 1,
                            figure: data.total_jobs_posted || 0,
                            label: "Jobs Posted",
                            icon: Building2,
                            gradient: "from-emerald-500 to-green-600",
                        },
                        {
                            id: 2,
                            figure: data.total_applications_received || 0,
                            label: "Applications Received",
                            icon: UserCheck2,
                            gradient: "from-orange-500 to-pink-500",
                        },
                        {
                            id: 3,
                            figure: Object.values(data.applications_by_status || {}).reduce(
                                (a: number, b: number) => a + b,
                                0
                            ),
                            label: "Applications Processed",
                            icon: FileCheck2,
                            gradient: "from-blue-500 to-indigo-500",
                        },
                    ]);
                } else {
                    setStats([
                        {
                            id: 1,
                            figure: data.total_applications_made || 0,
                            label: "Applications Made",
                            icon: BriefcaseBusiness,
                            gradient: "from-blue-500 to-indigo-500",
                        },
                        {
                            id: 2,
                            figure: Object.values(data.applications_by_status || {}).reduce(
                                (a: number, b: number) => a + b,
                                0
                            ),
                            label: "Total Responses",
                            icon: BookmarkIcon,
                            gradient: "from-orange-500 to-pink-500",
                        },
                        {
                            id: 3,
                            figure: data.recent_applications?.length || 0,
                            label: "Recent Applications",
                            icon: UserCheck2,
                            gradient: "from-emerald-500 to-green-600",
                        },
                    ]);
                }
            } catch (err: any) {
                setError(
                    err.response?.data?.message ||
                        "Failed to load dashboard data. Try again later."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [user_type]);

    const is_auth = !!user;

    if (!is_auth) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <img src={AuthLogin} alt="Login Required" className="w-3/4 max-w-sm" />
                    <div className="space-y-4 text-center">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Oops! You need to log in first 👀
                        </h3>
                        <p className="text-gray-600">
                            Please{" "}
                            <Link
                                to="/auth/login"
                                className="text-orange-500 font-medium hover:underline"
                            >
                                login here
                            </Link>{" "}
                            to continue.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full relative p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-black text-gray-900">
                        Welcome back, {user?.full_name?.split(" ")[0]} 👋
                    </h2>
                    <p className="text-gray-500">
                        Here’s an overview of your recent activities and stats.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-orange-500" size={36} />
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-center">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${stat.gradient} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-black">{stat.figure}</h2>
                                        <p className="text-sm opacity-90 font-medium">{stat.label}</p>
                                    </div>
                                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                                        <stat.icon size={26} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8">
                    {user_type === "JS" ? (
                        <CandidateOverview setActiveTab={setActiveTab} />
                    ) : (
                        <EmployerOverview setActiveTab={setActiveTab} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Overview;
