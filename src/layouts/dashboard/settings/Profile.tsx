import { Save } from "lucide-react"
import { EducationLevels, ExperienceRanges, Nationalities } from "../../../types/dashboard/candidateDashboard"

const Profile = () => {
    return (
        <div className="w-full h-full relative">
            <div className="space-y-5">
                <div className="space-y-5 relative">
                    <div className="flex items-center max-md:flex-col gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Nationality</span>

                            <select title="nationality" name="nationality" id="nationality" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option>--- select --- </option>
                                  {Nationalities.map((n, idx) => (
                                        <option key={idx} value={n}>{n}</option>
                                    ))}
                            </select>
                        </div>
                        
                        <div className="w-full relative flex flex-col gap-2">
                            <label className="text-sm font-medium" htmlFor="id">Date of birth</label>
                            <input placeholder="dd/mm/yyyy" id="dateofbirth" type="date" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                        </div>
                    </div>

                    <div className="flex items-center max-md:flex-col gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Gender</span>

                            <select title="gender" name="gender" id="gender" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option>--- select --- </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Education</span>

                            <select title="education" name="education" id="education" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option>--- select --- </option>
                                {EducationLevels.map((e, idx) => (
                                    <option key={idx} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="flex items-center gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Experience</span>

                            <select title="experience" name="experience" id="experience" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option>--- select --- </option>
                                {ExperienceRanges.map((exp, idx) => (
                                    <option key={idx} value={exp}>{exp}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="flex flex-col gap-2 relative">
                        <label className="text-sm font-medium" htmlFor="biography">
                            Biography
                        </label>

                        <textarea className="w-full border resize-none h-100 rounded border-orange-300 focus:border-orange-500 outline-none p-3" title="biography" placeholder="write down your biography here. Let employers know who you are." name="biography" id="biography"></textarea>
                    </div>
                    
                </div>
            </div>

            <div className="items-start py-4 relative">
                <button title="save" className="px-5 py-3 bg-orange-500 text-white cursor-pointer transition duration-150 ease-in-out hover:bg-orange-600 rounded-md" >
                    <div className="flex items-center w-full gap-2.5">
                        <Save size={20} />
                        <span className="font-normal">Save</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Profile