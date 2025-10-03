import axiosClient from "../utils/axiosClient"
export const getuser = async () => {
    const response = await axiosClient.get("/profile/")
    return response.data
}

export const get_auth = async () => {
    const response = await axiosClient.get("/get_authentication/")
    return response.data
}

export const get_socials = async () => {
    const response = await axiosClient.get("/social_links/")
    return response.data
}

export const getAllJobs = async () => {
    const response = await axiosClient.get("/jobs/all/")
    return response.data
}



export const get_company = async () => {
    const response = await axiosClient.get("/company/")
    return response.data
}

export const js_jobs = async () => {
    const response = await axiosClient.get("/company/")
    return response.data
}


export const logout = async () => {
    const response = await axiosClient.post("/logout/")
    return response.data
}


export const resendActivationEmail = async (email: string) => {
    const response = await axiosClient.post(`/resend_activation_email/${email}/`)
    return response.data
}