import axiosInstance from "utils/api";
import { signReRequestT  } from "../models";

//로그인 redirect 후 로그인 정보 request
export const loginReFn = async (params: signReRequestT) => {

    const typeData = params.type.toUpperCase();

    const res = await axiosInstance.post(`/oauth/login?type=${typeData}&code=${params.code}` );

    switch(res.status) {
        case 200:
            return res.data.value;
        default:
            return res.data.value;
    }
};


