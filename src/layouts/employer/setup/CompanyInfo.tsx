import { ArrowRight, UploadCloud } from "lucide-react"
import Button from "../../../components/ui/Button"


interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const CompanyInfo = ({ setActiveTab }: Props) => {
    return (
        <div className="w-full relative h-full">
            <div className="space-y-4">
                <div className="space-y-5.5 pb-8 relative">
                    <h3 className="font-medium">Logo & Banner Image</h3>

                    <div className="w-full relative grid grid-cols-[25%_75%] max-md:grid-cols-1 gap-4">
                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Upload Logo</h5>

                            <div className="w-full h-60 border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3">
                                <div className="h-full flex items-center flex-col gap-4 justify-center">
                                    <UploadCloud size={70} className="text-slate-500" />
                                    <h3> <b>Browse photo</b> or drop here </h3>
                                    <p>A photo larger than 400 pixels work best. max photo size 5MB</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Banner Image</h5>

                            <div className="w-full h-60 border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3">
                                <div className="h-full flex items-center flex-col gap-4 justify-center">
                                    <UploadCloud size={70} className="text-slate-500" />
                                    <h3> <b>Browse photo</b> or drop here </h3>
                                    <p>A photo larger than 400 pixels work best. max photo size 5MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-[1px] bg-orange-600 rounded-full transition-all duration-300 w-full"></div>

                <div className="pt-6 relative">
                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="companyname">Company Name</label>
                            <input id="companyname" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500"  />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aboutcompany">About Us</label>
                            <textarea rows={11} id="aboutcompany" placeholder="Write down about your company here. Let candidate know who we are..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>


                        

                        <div className="mt-5">
                            <Button handleClick={() => setActiveTab("company-media")} title="save">
                                {
                                    <>
                                        <span>Save & Next</span>
                                        <ArrowRight />
                                    </>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo