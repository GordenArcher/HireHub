import { ArrowRight } from "lucide-react"
import Button from "../../../components/ui/Button"
import type React from "react"
import { IndustryTypes, OrganizationTypes, TeamSizes } from "../../../data/dashboard/Employer"
import { useState } from "react"
import { toast } from "react-toastify"
import axiosClient from "../../../utils/axiosClient"

interface Props {
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>
}

interface FoundingForm {
    org_type: string
    industry_type: string
    team_size: string
    year_established: string
    company_website: string
    company_vision: string
}

const FoundingInfo = ({ setActiveTab }: Props) => {
    const [form, setForm] = useState<FoundingForm>({
        org_type: "",
        industry_type: "",
        team_size: "",
        year_established: "",
        company_website: "",
        company_vision: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Validate required fields
        if (!form.org_type || !form.industry_type || !form.team_size) {
            alert('Please fill in all required fields')
            return
        }
        try {
            const formData = new FormData()
            formData.append('org_type', form.org_type)
            formData.append('industry_type', form.industry_type)
            formData.append('team_size', form.team_size)
            formData.append('year_established', form.year_established)
            formData.append('company_website', form.company_website || '')
            formData.append('company_vision', form.company_vision || '')

            const response = await axiosClient.post("save_company/", formData)

            if (response) {
                const result = await response.data
                toast.success(result.message)
                console.log('Company created successfully:', result)
                if (setActiveTab) {
                    setActiveTab("company-media")
                }
            } 
        } catch (error) {
            const ErrorResult =  error.response.data
            console.error('Error creating company:', error)
            toast.error(ErrorResult.message ||'Error creating company. Please try again.')
        }
    }

    const handlePrevious = () => {
        if (setActiveTab) {
            setActiveTab("company-info")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3 relative">
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
                    type="button"
                    handleClick={handlePrevious}
                    title="previous" 
                    bgcolor="bg-gray-200" 
                    color="text-orange-500"
                >
                    Previous
                </Button>

                <Button type="submit" title="save & next">
                    <>
                        <span>Save & Next</span>
                        <ArrowRight />
                    </>
                </Button>
            </div>
        </form>
    )
}

export default FoundingInfo