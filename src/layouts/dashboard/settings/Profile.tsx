import { Loader, Save } from "lucide-react"
import Button from "../../../components/ui/Button"
import { EducationLevels, ExperienceRanges, Nationalities } from "../../../data/dashboard/Employer"
import axiosClient from "../../../utils/axiosClient"
import { getuser } from "../../../services/api"
import { useState } from "react"
import { useAuthStore } from "../../../stores/useAuthStore"
import { toast } from "react-toastify"

const Profile = () => {
    const [Issaving, setIsSaving] = useState(false)
    const { setUser, user } = useAuthStore()

    const [formData, setFormData] = useState({
        nationality: user?.nationality,
        birth_date: user?.birth_date,
        gender: user?.gender,
        education: user?.education,
        experience: user?.experience,
        bio: user?.bio
    })

    const SaveProfile = async () => {

        setIsSaving(true)

        try {
            const res = await axiosClient.post("/profile_save/", formData, {headers: { "Content-Type": "multipart/form-data" }});
            if(res){
                const response = await getuser()
                toast.success(res.data.message || "success")
                if(response){
                    setUser(response)
                }
            }
        } catch (err) {
            console.error("Error saving:", err);
        }finally{
            setIsSaving(false)
        }
    }

    return (
        <div className="w-full h-full relative">
            <div className="space-y-5">
                <div className="space-y-5 relative">
                    <div className="flex items-center max-md:flex-col gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Nationality</span>

                            <select value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} title="nationality" name="nationality" id="nationality" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option> select... </option>
                                    {Nationalities.map((n, idx) => (
                                        <option key={idx} value={n}>{n}</option>
                                    ))}
                            </select>
                        </div>
                        
                        <div className="w-full relative flex flex-col gap-2">
                            <label className="text-sm font-medium" htmlFor="id">Date of birth</label>
                            <input value={formData.birth_date} onChange={(e) => setFormData({...formData, birth_date: e.target.value})}  placeholder="dd/mm/yyyy" id="dateofbirth" type="date" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                        </div>
                    </div>

                    <div className="flex items-center max-md:flex-col gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Gender</span>

                            <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}  title="gender" name="gender" id="gender" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option> select... </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Education</span>

                            <select value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})}  title="education" name="education" id="education" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option> select...</option>
                                {EducationLevels.map((e, idx) => (
                                    <option key={idx} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="flex items-center gap-2.5 w-full">
                        <div className="w-full relative flex flex-col gap-2">
                            <span className="text-sm font-medium">Experience</span>

                            <select value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}  title="experience" name="experience" id="experience" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                                <option> select... </option>
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

                        <textarea value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})}  className="w-full border resize-none h-100 rounded border-orange-300 focus:border-orange-500 outline-none p-3" title="biography" placeholder="write down your biography here. Let employers know who you are." name="biography" id="biography"></textarea>
                    </div>
                    
                </div>
            </div>

            <div className="items-start py-4 relative">
                <Button title="save" handleClick={SaveProfile}>
                    { Issaving ? (
                        <>
                            <Loader className="animate-spin" size={20} />
                            <span className="font-normal">Saving...</span>
                        </>
                    ) : (
                        <>
                            <Save size={20} />
                            <span className="font-normal">Save</span>
                        </>
                    )
                        
                    }
                </Button>
            </div>
        </div>
    )
}

export default Profile