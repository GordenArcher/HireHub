import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import AuthRight from "../../../components/ui/AuthRightUI"
import Logo from "../../../components/ui/Logo"

const ForgetPassword = () => {
    return (
        <div className="h-full w-full">

            <Logo />

            <div className="h-full w-full flex items-center justify-center">
                <div className="w-full max-md:w-full flex flex-col max-md:px-3">
                    <div className="w-full max-w-md">
                        <div className="space-y-2">
                            <p className="mb-6 font-black text-black">Forgotten Password ?</p>
                            <p className="text-start text-sm text-gray-600 mb-6">
                                Enter your email address and we’ll send you a password reset link.{" "}
                                <span className="font-black">Check your inbox</span> and follow the instructions to securely reset your password.
                            </p>

                            <p className="text-start text-sm text-gray-600 mb-6">
                                Go back to{" "}
                                <Link to="/auth/login" className="text-orange-500 hover:underline font-medium">
                                    login
                                </Link>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                    autoComplete="off"
                                    aria-description="email field"
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-orange-500 text-white py-2 transition duration-100 ease-in rounded-lg font-medium hover:bg-orange-600"
                                >
                                    <div className="w-full flex items-center justify-center gap-1.5">
                                        <span>Login</span>
                                        <ArrowRight size={20} />
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

export default ForgetPassword