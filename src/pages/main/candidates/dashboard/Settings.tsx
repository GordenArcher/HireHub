import { Globe, User, UserCircle, Settings } from "lucide-react"
import { useState } from "react"
import Personal from "../../../../layouts/dashboard/settings/Personal"
import Profile from "../../../../layouts/dashboard/settings/Profile"
import SocilaLinks from "../../../../layouts/dashboard/settings/SocilaLinks"
import AccountSettings from "../../../../layouts/dashboard/settings/AccountSettings"
import type { NavLinks } from "../../../../types/landing/landingtypes"

const Candidate_Settings = () => {
    const [activeTab, setActiveTab] = useState<string>("personal")

    const Links: NavLinks[] = [
        {
            id: 1,
            label: "Personal",
            icon: User,
            link: "personal"
        },
        {
            id: 2,
            label: "Profile",
            icon: UserCircle,
            link: 'profile'
        },
        {
            id: 3,
            label: "Social Links",
            icon: Globe,
            link: 'social-links'
        },
        {
            id: 4,
            label: "Account Settings",
            icon: Settings,
            link: 'account-settings'
        },
    ]

    return (
        <div className="w-full h-full relative">
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-black">Settings</h2>
                </div>

                <div>
                    <div className="pt-5">
                        <ul className="w-full flex items-center gap-5.5 overflow-auto whitespace-nowrap scrollbar-hide relative">
                                {Links.map((nav) => (
                                    <li key={nav.id} className="block relative">
                                        <button
                                            type="button"
                                            title={nav.label}
                                            onClick={() => setActiveTab(nav.link)}
                                            className={`relative cursor-pointer ${activeTab === nav.link ? 'text-orange-500' : ' text-slate-600'} hover:text-red-600 pb-1 transition font-medium`}
                                        >
                                            <>
                                                <div className="flex items-center gap-2.5">
                                                    <nav.icon size={20} />
                                                    {nav.label}
                                                </div>

                                                {activeTab == nav.link && 
                                                    <span
                                                        className={`absolute left-0 -bottom-0.5 h-[2px] bg-orange-600 transition-all duration-300 ${
                                                            activeTab ? "w-full" : "w-0"
                                                        }`}
                                                    />
                                                }
                                            </>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>


                <div className="py-6">
                    {activeTab === 'personal' && <Personal />}
                    {activeTab === 'profile' && <Profile />}
                    {activeTab === 'social-links' && <SocilaLinks />}
                    {activeTab === 'account-settings' && <AccountSettings />}
                </div>
            </div>
        </div>
    )
}

export default Candidate_Settings