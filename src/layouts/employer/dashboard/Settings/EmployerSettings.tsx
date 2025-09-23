import { Globe, Settings2, User2 } from "lucide-react"
import { useState } from "react"
import type { NavLinks } from "../../../../types/landing/landingtypes"
import CompanyInfo from "./CompanyInfo"
import AccountSettings from "../../../dashboard/settings/AccountSettings"
import SocilaLinks from "../../../dashboard/settings/SocilaLinks"
import FoundingInfo from "../../setup/FoundingInfo"

const EmployerSettings = () => {

    const [activeTab, setActiveTab] = useState<string>('company-info')

    const Links: NavLinks[] = [
        {
            id: 1,
            icon: User2,
            label: "Company Info",
            link: 'company-info'
        },
            {
            id: 2,
            icon: User2,
            label: "Founding Info",
            link: 'founding-info'
        },
        {
            id: 3,
            icon: Globe,
            label: "Social Media Profile",
            link: 'company-media'
        },
        {
            id: 4,
            icon: Settings2,
            label: "Account Settings",
            link: 'account-settings'
        },
    ]

    return (
        <div className="w-full h-full relative">
            <div className="space-y-3.5">
                <h3>Settings</h3>

                <div className="w-full py-12 relative">
                    <div className="w-full space-y-5">
                        <div>
                            <ul className="flex items-center justify-start gap-5.5 overflow-x-auto whitespace-nowrap scrollbar-hide relative">
                                {Links.map((nav) => (
                                    <li key={nav.id} className="block relative">
                                        <button
                                            type="button"
                                            title={nav.label}
                                            onClick={() => setActiveTab(nav.link)}
                                            className={`relative cursor-pointer ${
                                            activeTab === nav.link ? "text-orange-500" : " text-slate-600"
                                            } hover:text-red-600 pb-1 transition font-medium`}
                                        >
                                            <>
                                                <div className="flex items-center gap-2.5">
                                                    <nav.icon size={20} />
                                                    {nav.label}
                                                </div>

                                                {activeTab === nav.link && (
                                                    <span
                                                        className={`absolute left-0 -bottom-0.5 h-[5px] bg-orange-600 transition-all duration-300 ${
                                                            activeTab ? "w-full" : "w-0"
                                                        }`}
                                                    />
                                                )}
                                            </>
                                        </button>
                                    </li>
                                ))}
                                <span className={`absolute left-0 -bottom-0.5 h-[3px] bg-orange-600 rounded-full transition-all duration-300 w-full`}/>
                            </ul>

                        </div>

                        <section>
                            {activeTab === "company-info" && <CompanyInfo /> }
                            {activeTab === "founding-info" && <FoundingInfo setActiveTab={setActiveTab} /> }
                            {activeTab === "company-media" && <SocilaLinks /> }
                            {activeTab === "account-settings" && <AccountSettings /> }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerSettings