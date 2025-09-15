import { Facebook, Globe, Instagram, Save, Twitch, Twitter } from "lucide-react"

const SocilaLinks = () => {
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
                    <span className="text-sm font-medium">Social Link 1</span>

                    <div className="w-full flex px-3 py-2 items-center gap-2 border border-orange-400 hover:border-orange-500 duration-200 ease-in transition rounded h-16">
                        <div className="w-[20%] flex items-start gap-2 border-r border-slate-700">
                            <div className="flex items-center gap-1.5 text-slate-600">
                                <Globe size={20} />
                                <span className="text-sm font-black max-md:hidden">Website</span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <input className="w-full h-full outline-none p-1" placeholder="profile link/url..." type="text" />
                        </div>
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

export default SocilaLinks