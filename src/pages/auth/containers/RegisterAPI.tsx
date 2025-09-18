import { useState } from "react"
import type { Register } from "../../../types/auth/AuthTypes"
import { toast } from "react-toastify"
import axiosClient from "../../../utils/axiosClient"
import { handleApiError } from "../../../components/errors/ErrorHandler"
import { useNavigate } from "react-router-dom"

const RegisterAPI = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleRegister = async (formdata: Register) => {
        
        try {
            if(!formdata.email.trim() || !formdata.fullname.trim() || !formdata.username.trim() || !formdata.user_type.trim() || !formdata.password.trim()) return toast.error("All fields are required")

            if (formdata.password.trim() !== formdata.password2.trim()) return toast.error("Password mismatch")
        
            setIsLoading(true)

            const response = await axiosClient.post("/register/", formdata)

            const data = response.data

            toast.success(data?.message)

            setTimeout(() => {
                navigate("/auth/login")
            }, 2000)
            
        } catch (error) {
            handleApiError(error)
        }finally{
            setIsLoading(false)
        }

        
    }

    return { handleRegister, isLoading }
}

export default RegisterAPI