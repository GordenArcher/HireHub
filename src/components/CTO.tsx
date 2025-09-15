import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CTO = () => {
    return (
        <div className="py-16 relative">
            <div className="w-full relative grid grid-cols-2 max-md:grid-cols-1 gap-2">
                <div className="w-full h-full relative">
                    <div className="overflow-hidden p-12 rounded-2xl bg-[url('../assets/images/cta1.png')] bg-cover bg-center h-full relative">
                        
                        <div className="flex flex-col gap-3.5 z-9 ">
                            <h2 className="text-2xl text-black">Become a Candidate</h2>

                            <div className="space-y-3">
                                <p className="text-orange-500">Create your profile, upload your CV, and start applying to jobs that match your skills and interests.</p>
                            </div>

                            <div className="pt-3">
                                <Link to={"/auth/register"} title="register as a candidate" className="flex items-center text-white hover:text-orange-500 rounded py-1 ">
                                    <span>Register</span>
                                    <ArrowRight size={21} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
                    <div className="overflow-hidden p-12 rounded-2xl bg-[url('../assets/images/cta2.png')] object-contain bg-cover bg-center h-full relative">
                        
                        <div className="flex flex-col gap-3.5 z-9">
                            <h2 className="text-2xl text-white">Become a Employer</h2>

                            <div className="space-y-3">
                                <p className="text-white">Post job openings, manage applications, and find the best candidates for your company efficiently.</p>
                            </div>

                            <div className="pt-3">
                                <Link to={"/auth/register"} title="register as am employer" className="flex items-center text-white hover:text-orange-500 rounded py-1 ">
                                    <span>Register</span>
                                        <ArrowRight size={21} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTO