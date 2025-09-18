import { ArrowRight, Mail, MapPinCheck, PhoneCallIcon } from "lucide-react"
import Button from "../../../components/ui/Button"

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const Contact = ({ setActiveTab }: Props) => {
    return (
        <div className="w-full h-full relative py-6">
            <div className="space-y-3">
                <div className="flex flex-col gap-8 items-start">
                    <div className="w-full space-y-3.5">
                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="location" className="text-sm font-medium">Map Location</label>
                            <input placeholder="Your location" id="location" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                            <div className="absolute left-4 top-10">
                                <MapPinCheck size={20} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                            <input placeholder="Phone number..." type="tel" id="phone" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                            <div className="absolute left-4 top-10">
                                <PhoneCallIcon size={20} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 relative">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input placeholder="Email Address" type="email" id="email" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

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

                    <Button title="save & next" handleClick={() => setActiveTab("contact")}>
                        {
                            <>
                                <span>Finish Editing</span>
                                <ArrowRight />
                            </>
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contact