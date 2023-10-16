import axiosInstance from "utils/api";

export const loginFn = async (params: string) => {
    console.log('login');
    
    const res = await axiosInstance.get(`/oauth2/authorization/${params}` );

    switch(res.status) {
        case 200:
            return res.data;
        default:
            return res.data;
    }
};
