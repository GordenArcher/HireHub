import { ArrowRight } from "lucide-react"
import Button from "../../../components/ui/Button"
import type React from "react"
import { IndustryTypes, OrganizationTypes, TeamSizes } from "../../../data/dashboard/Employer"
interface FoundingForm {
    org_type: string
    industry_type: string
    team_size: string
    year_established: string
    company_website: string
    company_vision: string
}

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    setForm: React.Dispatch<React.SetStateAction<FoundingForm>>;
    form: FoundingForm;
}

const FoundingInfo = ({ setActiveTab, setForm, form }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handlePrevious = () => {
        if (setActiveTab) {
            setActiveTab("company-info")
        }
    }

    return (
        <div className="space-y-3 relative">
            <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">
                        Organization Type <span className="text-red-500">*</span>
                    </span>
                    <select 
                        title="organization" 
                        name="org_type" 
                        value={form.org_type}
                        onChange={handleChange}
                        className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                        required
                    >
                        <option value="">select...</option>
                        {OrganizationTypes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">
                        Industry Type <span className="text-red-500">*</span>
                    </span>
                    <select 
                        title="industry" 
                        name="industry_type" 
                        value={form.industry_type}
                        onChange={handleChange}
                        className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                        required
                    >
                        <option value="">select...</option>
                        {IndustryTypes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">
                        Team Size <span className="text-red-500">*</span>
                    </span>
                    <select 
                        title="team size" 
                        name="team_size" 
                        value={form.team_size}
                        onChange={handleChange}
                        className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                        required
                    >
                        <option value="">select...</option>
                        {TeamSizes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full relative flex flex-col gap-2">
                    <label htmlFor="year_established" className="text-sm font-medium">
                        Year of Establishment
                    </label>
                    <input 
                        type="number" 
                        name="year_established" 
                        id="year_established" 
                        value={form.year_established}
                        onChange={handleChange}
                        min="1900"
                        max={new Date().getFullYear()}
                        placeholder="YYYY"
                        className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" 
                    />
                </div>

                <div className="w-full relative flex flex-col gap-2">
                    <label htmlFor="company_website" className="text-sm font-medium">
                        Company Website
                    </label>
                    <input 
                        placeholder="https://example.com" 
                        type="url" 
                        name="company_website" 
                        id="company_website" 
                        value={form.company_website}
                        onChange={handleChange}
                        className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" 
                    />
                </div>
            </div>

            <div className="pt-7">
                <div className="flex flex-col gap-2">
                    <label htmlFor="company_vision" className="font-medium">Company Vision</label>
                    <textarea 
                        rows={6} 
                        id="company_vision"
                        name="company_vision"
                        value={form.company_vision}
                        onChange={handleChange}
                        placeholder="Describe your company's vision and mission..." 
                        className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                    />
                </div>
            </div>

            <div className="flex items-center gap-3.5 py-7">
                <Button 
                    handleClick={handlePrevious}
                    title="previous" 
                    bgcolor="bg-gray-200" 
                    color="text-orange-500"
                >
                    Previous
                </Button>

                <Button handleClick={() => setActiveTab("company-media")} title="save & next">
                    <>
                        <span>Save & Next</span>
                        <ArrowRight />
                    </>
                </Button>
            </div>
        </div>
    )
}

export default FoundingInfo