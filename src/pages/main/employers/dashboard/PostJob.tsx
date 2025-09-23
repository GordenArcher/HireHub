import { useEffect, useState } from "react";
import { Benefits, EducationLevels, ExperienceRanges, JobLevel, JobType, Nationalities, SalaryType, Vacancies } from "../../../../data/dashboard/Employer"
import Button from "../../../../components/ui/Button";
import { ArrowRight } from "lucide-react";

const PostJob = () => {

    const [cities, setCities] = useState<string[]>([])
    const [selectedCountry, setSelectedCountry] = useState<string>("")

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


    return (
        <div className="w-full h-full relative">
            <div className="space-y-3.5">
                <h3>Post a job</h3>

                <section className="flex flex-col gap-3">
                    <div className="w-full space-y-4">
                        <div className="space-y-2.5 text-slate-600">
                            <label className="text-sm font-medium" htmlFor="title">Job Title</label>
                            <input type="text" placeholder="Add job title, role, vacancies etc" id="title" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>

                        <div className="grid grid-cols-[70%_30%] max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
                            <div className="space-y-2.5 text-slate-600">
                                <label className="text-sm font-medium" htmlFor="job-role">Job Role</label>
                                <input placeholder="Backend Engineer" id="job-role" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                            </div>

                            <div className="space-y-2.5 text-slate-600">
                                <label className="text-sm font-medium" htmlFor="tags">Tags</label>
                                <input placeholder="Job keywords, tags etc..." id="tags" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 py-6">
                        <h3 className="font-black">Salary</h3>

                        <div className="w-full relative">
                            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
                                <div className="space-y-2.5">
                                    <label className="text-sm font-medium" htmlFor="min-salary">Min Salary</label>
                                    <input id="min-salary" placeholder="Minimum Salary" type="number" className="w-full h-12 text-slate-600 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                                </div>

                                <div className="space-y-2.5 text-slate-600">
                                    <label htmlFor="max-salary">Max Salary</label>
                                    <input id="max-salary" placeholder="Maximum Salary" type="number" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                                </div>

                                <div className="space-y-2.5 text-slate-600">
                                    <label htmlFor="job-type">Job Type</label>
                                    <select id="job-type" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500">
                                        <option> Select... </option>
                                        {SalaryType.map(typ => (
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
                
                                    <select title="education" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                        <option> select... </option>
                                        {EducationLevels.map((e, idx) => (
                                            <option key={idx} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="w-full relative flex flex-col gap-2">
                                    <span className="text-sm font-medium">Experience</span>
                
                                    <select title="experience"  className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                        <option> select... </option>
                                        {ExperienceRanges.map((e, idx) => (
                                            <option key={idx} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="w-full relative flex flex-col gap-2">
                                    <span className="text-sm font-medium">Job Type</span>
                
                                    <select title="job type" name="job-type" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                        <option> select... </option>
                                        {JobType.map((e, idx) => (
                                            <option key={idx} value={e.id}>{e.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="w-full relative flex flex-col gap-2">
                                    <span className="text-sm font-medium">Organization Type</span>
                
                                    <select title="vacancy" name="vacancy" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                        <option> select... </option>
                                        {Vacancies.map((e, idx) => (
                                            <option key={idx} value={e.id}>{e.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="w-full relative flex flex-col gap-2">
                                    <span className="text-sm font-medium">Expiration Date</span>
                
                                    <input placeholder="DD/MM/YY" name="expire-date" type="datetime-local" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                                        
                                </div>

                                <div className="w-full relative flex flex-col gap-2">
                                    <span className="text-sm font-medium">Job Level</span>
                
                                    <select title="job level" name="job-level" id="job-level" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                        <option> select... </option>
                                        {JobLevel.map((e, idx) => (
                                            <option key={idx} value={e.id}>{e.label}</option>
                                        ))}
                                    </select>
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
                    
                                        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} title="job level" name="country" id="country" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                            <option> select... </option>
                                            {Nationalities.map((e, idx) => (
                                                <option key={idx} value={e}>{e}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full relative flex flex-col gap-2">
                                        <span className="text-sm font-medium">City</span>
                    
                                        <select title="city" name="city" id="city" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                            <option> select... </option>
                                            {cities?.map((e, idx) => (
                                                <option key={idx} value={e}>{e}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>


                                <div>
                                    <label className="relative flex items-center cursor-pointer group">
                                        <input className="peer sr-only" type="checkbox" />
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
                                    className="border p-4 rounded border-orange-600 cursor-pointer group hover:bg-orange-400 transition"
                                    style={{ flex: "0 1 auto" }} 
                                >
                                    <p className="text-gray-700 group-hover:text-white text-sm">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="py-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aboutcompany" className="text-sm font-medium">Job Description</label>
                            <textarea rows={11} id="aboutcompany" placeholder="Write down about the jon description here..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aboutcompany" className="text-sm font-medium">Job Requirements</label>
                            <textarea rows={11} id="aboutcompany" placeholder="Write down about the job requirements here..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aboutcompany" className="text-sm font-medium">Job Benefits</label>
                            <textarea rows={11} id="aboutcompany" placeholder="Write down about the benefits here..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>
                    </div>
                    
                    <div className="py-7">
                        <Button title="post job">
                            {
                                <>
                                    <span>Post Job</span>
                                    <ArrowRight />
                                </>
                                
                            }
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PostJob