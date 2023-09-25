import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Cookies } from "react-cookie";
import authVeryfy from './authVeryfy';

const env = `${process.env.REACT_APP_ENV}`;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: '/',
    // baseURL: process.env.REACT_APP_API_ROOT,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'POST, GET, DELETE'
    },
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const cookie = new Cookies();
        /* accessToken session에 저장 */
        const accessToken = sessionStorage.getItem("accessToken");

        /* dev일떄는 session에 저장, prod 일때는 cookie에 저장 */
        const refreshToken = (env === "dev") ? sessionStorage.getItem("refreshToken") : cookie.get("refreshToken")

        if(accessToken && refreshToken) {
            /* refreshToken 만료시 재발행*/
            if(authVeryfy(accessToken) === 'Access Token Expired'){
                const params = { 
                    refreshToken: refreshToken
                };

                const res = await axios.post(`${process.env.REACT_APP_API_ROOT}/refresh`, params, {
                    headers: { "Content-Type": `application/json` }
                });

                config.headers.Authorization = `Bearer ${accessToken}`;
                sessionStorage.setItem("accessToken", `${res.data.value.token.accessToken}`);
                
            } else {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        } 

        return config
    }, 
    (error: any) => {
        console.error('[ERROR] axiosInstance.interceptors.request ...', error.request || error);
        //Cookie.remove("refreshToken");
        return Promise.reject(error)
    }
);

/** 응답 전 - 신규 accessToken 교체 */
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: any) => {
        console.error('[ERROR] axiosInstance.interceptors.response ...', error.response || error);

        console.log(error.response.data.code)

        // 토큰 정보가 유효하지 않습니다.
        if (error.response.status === 401 || error.response.data.code === 401) {
            // 로그아웃 처리
            // 로그인 페이지로 이동처리
            sessionStorage.removeItem('accessToken');
            if(env === "dev") sessionStorage.removeItem("refreshToken");
        } 

        return Promise.reject(error)
    }
);

export default axiosInstance;