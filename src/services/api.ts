import axiosClient from "../utils/axiosClient"
export const getuser = async () => {
    const response = await axiosClient.get("/get_user/")
    return response.data
}

export const get_auth = async () => {
    const response = await axiosClient.get("/get_authentication/")
    return response.data
}

export const get_socials = async () => {
    const response = await axiosClient.get("/social-links/")
    return response.data
}

export const get_company = async () => {
    const response = await axiosClient.get("/company/")
    return response.data
}


export const logout = async () => {
    const response = await axiosClient.post("/logout/")
    return response.data
}