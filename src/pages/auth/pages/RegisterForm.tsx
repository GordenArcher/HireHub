import { Link } from "react-router-dom"
import AuthRight from "../../../components/ui/AuthRightUI"
import { ArrowRight, Loader } from "lucide-react"
import Logo from "../../../components/ui/Logo"
import Radio from "../../../components/ui/AccountSelector"
import { useCallback, useState } from "react"
import type { Register } from "../../../types/auth/AuthTypes"
import RegisterAPI from "../containers/RegisterAPI"

const RegisterForm = () => {

    const [formData, setFormData] = useState<Register>({
        user_type: "JS",
        email: "",
        username: "",
        fullname: "",
        password: "",
        password2: "",
    })

    const { handleRegister, isLoading} = RegisterAPI()

    const registerUser = useCallback( async () => {
            await handleRegister(formData)
        },[formData, handleRegister],
    )
    

    return(
        <div className="h-full w-full">

            <Logo />

            <div className="h-full w-full flex items-center justify-center">
                <div className="w-full max-md:w-full flex flex-col max-md:px-3">
                    <div className="w-full max-w-md">
                        <div className="space-y-2">
                            <p className="mb-6 font-black text-black">Login to your HireHub account</p>
                            <p className="text-start text-sm text-gray-600 mb-6">
                                Already have an account?{" "}

                                <Link to="/auth/login" className="text-orange-500 hover:underline font-medium">
                                    login
                                </Link>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="mb-3">
                                    <p className="text-start text-sm text-gray-600 mb-3">Create an account as a</p>
                                </div>

                                <Radio formData={formData} setFormData={setFormData} />
                            </div>

                            <div className="w-full grid grid-cols-2 gap-3">
                                <div className="">
                                    <input
                                        type="fullname"
                                        placeholder="Full Name"
                                        onChange={(e) => setFormData((prevState) => ({...prevState, fullname: e.target.value}))}
                                        value={formData.fullname}
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                        autoComplete="off"
                                        aria-description="email field"
                                    />
                                </div>

                                <div className="">
                                    <input
                                        type="username"
                                        placeholder="username"
                                        onChange={(e) => setFormData((prevState) => ({...prevState, username: e.target.value}))}
                                        value={formData.username}
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                        autoComplete="off"
                                        aria-description="email field"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setFormData((prevState) => ({...prevState, email: e.target.value}))}
                                        value={formData.email}
                                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                    autoComplete="off"
                                    aria-description="email field"
                                />
                            </div>

                            <div className="">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setFormData((prevState) => ({...prevState, password: e.target.value}))}
                                    value={formData.password}
                                    className="w-full px-4 py-2 border  border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                    autoComplete="off"
                                    aria-description="password field"
                                />
                            </div>

                            <div className="">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setFormData((prevState) => ({...prevState, password2: e.target.value}))}
                                    value={formData.password2}
                                    className="w-full px-4 py-2 border  border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                    autoComplete="off"
                                    aria-description="password field"
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm mt-3">
                                <div>
                                    <label className="relative flex items-center cursor-pointer group">
                                        <input className="peer sr-only" type="checkbox" />
                                        <div
                                            className="w-6 h-6 rounded-lg bg-white border-2 border-orange-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-orange-500 to-orange-400 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                        ></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900">I've read and agree with our {""}</span>
                                        <span className="pl-1"><Link to={""} className="text-orange-500 hover:underline font-medium">Terms of services</Link></span>
                                    </label>

                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    onClick={registerUser}
                                    type="submit"
                                    className="w-full cursor-pointer bg-orange-500 text-white py-2 transition duration-100 ease-in rounded-lg font-medium hover:bg-orange-600"
                                >
                                    <div className="w-full flex items-center justify-center gap-1.5">
                                        {isLoading ? (
                                            <>
                                                <Loader size={20} className="animate-spin" />
                                                <span>Creating...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Create Account </span>
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                        
                                    </div>
                                </button>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <AuthRight />
                
            </div>
        </div>
    )
}

export default RegisterForm