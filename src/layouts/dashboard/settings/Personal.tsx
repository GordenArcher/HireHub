import { Upload, FileText, PlusCircle, Save, Loader } from "lucide-react";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../../../stores/useAuthStore";
import { useRef, useState } from "react";
import axiosClient from "../../../utils/axiosClient";
import { getuser } from "../../../services/api";
import { toast } from "react-toastify";

const Personal = () => {
    const { user, socials, setUser } = useAuthStore()

    const [Issaving, setIsSaving] = useState(false)
    const [formData, setFormData] = useState({
        profile_image : `http://localhost:8000${user?.profile_image}`,
        full_name : user?.full_name,
        experience : "",
        education : "",
        Website : socials?.personal_website
    })

    const [preview, setPreview] = useState<string | null>(formData?.profile_image || null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, profile_image: file });

            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };
    


    const handleSubmit = async () => {
        const data = new FormData();
        data.append("full_name", formData.full_name);
        data.append("experience", formData.experience);
        data.append("education", formData.education);
        data.append("website", formData.Website);
        if (formData.profile_image instanceof File) {
            data.append("profile_image", formData.profile_image);
        }

        setIsSaving(true)

        try {
            const res = await axiosClient.post("/profile_save/", data, {headers: { "Content-Type": "multipart/form-data" }});
            if(res){
                const response = await getuser()
                toast.success(res.data.message || "success")
                if(response){
                    setUser(response)
                }
            }
            console.log("Saved:", res.data);
        } catch (err) {
            console.error("Error uploading:", err);
        }finally{
            setIsSaving(false)
        }
    };

    return (
        <div className="w-full h-full relative p-6">
            <div className="h-full space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
                </div>

                <div className="grid grid-cols-[30%_70%] h-full max-md:grid-cols-1 items-start gap-2.5">
                    <div
                        onClick={handleClick}
                        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-40 cursor-pointer hover:bg-gray-50 transition"
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        ) : (
                            <>
                                <Upload size={28} className="text-gray-500" />
                                <p className="text-sm text-gray-600">Browse photo or drop here</p>
                                <p className="text-xs text-gray-400">Max size 5MB</p>
                            </>
                        )}

                        <input
                            title="upload"
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="w-full h-full relative">
                        <div className="w-full grid grid-cols-1 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="full_name">Full Name</label>
                                <input id="full_name" value={formData.full_name} onChange={(e) =>setFormData({ ...formData, full_name: e.target.value })} type="text" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="website">Website</label>
                                <input placeholder="Website url" value={formData.Website} onChange={(e) =>setFormData({ ...formData, Website: e.target.value })}  id="website" type="text" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                            </div>
                        </div>

                        <div className="items-start py-4 relative">
                            <Button title="save" handleClick={handleSubmit} >
                                {
                                    Issaving 
                                    ? 
                                    (
                                        <>
                                            <Loader className="animate-spin" size={20} />
                                            <span className="font-normal">Saving...</span>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <Save size={20} />
                                            <span className="font-normal">Save</span>
                                        </>
                                    )
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
