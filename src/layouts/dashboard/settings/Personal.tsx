import { Upload, FileText, PlusCircle, Save } from "lucide-react";
import Button from "../../../components/ui/Button";
import { ExperienceRanges, EducationLevels } from "../../../data/dashboard/Employer";

const Personal = () => {
    return (
        <div className="w-full h-full relative p-6">
            <div className="h-full space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
                </div>

                <div className="grid grid-cols-[30%_70%] h-full max-md:grid-cols-1 items-start gap-2.5">
                    <div className="w-full h-full relative ">
                        <>
                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-40 cursor-pointer hover:bg-gray-50 transition">
                                <Upload size={28} className="text-gray-500" />
                                <p className="text-sm text-gray-600">Browse photo or drop here</p>
                                <p className="text-xs text-gray-400">Max size 5MB</p>
                            </div>
                        </>
                    </div>

                    <div className="w-full h-full relative">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="full_name">Full Name</label>
                                <input id="full_name" type="text" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                            </div>

                            <div className="w-full relative flex flex-col gap-2">
                                <span className="text-sm font-medium">Experience</span>
    
                                <select title="experience" name="experience" id="experience" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                    <option>--- select --- </option>
                                        {ExperienceRanges.map((n, idx) => (
                                            <option key={idx} value={n}>{n}</option>
                                        ))}
                                </select>
                            </div>

                            <div className="w-full relative flex flex-col gap-2">
                                <span className="text-sm font-medium">Education</span>
    
                                <select title="education" name="education" id="education" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                    <option>--- select --- </option>
                                        {EducationLevels.map((n, idx) => (
                                            <option key={idx} value={n}>{n}</option>
                                        ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="website">Website</label>
                                <input placeholder="Website url" id="website" type="text" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                            </div>
                        </div>

                        <div className="items-start py-4 relative">
                            <Button title="save" >
                                {
                                    <>
                                        <Save size={20} />
                                        <span className="font-normal">Save</span>
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Your CV / Resume</h2>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                    <div className="w-full flex items-center justify-between gap-2 border border-orange-400 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2">
                            <FileText className="text-blue-600" size={30} />

                            <div>
                                <p className="text-sm font-medium">Professional Resume</p>
                                <span className="text-xs text-gray-500">3.5 MB</span>
                            </div>
                        </div>
                        
                        
                        <div className="flex items-center gap-3 text-sm">
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-orange-300 rounded-lg p-6 w-52 cursor-pointer hover:bg-gray-50 transition">
                        <PlusCircle className="text-gray-500" size={24} />
                        <p className="text-sm text-gray-600">Add CV / Resume</p>
                        <p className="text-xs text-gray-400">Only PDF</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
