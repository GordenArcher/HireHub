import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});


let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach(prom => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

axiosClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 || error.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
            if (!isRefreshing) {
                isRefreshing = true;
                await axiosClient.post("refresh/");
                isRefreshing = false;
            }
            return axiosClient(originalRequest);
        } catch (err) {
            isRefreshing = false;
            return Promise.reject(err); 
        }
        }

        return Promise.reject(error);
    }
);



export default axiosClient;