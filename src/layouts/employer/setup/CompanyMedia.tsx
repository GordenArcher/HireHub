import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react"
import Button from "../../../components/ui/Button"

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const CompanyMedia = ({ setActiveTab }: Props) => {

    return (
        <div className="w-full h-full relative">
            <div className="space-y-3.5">
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
                                <input className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
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
                                <input className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
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
                                <input className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 h-full">
                        <span className="text-sm font-medium">Social Link 4</span>

                        <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                            <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                                <div className="flex items-center gap-1.5 text-red-600">
                                    <Youtube size={20} />
                                    <span className="text-sm font-black max-md:hidden">Youtube</span>
                                </div>
                            </div>

                            <div className="w-full h-full">
                                <input className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center gap-3.5 py-7">
                <Button handleClick={() => setActiveTab("founding-info")} title="previous" bgcolor="bg-gray-200" color="text-orange-500" >
                    {"Previous"}
                </Button>

                <Button title="save & next" handleClick={() => setActiveTab("contact")}>
                    {
                        <>
                            <span>Save & Next</span>
                            <ArrowRight />
                        </>
                    }
                </Button>
            </div>
        </div>
    )
}

export default CompanyMedia