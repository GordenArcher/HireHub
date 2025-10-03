import { ArrowRight, Loader, Mail, MapPinCheck, PhoneCallIcon } from "lucide-react"
import Button from "../../../components/ui/Button"

interface Contact {
    map_location: string
    phone: string
    email: string
}
interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    setForm: React.Dispatch<React.SetStateAction<Contact>>;
    form: Contact;
    isSubmitting: boolean
    handleSubmit: () => void
}

const Contact = ({ setActiveTab, setForm, form, isSubmitting, handleSubmit  }: Props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="w-full h-full relative py-6">
            <div className="space-y-3">
                <div className="flex flex-col gap-8 items-start">
                    <div className="w-full space-y-3.5">
                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="location" className="text-sm font-medium">Map Location</label>
                            <input value={form.map_location} name="map_location" onChange={handleInputChange} placeholder="Your location" id="location" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                            <div className="absolute left-4 top-10">
                                <MapPinCheck size={20} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                            <input value={form.phone} name="phone" onChange={handleInputChange} placeholder="Phone number..." type="tel" id="phone" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                            <div className="absolute left-4 top-10">
                                <PhoneCallIcon size={20} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input value={form.email} name="map_location" onChange={handleInputChange} placeholder="Email Address" type="email" id="email" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                            <div className="absolute left-4 top-10">
                                <Mail size={20} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-3.5 py-7">
                    <Button handleClick={() => setActiveTab("company-media")} title="previous" bgcolor="bg-gray-200" color="text-orange-500" >
                        {"Previous"}
                    </Button>

                    <Button title="save & next" handleClick={handleSubmit}>
                        {
                            isSubmitting? (
                                <>
                                    <span>hold on champ....</span>
                                    <Loader className="animate-spin" />
                                </>
                            )
                            :
                            (
                                <>
                                    <span>Finish Editing</span>
                                    <ArrowRight />
                                </>
                            )
                            
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contact