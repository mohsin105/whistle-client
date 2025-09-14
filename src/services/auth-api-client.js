import axios from "axios";

const authApiClient = axios.create(
    {
        // baseURL : "https://whistle-pi.vercel.app/api/v1/"
        baseURL : "http://127.0.0.1:8000/api/v1/"
    }
);

authApiClient.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('authToken')
        if(token)
        {
            config.headers.Authorization=`JWT ${JSON.parse(token).access}`
        }
        return config;
    },
    (error)=> Promise.reject(error)
);

export default authApiClient;