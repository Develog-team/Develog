import googleLogo from 'assets/img/sign/google-icon.png';
import kakaoLogo from 'assets/img/sign/kakao-icon.png';
import naverLogo from 'assets/img/sign/naver-icon.png';
import 'assets/css/sign/sign.css';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_GOAL, ROUTE_SIGN_UP } from 'routes/const';
import { useMutation } from 'react-query';
import { loginFn } from 'modules/sign';

export const SignInContainer = () => {

    const navigate = useNavigate();

    const goGoalMain =() =>{
        navigate(ROUTE_GOAL);
    }

    const goSignUp =() =>{
        navigate(ROUTE_SIGN_UP);
    }

    const { mutate: login } = useMutation(
        (type: 'google'|'kakao'|'naver') => loginFn(type),
        {
            onSuccess: (data:any) => {
                // sessionStorage.setItem("accessToken", data.value.token.accessToken);
                console.log(data);
                goGoalMain();
            },
            onError: (error: any) => {
                console.log(error);
                goSignUp();
            }
        }
    );
    
    const loginGoogle = () => {
        //구글 로그인 axios 호출
        login('google');
    }

    const loginKakao = () => {
        //카카오 로그인 axios 호출
        login('kakao');
    }

    const loginNaver = () => {
        //네이버 로그인 axios 호출
        login('naver');
    }


    return (
        <div>
            <div>
                <p>안녕하세요.</p>
                <p>디벨로그입니다.</p>
            </div>
            <Divider />
            <div>
                <div
                    className='sign-btn'
                    onClick={() => loginGoogle()}
                    aria-hidden="true"
                >
                    <img src={googleLogo} alt="google login" width={30} height={30} />
                    <p className='btn-label'>구글 로그인</p>
                </div>
                <div
                    className='sign-btn'
                    onClick={() => loginKakao()}
                    aria-hidden="true"
                >
                    <img src={kakaoLogo} alt="kakao login" width={30} height={30} />
                    <p className='btn-label'>카카오 로그인</p>
                </div>
                <div
                    className='sign-btn'
                    onClick={() => loginNaver()}
                    aria-hidden="true"
                >
                    <img src={naverLogo} alt="naver login" width={30} height={30} />
                    <p className='btn-label'>네이버 로그인</p>
                </div>
            </div>
        </div>
    )
}