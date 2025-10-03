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
        {
            id : 6,
            icon: Bookmark,
            label : "Saved Candidates",
            type: "EM"
        },
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