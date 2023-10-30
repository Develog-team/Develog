import axios, { AxiosInstance, AxiosResponse } from 'axios';
import authVeryfy from './authVeryfy';

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

/** 요청 전 - accessToken 있는데 만료 시 refreshToken으로 accessToken 재발행 */
axiosInstance.interceptors.request.use(
    async (config: any) => {
        // const cookie = new Cookies();
        const accessToken = sessionStorage.getItem("accessToken");
        const refreshToken = sessionStorage.getItem("refreshToken");
        // const refreshToken = (env === "dev") ? sessionStorage.getItem("refreshToken") : cookie.get("refreshToken")

        if (accessToken && refreshToken) {
            if (authVeryfy(accessToken) === 'Access Token Expired') {

                const res = await axios.get(`${process.env.REACT_APP_API_ROOT}/auth/jwt/refresh`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        refreshToken: `${refreshToken}`
                    }
                });

                config.headers = { 'token': `${res.data.token}` };
                sessionStorage.setItem("accessToken", `${res.data.value.token.accessToken}`);
            } else {
                config.headers = { Authorization: `Bearer ${accessToken}` };
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
            sessionStorage.removeItem('refreshToken');

        }

        return Promise.reject(error)
    }
);

export default axiosInstance;