import { Facebook, Globe, Instagram, Loader, Save, Twitter } from "lucide-react"
import Button from "../../../components/ui/Button"
import { useState } from "react"
import axiosClient from "../../../utils/axiosClient"
import { get_socials } from "../../../services/api"
import { toast } from "react-toastify"
import { useAuthStore } from "../../../stores/useAuthStore"

const SocilaLinks = () => {
    const [Issaving, setIsSaving] = useState(false)
    const { setSocials, socials } = useAuthStore()

    const [formData, setFormData] = useState({
        facebook : socials?.facebook,
        twitter : socials?.twitter,
        instagram : socials?.instagram,
        personal_website : socials?.personal_website,
    })

    const SaveLink = async () => {

        setIsSaving(true)

        try {
            const res = await axiosClient.post("/socials/", formData, {headers: { "Content-Type": "multipart/form-data" }});
            if(res){
                const response = await get_socials()
                toast.success(res.data.message || "success")
                if(response){
                    setSocials(response)
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
            <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-2 h-full">
                    <span className="text-sm font-medium">Social Link 1</span>

                    <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                        <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                            <div className="flex items-center gap-1.5 text-blue-600">
                                <Facebook size={20} />
                                <span className="text-sm font-black max-md:hidden">Facebook</span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <input value={formData.facebook} onChange={(e) => setFormData({...formData, facebook: e.target.value})}  className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 h-full">
                    <span className="text-sm font-medium">Social Link 2</span>

                    <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                        <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                            <div className="flex items-center gap-1.5 text-shadow-blue-400">
                                <Twitter size={20} />
                                <span className="text-sm font-black max-md:hidden">Twitter</span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <input value={formData.twitter} onChange={(e) => setFormData({...formData, twitter: e.target.value})} className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 h-full">
                    <span className="text-sm font-medium">Social Link 3</span>

                    <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                        <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                            <div className="flex items-center gap-1.5 text-pink-600">
                                <Instagram size={20} />
                                <span className="text-sm font-black max-md:hidden">Instagram</span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <input value={formData.instagram} onChange={(e) => setFormData({...formData, instagram: e.target.value})} className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 h-full">
                    <span className="text-sm font-medium">Social Link 1</span>

                    <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                        <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                            <div className="flex items-center gap-1.5 text-slate-600">
                                <Globe size={20} />
                                <span className="text-sm font-black max-md:hidden">Website</span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <input value={formData.personal_website} onChange={(e) => setFormData({...formData, personal_website: e.target.value})} className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="items-start py-4 relative">
                <Button title="save" handleClick={SaveLink}>
                    {
                        Issaving ? (
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

export default SocilaLinks