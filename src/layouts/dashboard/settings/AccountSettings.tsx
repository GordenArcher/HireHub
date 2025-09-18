import { Mail, Save, XCircle } from "lucide-react"
import Button from "../../../components/ui/Button"

const AccountSettings = () => {
    return (
        <div className="w-full h-full relative">
            <div className="space-y-6">
                <div className="py-6">
                    <div className="relative space-y-2.5">
                        <h3 className="text-lg text-slate-600 font-black">Contact info</h3>
                        
                        <div className="flex flex-col gap-8 items-start">
                            <div className="w-full space-y-3.5">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="location" className="text-sm font-medium">Map Location</label>
                                    <input placeholder="Your location" id="location" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <input placeholder="Phone number..." type="tel" id="phone" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                                </div>

                                <div className="flex flex-col gap-1.5 relative">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input placeholder="Email Address" type="email" id="email" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear pl-11 px-3 rounded-md border border-orange-500" />

                                    <div className="absolute left-4 top-9.5">
                                        <Mail />
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <Button title="save">
                                        {
                                            <>
                                                <Save />
                                                <span>Save Changes</span>
                                            </>
                                        }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-5 space-y-4">
                        <h3 className="text-lg text-slate-600 font-black">Change Password</h3>

                        <section className="w-full space-y-3.5 relative">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="currentpassword" className="text-sm font-medium">Current Password</label>
                                <input placeholder="Password" id="currentpassword" type="password" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="newpassword" className="text-sm font-medium">New Password</label>
                                <input placeholder="Password" id="newpassword" type="password" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="confirmnewpassword" className="text-sm font-medium">Confirm password</label>
                                <input placeholder="Password" id="confirmnewpassword" type="text" className="w-full h-12 outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                            </div>   

                            <div className="pt-5">
                                <Button title="save changes">
                                    {
                                        <>
                                            <Save />
                                            <span>Update Password</span>
                                        </>
                                    }
                                </Button>
                            </div>                        
                        </section>
                    </div>

                    <div className="relative mt-15 space-y-4">
                        <div className="space-y-2.5">
                            <h2 className="text-2xl text-slate-600">Delete Your Account</h2>
                            <p>If you delete your HireHub account, you will no longer be able to get information about the matched jobs, following employers, and job alerts,shortlisted jobs and more. You will be abondoned from all the services of HireHub.</p>

                            <div className="py-4">
                                <Button title="delete account" bgcolor="bg-red-500">
                                    {
                                        <>
                                            <XCircle />
                                            <span>Close Account</span>
                                        </>
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

export default AccountSettings