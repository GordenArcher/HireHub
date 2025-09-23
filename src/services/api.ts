import axiosClient from "../utils/axiosClient"
export const getuser = async () => {
    const response = await axiosClient.get("/get_user/")
    return response.data
}

export const get_auth = async () => {
    const response = await axiosClient.get("/get_authentication/")
    return response.data
}