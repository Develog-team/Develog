import { Spin, message } from "antd";
import { loginReFn, signReRequestT, signRequestT } from "modules/sign";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_GOAL } from "routes/const";

const OAuthRedirectHandler =() =>{

    const { id : type} = useParams<{ id: signRequestT }>();
    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(code&&type){
            loginRedirect({type, code})
            console.log('code', code);
            console.log('type',type);
        }else{
            message.error('error');
        }
    },[code])
    
    const { mutate: loginRedirect } = useMutation(
        (param: signReRequestT) => loginReFn(param),
        {
            onSuccess: (res: any) => {
                // sessionStorage.setItem("accessToken", data.value.token.accessToken);
                console.log(res);
                navigate(ROUTE_GOAL);
            },
            onError: (error: any) => {
                console.log(error);
                
            }
        }
    );


    return <Spin />
}

export default OAuthRedirectHandler;