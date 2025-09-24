import { Route, Routes } from "react-router-dom"
import LoginForm from "../../pages/auth/pages/LoginForm"
import RegisterForm from "../../pages/auth/pages/RegisterForm"
import EmailVerification from "../../pages/auth/pages/EmailVerification"
import ForgetPassword from "../../pages/auth/pages/ForgetPassword"
import SetUp from "../../pages/main/employers/SetUp"
import SetupComplete from "../../pages/main/employers/SetUpComplete"
import { useAuthStore } from "../../stores/useAuthStore"

const AuthRoutes = () => {
    const { isAuthenticated } = useAuthStore()
    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-full relative p-4 max-w-6xl m-auto">
                <Routes>
                    {isAuthenticated ? (
                        <>
                            <Route path="employer/setup" element={ <SetUp />} />
                            <Route path="employer/setup/complete" element={ <SetupComplete />} />
                        </>
                    ) : (
                        <>
                            <Route path="login" element={ <LoginForm />} />
                            <Route path="register" element={ <RegisterForm />} />
                            <Route path="verify-email" element={ <EmailVerification />} />
                            <Route path="reset-password" element={ <ForgetPassword />} />
                        </>
                    )}
                    

                    
                </Routes>
            </div>
        </div>
    )
}

export default AuthRoutes