import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080, https://kauth.kakao.com',
        'Access-Control-Allow-Headers': "x-requested-with",
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, PATCH, CONNECT'
    }
})

export default axiosInstance;