import Button from "../../../../components/ui/Button"
import { UseCompanyStore } from "../../../../stores/UseCompanyStore"

const CompanyInfo = () => {
    const { company } = UseCompanyStore()

    return (
        <div className="w-full relative h-full">
            <div className="space-y-4">
                <div className="space-y-5.5 pb-8 relative">
                    <h3 className="font-medium">Logo & Banner Image</h3>

                    <div className="w-full relative grid grid-cols-[25%_75%] max-md:grid-cols-1 gap-4">
                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Upload Logo</h5>

                            <div className="w-full h-60 flex items-center justify-center">
                                {company?.logo ? (
                                    <img
                                        src={`http://localhost:8000${company.logo}`}
                                        alt="company logo"
                                        className="h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3 flex items-center justify-center">
                                        <p className="text-gray-500">No logo uploaded</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Banner Image</h5>

                            <div className="w-full h-60 rounded-md flex items-center justify-center">
                                {company?.banner_logo ? (
                                    <img
                                    src={`http://localhost:8000${company.banner_logo}`}
                                    alt="company banner"
                                    className="h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3 flex items-center justify-center">
                                        <p className="text-gray-500">No banner uploaded</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-[1px] bg-orange-600 rounded-full transition-all duration-300 w-full"></div>

                <div className="pt-6 relative">
                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="companyname">Company Name</label>
                            <input value={company?.name} id="companyname" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500"  />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aboutcompany">About Us</label>
                            <textarea value={company?.about_us} rows={11} id="aboutcompany" placeholder="Write down about your company here. Let candidate know who we are..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                        </div>
                        

                        <div className="mt-5">
                            <Button title="save">
                                {
                                    
                                    <span>Save Changes</span>
                                    
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