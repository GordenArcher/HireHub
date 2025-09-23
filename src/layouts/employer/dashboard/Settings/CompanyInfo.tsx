import Button from "../../../../components/ui/Button"

const CompanyInfo = () => {
    return (
        <div className="w-full relative h-full">
            <div className="space-y-4">
                <div className="space-y-5.5 pb-8 relative">
                    <h3 className="font-medium">Logo & Banner Image</h3>

                    <div className="w-full relative grid grid-cols-[25%_75%] max-md:grid-cols-1 gap-4">
                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Upload Logo</h5>

                            <div className="w-full h-60 border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3">
                                <img alt="company profile" className="h-full flex items-center flex-col gap-4 justify-center" />
                            </div>
                        </div>

                        <div className="w-full space-y-2">
                            <h5 className="font-medium">Banner Image</h5>

                            <div className="w-full h-60 border border-dashed border-orange-500 bg-orange-300/30 rounded-md p-3">
                                <div className="h-full flex items-center flex-col gap-4 justify-center">
                                    <img alt="company profile" className="h-full flex items-center flex-col gap-4 justify-center" />
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