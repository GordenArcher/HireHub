import { useState } from "react"
import type { Login } from "../../../types/auth/AuthTypes"
import { toast } from "react-toastify"
import axiosClient from "../../../utils/axiosClient"
import { handleApiError } from "../../../components/errors/ErrorHandler"

const LoginAPI = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleLogin = async (formdata: Login) => {
        
        try {
            if(!formdata.email.trim() || !formdata.password.trim()) return toast.error("Email and Password are required")
        
            setIsLoading(true)

            const response = await axiosClient.post("/login/", {"email": formdata.email, "password": formdata.password})

            toast.success(response.data.message)

            return response
            
        } catch (error) {
            handleApiError(error)
        }finally{
            setIsLoading(false)
        }

        
    }

    return { handleLogin, isLoading }
}

export default LoginAPI