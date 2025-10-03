import { AtSign, Globe, User2 } from "lucide-react"
import Logo from "../../../components/ui/Logo"
import { useState } from "react"
import CompanyInfo from "../../../layouts/employer/setup/CompanyInfo"
import type { NavLinks } from "../../../types/landing/landingtypes"
import FoundingInfo from "../../../layouts/employer/setup/FoundingInfo"
import CompanyMedia from "../../../layouts/employer/setup/CompanyMedia"
import Contact from "../../../layouts/employer/setup/Contact"
import { useAuthStore } from "../../../stores/useAuthStore"
import { toast } from "react-toastify"
import axiosClient from "../../../utils/axiosClient"
import type { CompanyForm } from "../../../types/Shared"
import { calculateProgress } from "../../../utils/calculateProgress"
import { useNavigate } from "react-router-dom"
import { UseCompanyStore } from "../../../stores/UseCompanyStore"




const SetUp = () => {

    const navigate = useNavigate()

    const { company,setCompany } = UseCompanyStore()

    const { user } = useAuthStore()
    const [IsSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<string>('company-info')
    const [form, setForm] = useState<CompanyForm>({
        name: "",
        about: "",
        logo: null,
        banner: null,
        org_type: "",
        industry_type: "",
        team_size: "",
        year_established: "",
        company_website: "",
        company_vision: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        map_location: "",
        phone: "",
        email: user?.user?.email
    })

    const handleSubmit = async () => {
        if (!form.name.trim()) {
            toast.error("Please enter company name");
            return;
        }

        if (!form.about.trim()) {
            toast.error("Please enter company description");
            return;
        }

        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                if (value instanceof File) {
                    formData.append(key, value);
                } else {
                    formData.append(key, value as string);
                }
            }
        });

        setIsSubmitting(true);

        try {
            const response = await axiosClient.post("create_company/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response) {
                const result = response.data;
                toast.success(result.message || "Company info saved successfully");
                console.log("Company info saved successfully:", result);

                const percentage = calculateProgress(form);
                setProgress(percentage);

                    if (company) {
                        setCompany({ ...company, onboarded: true });
                    } else {
                        setCompany({ onboarded: true } as any);
                    }
                navigate("auth/employer/setup/complete", { state: { progress }})
            }
        } catch (error: any) {
            const errorResult = error?.response?.data;
            toast.error(errorResult?.message || "Error saving company info");
            console.error("Error saving company info:", error);
        } finally {
            setIsSubmitting(false);
        }
    };


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
            icon: AtSign,
            label: "Contact",
            link: 'contact'
        },
    ]

    return (
        <div className="h-full w-full  p-2">
            <Logo />

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
                        {activeTab === "company-info" && <CompanyInfo setActiveTab={setActiveTab} setForm={setForm} form={form} /> }
                        {activeTab === "founding-info" && <FoundingInfo setActiveTab={setActiveTab} setForm={setForm} form={form} /> }
                        {activeTab === "company-media" && <CompanyMedia setActiveTab={setActiveTab} setForm={setForm} form={form} /> }
                        {activeTab === "contact" && <Contact setActiveTab={setActiveTab} setForm={setForm} form={form} IsSubmitting={IsSubmitting} handleSubmit={handleSubmit}/> }
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SetUp