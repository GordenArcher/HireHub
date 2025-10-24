import { Bookmark, BriefcaseBusiness, HomeIcon, Loader, LogOut, PlusCircle, Settings, SidebarClose, SidebarOpen } from "lucide-react"
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react"
import Overview from "./Overview";
import Setting from "../../pages/main/candidates/dashboard/Settings";
import JobsApplied from "../../pages/main/candidates/dashboard/JobsApplied";
import FavoritesJob from "../../pages/main/candidates/dashboard/FavoritesJob";
import PostJob from "../../pages/main/employers/dashboard/PostJob";
import JobsPosted from "../../pages/main/employers/dashboard/JobsPosted";
import SavedCandidate from "../../pages/main/employers/dashboard/SavedCandidate";
import EmployerSettings from "../../layouts/employer/dashboard/Settings/EmployerSettings";
import { useAuthStore } from "../../stores/useAuthStore";
import { logout } from "../../services/api";
import { toast } from "react-toastify";
import { UseCompanyStore } from "../../stores/UseCompanyStore";
import { Link } from "react-router-dom";

interface SideNav {
    id: number,
    icon: LucideIcon,
    label: string
    type?: string
}

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<string>("Overview")
    const [showSide, setShowSide] = useState<boolean>(true)
    const [logingout, setlogingout] = useState<boolean>(false)
    const { user, isAuthenticated, setAuthenticated } = useAuthStore()
    const { company } = UseCompanyStore()

    const user_type = user?.user_type

    useEffect(() => {
        const getWidth = () => {
            if (window.innerWidth <= 786) {
                setShowSide(false); 
            } else {
                setShowSide(true);
            }
        };

        getWidth();

        window.addEventListener("resize", getWidth);

        return () => {
            window.removeEventListener("resize", getWidth);
        };

    }, []);

    const SideNav: SideNav[] = [
        {
            id : 1,
            icon: HomeIcon,
            label : "Overview",
            type: "both"

        },
        {
            id : 2,
            icon: BriefcaseBusiness,
            label : "Applied Jobs",
            type: "JS"
        },
        {
            id : 3,
            icon: Bookmark,
            label : "Favourite Jobs",
            type: "JS"
        },
        {
            id : 4,
            icon: PlusCircle,
            label : "Post a Job",
            type: "EM"
        },
        {
            id : 5,
            icon: BriefcaseBusiness,
            label : "My Jobs",
            type: "EM"
        },
        // {
        //     id : 6,
        //     icon: Bookmark,
        //     label : "Saved Candidates",
        //     type: "EM"
        // },
        {
            id : 7,
            icon: Settings,
            label : "Settings",
            type: "both"
        },
    ]

    const LogoutUser = async () => {
        setlogingout(true)
        try {
            const response = await logout()
            if(response){
                toast.success(response.message)

                setTimeout(() => {
                    setAuthenticated(false)
                }, 2000)
            }
        } catch (error) {
            console.error(error)
        }finally{
            setlogingout(false)
        }
        
    }

    const user_Dashboard = SideNav.filter((nav) => nav.type === user_type || nav.type === "both")
    if (user_type == "EM" && company?.onboarded == false) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="max-w-2xl w-full">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Welcome to Your Dashboard
                            </h1>
                            <p className="text-orange-100">
                                Let's get your company verified to unlock full access
                            </p>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-700 text-lg text-center mb-8">
                                To start posting opportunities and managing applications, complete your company verification with business documentation and legal information.
                            </p>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    What you'll need to provide:
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Business Registration Certificate</p>
                                            <p className="text-sm text-gray-600">Official proof of your company registration</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Legal Documentation</p>
                                            <p className="text-sm text-gray-600">Tax ID and company representative identification</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Company Information</p>
                                            <p className="text-sm text-gray-600">Basic details, logo, and company description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link 
                                    to={"/auth/company/setup"} 
                                    className="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <span>Start Verification Process</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Takes approximately 10-15 minutes to complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (company?.is_accepted === "review") {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 ">
                <div className="max-w-3xl w-full">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Verification in Progress
                            </h1>
                            <p className="text-orange-100">
                                We're reviewing your company documentation
                            </p>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-700 text-lg text-center mb-8">
                                Your company documents are currently under review. Our team is verifying your business registration and legal documentation to ensure everything meets our standards.
                            </p>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                    What happens next?
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Document Review</p>
                                            <p className="text-sm text-gray-600">Our team carefully verifies all submitted documents</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Email Notification</p>
                                            <p className="text-sm text-gray-600">You'll receive confirmation once verification is complete (2-3 business days)</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-orange-300 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Start Posting</p>
                                            <p className="text-sm text-gray-600">After approval, unlock full access to post opportunities and connect with talent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center border-t border-gray-200 pt-6">
                                <p className="text-gray-600 mb-3">
                                    Questions about your verification status?
                                </p>
                                <a 
                                    href="mailto:support@yourcompany.com" 
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (company?.is_accepted === "rejected") {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="max-w-3xl w-full">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.788-2.894l-6.928-12a2 2 0 00-3.576 0l-6.928 12A2 2 0 005.062 19z"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Verification Failed
                            </h1>
                            <p className="text-red-100">
                                Unfortunately, your company verification was not successful
                            </p>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-700 text-lg text-center mb-8">
                                After reviewing your submitted documents, our compliance team found
                                inconsistencies or missing details preventing successful verification.
                            </p>

                            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    What you can do next
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Review Your Documents</p>
                                            <p className="text-sm text-gray-600">
                                                Check that your company name, registration, and documents are
                                                correctly uploaded and legible.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-red-400 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Fix Identified Issues</p>
                                            <p className="text-sm text-gray-600">
                                                Correct any discrepancies or missing fields in your profile or
                                                uploaded files.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-red-300 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Resubmit for Verification</p>
                                            <p className="text-sm text-gray-600">
                                                Once updated, you can resubmit your company details for another
                                                verification attempt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center border-t border-gray-200 pt-6">
                                <p className="text-gray-600 mb-3">
                                    {/* Need clarification on why your verification was rejected? */}
                                    Dpn't fret! Re-submit below
                                </p>
                                <Link
                                    to="/auth/company/setup"
                                    className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    
                                    Resubmit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    return (
        <div className="w-full h-[80vh] overflow-auto relative">
            <div className="flex transition duration-200 ease-in w-full h-full gap-1.5">
                <aside className={`py-6 transform transition duration-200 ease-in ${showSide ? 'w-80' : '-translate-x-100 w-0 '} max-md:absolute max-md:bg-white max-md:z-9 max-md:p-3  h-full relative`}>
                    <div className="flex items-center justify-between">
                        <h3 className="capitalize font-black text-sm"> {user_type === "JS" ? 'Candidate' : "Employer"}  dashboard</h3>

                        <div className="py-4 hidden max-md:block">
                            <button onClick={() => setShowSide(!showSide)} title={showSide ? 'hide' : 'show'} className="text-orange-500 w-10 h-10 flex items-center justify-center hover:bg-slate-200 rounded-full cursor-pointer" >
                                {showSide ? (
                                    <SidebarClose />
                                ) : (
                                    <SidebarOpen />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex h-full flex-col gap-2.5 justify-between">
                        <div className="pt-5">
                            <ul className="flex flex-col items-start gap-2.5">
                                {user_Dashboard.map((nav) => {
                                    const Icon = nav.icon;
                                    return (
                                        <li onClick={() => setActiveTab(nav.label)} key={nav.id} className={`w-full px-5 max-md:px-2 rounded py-3 cursor-pointer transition duration-150 ease-in hover:bg-orange-500/50 ${activeTab === nav.label ? 'border-l-4 border-orange-500 bg-orange-500/50 text-orange-700' : 'text-slate-500'} `}>
                                            <div className="flex items-center gap-2.5">
                                                <Icon size={20} />

                                                <div>
                                                    <span>{nav.label}</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {isAuthenticated && (
                            <div className="space-y-1.5 transition duration-200 ease-in">
                                <div className="relative px-5 max-md:px-2">
                                    <button onClick={LogoutUser} title="logout" className="w-full px-5 rounded py-3 cursor-pointer transition duration-150 ease-in hover:bg-red-500/50 group">
                                        <div className="flex items-center gap-2.5 text-red-500 group-hover:text-white">
                                            {logingout ? (
                                                <>
                                                    <Loader className="animate-spin" />
                                                    <span>Loginout...</span>
                                                </>
                                                
                                            ) : (
                                                <>
                                                    <LogOut size={20} />

                                                    <span>Logout</span>
                                                </>
                                                
                                            )}
                                            
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        
                    </div>
                </aside>

                <section className="w-full h-full p-10 max-md:px-3 max-md:py-7">
                    <div className="py-4 md:block">
                        <button onClick={() => setShowSide(!showSide)} title={showSide ? 'hide' : 'show'} className="text-orange-500 w-10 h-10 flex items-center justify-center hover:bg-slate-200 rounded-full cursor-pointer" >
                            {showSide ? (
                                <SidebarClose />
                            ) : (
                                <SidebarOpen />
                            )}
                        </button>
                    </div>

                    {activeTab === "Overview" && <Overview setActiveTab={setActiveTab} />}
                    {activeTab === "Applied Jobs" && <JobsApplied />}
                    {activeTab === "Favourite Jobs" && <FavoritesJob />}
                    {activeTab === "Post a Job" && <PostJob />}
                    {activeTab === "My Jobs" && <JobsPosted />}
                    {activeTab === "Saved Candidates" && <SavedCandidate />}
                    {activeTab === "Settings" && ( user_type == "JS" ? <Setting /> : <EmployerSettings /> ) }
                </section>
            </div>
        </div>
    )
}

export default Dashboard