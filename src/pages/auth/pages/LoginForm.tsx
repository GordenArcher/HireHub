import { ArrowRight, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import AuthRight from "../../../components/ui/AuthRightUI";
import { useCallback, useState } from "react";
import LoginAPI from "../containers/LoginAPI";
import { useAuthStore } from "../../../stores/useAuthStore";
import { getuser } from "../../../services/api";


const LoginForm = () => {
    const { setAuthenticated, setUser } = useAuthStore()
    const navigate = useNavigate()

    const [formaData, setFormData] = useState({
        email: "",
        password: ""
    })
    // const [isLoading, setIsLoading] = useState<boolean>(false)

    const { handleLogin, isLoading } = LoginAPI()

    const Login = useCallback( async () => {
        const response = await handleLogin(formaData)

        if(response){
            const res = await getuser()
            if(res){
                setUser(res)
            }
            setAuthenticated(response?.authenticated)

            setTimeout(() => {
                navigate("/")
            }, 2000)
        }

    }, [formaData, handleLogin, setAuthenticated, setUser])


    // const loginUser = () => {
    //     if(!formaData.email.trim() || !formaData.password.trim()) return toast.error("Email and Password are required")

    //     setIsLoading(true)

    //     try {

    //         const users = JSON.parse(localStorage.getItem("users") || "[]");

    //         const foundUser = users.find(
    //             (u: Login) => u.email === formaData.email && u.password === formaData.password
    //         );

    //         if (!foundUser) {
    //             toast.error("Invalid Credentials")
    //             return { success: false, message: "Invalid credentials" };
    //         }

    //         const token = uuidv4();
    //         const updatedUser = { ...foundUser, token };

    //         sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));

    //         toast.success("Login Successfull")

    //         return { success: true, token, user: updatedUser };
            
    //     } catch (error) {
    //         return error
    //     }finally{
    //         setIsLoading(false)
    //     }
    // };

    return (
        <div className="h-full w-full">

            <Logo />

            <div className="h-full w-full flex items-center justify-center">
                <div className="w-full max-md:w-full flex flex-col max-md:px-3">
                    <div className="w-full max-w-md">
                        <div className="space-y-2">
                            <p className="mb-6 font-black text-black">Login to your HireHub account</p>
                            <p className="text-start text-sm text-gray-600 mb-6">
                                Don’t have an account?{" "}
                                <Link to="/auth/register" className="text-orange-500 hover:underline font-medium">
                                    Sign up
                                </Link>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setFormData((prevData) => ({...prevData, email: e.target.value}))}
                                    value={formaData.email}
                                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
                                    autoComplete="off"
                                    aria-description="email field"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setFormData((prevData) => ({...prevData, password: e.target.value}))}
                                    value={formaData.password}
                                    className="w-full px-4 py-3 border  border-orange-200 rounded-lg focus:ring-2 transition duration-200 focus:ring-orange-300 focus:outline-none outline-none"
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
                                        <span className="ml-3 text-sm font-medium text-gray-900">Remember me</span>
                                    </label>

                                </div>

                                <div>
                                    <Link to="/auth/reset-password" className="text-orange-500 hover:underline">Forgot password?</Link>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    onClick={Login}
                                    disabled={isLoading}
                                    type="submit"
                                    className="w-full disabled:cursor-not-allowed cursor-pointer bg-orange-500 text-white py-3 transition duration-100 ease-in rounded-lg font-medium hover:bg-orange-600"
                                >
                                    <div className="w-full flex items-center justify-center gap-1.5">
                                        {isLoading ? (
                                            <>
                                                <Loader size={20} className="animate-spin" />
                                                <span>Please wait...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Login</span>
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
    );
};

export default LoginForm;
