import { useEffect, useState } from "react";
import { Benefits, EducationLevels, ExperienceRanges, JobLevel, JobType, Nationalities, SalaryType, Vacancies } from "../../../../data/dashboard/Employer"
import Button from "../../../../components/ui/Button";
import { ArrowRight } from "lucide-react";
import axiosClient from "../../../../utils/axiosClient";
import { toast } from "react-toastify";

const PostJob = () => {
    const [cities, setCities] = useState<string[]>([])
    const [selectedCountry, setSelectedCountry] = useState<string>("")
    const [selectedBenefits, setSelectedBenefits] = useState<string[]>([])
    const [isRemote, setIsRemote] = useState(false)

    const [form, setForm] = useState({
        title: "",
        role: "",
        type: "",
        level: "",
        education: "",
        experience: "",
        vacancy: "",
        salary: { min: 0, max: 0 },
        description: "",
        requirements: "",
        desirable: "",
        benefits: "",
        tags: "",
        expires_at: "",
        location: { country: "", city: "" },
    });

    const fetchCities = async (country: string) => {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country }),
        });
        const data = await res.json();
        return data.data;
    };

    useEffect(() => {
        if (selectedCountry) {
            fetchCities(selectedCountry).then((cities) => setCities(cities));
        }
    }, [selectedCountry]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "min" || name === "max") {
            setForm((prev) => ({
                ...prev,
                salary: { ...prev.salary, [name]: Number(value) },
            }));
        }
        else if (name === "city" || name === "country") {
            setForm((prev) => ({
                ...prev,
                location: { ...prev.location, [name]: value },
            }));
        }
        else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleBenefitToggle = (benefit: string) => {
        setSelectedBenefits(prev => 
            prev.includes(benefit) 
                ? prev.filter(b => b !== benefit)
                : [...prev, benefit]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const jobData = {
            title: form.title,
            role: form.role,
            type: form.type,
            level: form.level,
            education: form.education,
            experience: form.experience,
            vacancy: form.vacancy,
            salary: form.salary,
            description: form.description,
            requirements: form.requirements.split('\n').filter(item => item.trim() !== ''),
            desirable: form.desirable.split('\n').filter(item => item.trim() !== ''),
            benefits: selectedBenefits,
            tags: form.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
            expires_at: form.expires_at,
            location: isRemote ? "Remote" : `${form.location.city}, ${form.location.country}`,
            is_remote: isRemote
        };

        try {
            const response = await axiosClient.post('jobs/create/', jobData);

            if (response?.data) {
                const result = response.data;
                toast.success(response.message)
                console.log('Job created successfully:', result);
               
                toast.success("Job posted successfully!");
                setForm({
                    title: "",
                    role: "",
                    type: "",
                    level: "",
                    education: "",
                    experience: "",
                    vacancy: "",
                    salary: { min: 0, max: 0 },
                    description: "",
                    requirements: "",
                    desirable: "",
                    benefits: "",
                    tags: "",
                    expires_at: "",
                    location: { country: "", city: "" },
                });
                setSelectedBenefits([]);
            }
        } catch (error) {
            toast.error(error.response.data.message)
            console.error('Error creating job:', error);
        }
    };

    return (
        <div className="w-full h-full relative">
            <div className="space-y-3.5">
                <h3>Post a job</h3>

                <form onSubmit={handleSubmit}>
                    <section className="flex flex-col gap-3">
                        <div className="w-full space-y-4">
                            <div className="space-y-2.5 text-slate-600">
                                <label className="text-sm font-medium" htmlFor="title">Job Title</label>
                                <input 
                                    name="title" 
                                    value={form.title} 
                                    onChange={handleChange} 
                                    type="text" 
                                    placeholder="Add job title, role, vacancies etc" 
                                    id="title" 
                                    className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-[70%_30%] max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
                                <div className="space-y-2.5 text-slate-600">
                                    <label className="text-sm font-medium" htmlFor="role">Job Role</label>
                                    <input 
                                        name="role" 
                                        value={form.role} 
                                        onChange={handleChange} 
                                        placeholder="Backend Engineer" 
                                        id="role" 
                                        type="text" 
                                        className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5 text-slate-600">
                                    <label className="text-sm font-medium" htmlFor="tags">Tags</label>
                                    <input 
                                        name="tags" 
                                        value={form.tags} 
                                        onChange={handleChange} 
                                        placeholder="Job keywords, tags etc..." 
                                        id="tags" 
                                        type="text" 
                                        className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 py-6">
                            <h3 className="font-black">Salary</h3>

                            <div className="w-full relative">
                                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
                                    <div className="space-y-2.5">
                                        <label className="text-sm font-medium" htmlFor="min">Min Salary</label>
                                        <input 
                                            name="min" 
                                            value={form.salary.min} 
                                            onChange={handleChange} 
                                            id="min" 
                                            placeholder="Minimum Salary" 
                                            type="number" 
                                            className="w-full h-12 text-slate-600 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                        />
                                    </div>

                                    <div className="space-y-2.5 text-slate-600">
                                        <label htmlFor="max">Max Salary</label>
                                        <input 
                                            name="max" 
                                            value={form.salary.max} 
                                            onChange={handleChange} 
                                            id="max" 
                                            placeholder="Maximum Salary" 
                                            type="number" 
                                            className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                        />
                                    </div>

                                    <div className="space-y-2.5 text-slate-600">
                                        <label htmlFor="type">Job Type</label>
                                        <select 
                                            name="type" 
                                            value={form.type} 
                                            onChange={handleChange} 
                                            id="type" 
                                            className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500"
                                            required
                                        >
                                            <option value="">Select...</option>
                                            {JobType.map(typ => (
                                                <option key={typ.id} value={typ.label}>{typ.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 py-6">
                            <h3 className="font-black">Advanced Information</h3>

                            <div className="w-full relative">
                                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">Education</span>
                                        <select 
                                            name="education" 
                                            value={form.education} 
                                            onChange={handleChange} 
                                            className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                        >
                                            <option value="">select...</option>
                                            {EducationLevels.map((e, idx) => (
                                                <option key={idx} value={e}>{e}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">Experience</span>
                                        <select 
                                            name="experience" 
                                            value={form.experience} 
                                            onChange={handleChange} 
                                            className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                        >
                                            <option value="">select...</option>
                                            {ExperienceRanges.map((e, idx) => (
                                                <option key={idx} value={e}>{e}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">Job Level</span>
                                        <select 
                                            name="level" 
                                            value={form.level} 
                                            onChange={handleChange} 
                                            id="level" 
                                            className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                        >
                                            <option value="">select...</option>
                                            {JobLevel.map((e, idx) => (
                                                <option key={idx} value={e.label}>{e.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">Organization Type</span>
                                        <select 
                                            name="vacancy" 
                                            value={form.vacancy} 
                                            onChange={handleChange} 
                                            className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                        >
                                            <option value="">select...</option>
                                            {Vacancies.map((e, idx) => (
                                                <option key={idx} value={e.label}>{e.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">Expiration Date</span>
                                        <input 
                                            name="expires_at" 
                                            value={form.expires_at} 
                                            onChange={handleChange} 
                                            type="datetime-local" 
                                            className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" 
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="py-3">
                            <div className="w-full h-full relative bg-gray-200 rounded p-4">
                                <div className="space-y-5">
                                    <h3>Location</h3>

                                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2.5">
                                        <div className="w-full relative flex flex-col gap-2">
                                            <span className="text-sm font-medium">Country</span>
                                            <select 
                                                value={selectedCountry} 
                                                onChange={(e) => {
                                                    setSelectedCountry(e.target.value);
                                                    handleChange(e);
                                                }} 
                                                name="country" 
                                                id="country" 
                                                className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                            >
                                                <option value="">select...</option>
                                                {Nationalities.map((e, idx) => (
                                                    <option key={idx} value={e}>{e}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="w-full relative flex flex-col gap-2">
                                            <span className="text-sm font-medium">City</span>
                                            <select 
                                                name="city" 
                                                value={form.location.city} 
                                                onChange={handleChange} 
                                                id="city" 
                                                className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in"
                                                disabled={!selectedCountry}
                                            >
                                                <option value="">select...</option>
                                                {cities?.map((e, idx) => (
                                                    <option key={idx} value={e}>{e}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="relative flex items-center cursor-pointer group">
                                            <input 
                                                className="peer sr-only" 
                                                type="checkbox" 
                                                checked={isRemote}
                                                onChange={(e) => setIsRemote(e.target.checked)}
                                            />
                                            <div
                                                className="w-6 h-6 rounded-lg bg-white border-2 border-orange-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-orange-500 to-orange-400 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                            ></div>
                                            <span className="ml-3 text-sm font-medium text-gray-900">Fully remote Position</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-6 space-y-5">
                            <h3 className="font-black">Benefits</h3>

                            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
                                {Benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className={`border p-4 rounded cursor-pointer group transition ${
                                            selectedBenefits.includes(benefit) 
                                                ? 'bg-orange-400 text-white border-orange-600' 
                                                : 'border-orange-600 hover:bg-orange-400'
                                        }`}
                                        onClick={() => handleBenefitToggle(benefit)}
                                        style={{ flex: "0 1 auto" }} 
                                    >
                                        <p className="text-sm">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="py-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="text-sm font-medium">Job Description</label>
                                <textarea 
                                    name="description" 
                                    value={form.description} 
                                    onChange={handleChange} 
                                    rows={11} 
                                    id="description" 
                                    placeholder="Write down about the job description here..." 
                                    className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="requirements" className="text-sm font-medium">Job Requirements</label>
                                <textarea 
                                    name="requirements" 
                                    value={form.requirements} 
                                    onChange={handleChange} 
                                    rows={11} 
                                    id="requirements" 
                                    placeholder="Write down about the job requirements here..." 
                                    className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="desirable" className="text-sm font-medium">Desirable Skills</label>
                                <textarea 
                                    name="desirable" 
                                    value={form.desirable} 
                                    onChange={handleChange} 
                                    rows={11} 
                                    id="desirable" 
                                    placeholder="Desirable skills (each line = one)" 
                                    className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                />
                            </div>
                        </div>
                        
                        <div className="py-7">
                            <Button title="post job">
                                <>
                                    <span>Post Job</span>
                                    <ArrowRight />
                                </>
                            </Button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default PostJob