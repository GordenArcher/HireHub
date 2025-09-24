import { ArrowRight, Loader, UploadCloud, X } from "lucide-react"
import Button from "../../../components/ui/Button"
import { useState, useRef } from "react"
import { toast } from "react-toastify"
import axiosClient from "../../../utils/axiosClient"
import { UseCompanyStore } from "../../../stores/UseCompanyStore"

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

interface CompanyForm {
    name: string
    about: string
    logo: File | null
    banner: File | null
}

const CompanyInfo = ({ setActiveTab }: Props) => {
    const { company } = UseCompanyStore()
    const [form, setForm] = useState<CompanyForm>({
        name: "",
        about: "",
        logo: null,
        banner: null
    })
    
    const [IsSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [logoPreview, setLogoPreview] = useState<string>("")
    const [bannerPreview, setBannerPreview] = useState<string>("")
    const logoInputRef = useRef<HTMLInputElement>(null)
    const bannerInputRef = useRef<HTMLInputElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'banner') => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB')
            return
        }

        if (!file.type.startsWith('image/')) {
            alert('Please select an image file')
            return
        }

        setForm(prev => ({ ...prev, [type]: file }))

        const reader = new FileReader()
        reader.onload = (e) => {
            if (type === 'logo') {
                setLogoPreview(e.target?.result as string)
            } else {
                setBannerPreview(e.target?.result as string)
            }
        }
        reader.readAsDataURL(file)
    }

    const removeImage = (type: 'logo' | 'banner') => {
        setForm(prev => ({ ...prev, [type]: null }))
        if (type === 'logo') {
            setLogoPreview("")
            if (logoInputRef.current) logoInputRef.current.value = ""
        } else {
            setBannerPreview("")
            if (bannerInputRef.current) bannerInputRef.current.value = ""
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, type: 'logo' | 'banner') => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file) {
            const event = {
                target: {
                    files: [file]
                }
            } as React.ChangeEvent<HTMLInputElement>
            handleFileChange(event, type)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleSubmit = async () => {
        
        if (!form.name.trim()) {
            toast.error('Please enter company name')
            return
        }

        if (!form.about.trim()) {
            toast.error('Please enter company description')
            return
        }

        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('about', form.about)
        if (form.logo) formData.append('logo', form.logo)
        if (form.banner) formData.append('banner', form.banner)

        setIsSubmitting(true)

        try {
            const response = await axiosClient.post("save_company/", formData)

            if (response) {
                const result = response.data
                toast.success(result.message || "success")
                console.log('Company info saved successfully:', result)
                setActiveTab("founding-info")
            }
        } catch (error) {
            const errorResult = error.response.data
            toast.error(errorResult?.message || "Error saving company info")
            console.error('Error saving company info:', error)
        }finally{
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full relative h-full">
            <div>
                <div className="space-y-4">
                    <div className="space-y-5.5 pb-8 relative">
                        <h3 className="font-medium">Logo & Banner Image</h3>

                        <div className="w-full relative grid grid-cols-[25%_75%] max-md:grid-cols-1 gap-4">
                            <div className="w-full space-y-2">
                                <h5 className="font-medium">Upload Logo</h5>
                                <input
                                    type="file"
                                    ref={logoInputRef}
                                    onChange={(e) => handleFileChange(e, 'logo')}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <div 
                                    className={`w-full h-60 border border-dashed rounded-md p-3 cursor-pointer transition-all duration-200 ${
                                        logoPreview 
                                            ? 'border-green-500 bg-green-50' 
                                            : 'border-orange-500 bg-orange-300/30 hover:bg-orange-400/20'
                                    }`}
                                    onClick={() => logoInputRef.current?.click()}
                                    onDrop={(e) => handleDrop(e, 'logo')}
                                    onDragOver={handleDragOver}
                                >
                                    {logoPreview ? (
                                        <div className="relative h-full flex items-center justify-center">
                                            <img 
                                                src={logoPreview} 
                                                alt="Logo preview" 
                                                className="max-h-full max-w-full object-contain"
                                            />
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    removeImage('logo')
                                                }}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center flex-col gap-4 justify-center">
                                            <UploadCloud size={70} className="text-slate-500" />
                                            <h3 className="text-center"> 
                                                <b>Browse photo</b> or drop here 
                                            </h3>
                                            <p className="text-sm text-center text-gray-600">
                                                A photo larger than 400 pixels work best. Max photo size 5MB
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full space-y-2">
                                <h5 className="font-medium">Banner Image</h5>
                                <input
                                    type="file"
                                    ref={bannerInputRef}
                                    onChange={(e) => handleFileChange(e, 'banner')}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <div 
                                    className={`w-full h-60 border border-dashed rounded-md p-3 cursor-pointer transition-all duration-200 ${
                                        bannerPreview 
                                            ? 'border-green-500 bg-green-50' 
                                            : 'border-orange-500 bg-orange-300/30 hover:bg-orange-400/20'
                                    }`}
                                    onClick={() => bannerInputRef.current?.click()}
                                    onDrop={(e) => handleDrop(e, 'banner')}
                                    onDragOver={handleDragOver}
                                >
                                    {bannerPreview ? (
                                        <div className="relative h-full flex items-center justify-center">
                                            <img 
                                                src={bannerPreview} 
                                                alt="Banner preview" 
                                                className="max-h-full max-w-full object-contain"
                                            />
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    removeImage('banner')
                                                }}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center flex-col gap-4 justify-center">
                                            <UploadCloud size={70} className="text-slate-500" />
                                            <h3 className="text-center">
                                                <b>Browse photo</b> or drop here 
                                            </h3>
                                            <p className="text-sm text-center text-gray-600">
                                                A photo larger than 400 pixels work best. Max photo size 5MB
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-orange-600 rounded-full transition-all duration-300 w-full"></div>

                    <div className="pt-6 relative">
                        <div className="space-y-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-medium">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text" 
                                    value={form.name}
                                    onChange={handleInputChange}
                                    className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    required
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="about" className="font-medium">
                                    About Us <span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    rows={11} 
                                    id="about"
                                    name="about"
                                    value={form.about}
                                    onChange={handleInputChange}
                                    placeholder="Write down about your company here. Let candidate know who we are..." 
                                    className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" 
                                    required
                                />
                            </div>

                            <div className="mt-5">
                                <Button handleClick={handleSubmit}  title="save">
                                    {
                                        IsSubmitting ? (
                                            <>
                                                <Loader className="animate-spin" />
                                                <span>Saving...</span>
                                            </>
                                        ) : (
                                        <>
                                            <span>Save & Next</span>
                                            <ArrowRight />
                                        </> 
                                        )
                                      }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo