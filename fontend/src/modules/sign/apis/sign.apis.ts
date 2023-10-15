import axiosInstance from "utils/api";
import { signReRequestT } from "../models";

//처음 로그인 request
export const loginFn = async (params: string) => {
    console.log('login');
    
    const res = await axiosInstance.get(`/oauth/${params}` );

    switch(res.status) {
        case 200:
            return res.data.value;
        default:
            return res.data.value;
    }
};

//로그인 request 후 redirect
export const loginReFn = async (params: signReRequestT) => {

    const res = await axiosInstance.get(`/oauth/redirect/${params}` );

    switch(res.status) {
        case 200:
            return res.data.value;
        default:
            return res.data.value;
    }
};


