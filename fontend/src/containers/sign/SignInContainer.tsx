import googleLogo from 'assets/img/sign/google-icon.png';
import kakaoLogo from 'assets/img/sign/kakao-icon.png';
import naverLogo from 'assets/img/sign/naver-icon.png';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_GOAL, ROUTE_SIGN_UP } from 'routes/const';
import { useMutation } from 'react-query';
import { loginFn } from 'modules/sign';
import styled from 'styled-components';

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
                <SignButton
                    onClick={() => loginGoogle()}
                    aria-hidden="true"
                >
                    <img src={googleLogo} alt="google login" width={30} height={30} />
                    <SignLabel>구글 로그인</SignLabel>
                </SignButton>
                <SignButton
                    onClick={() => loginKakao()}
                    aria-hidden="true"
                >
                    <img src={kakaoLogo} alt="kakao login" width={30} height={30} />
                    <SignLabel>카카오 로그인</SignLabel>
                </SignButton>
                <SignButton
                    onClick={() => loginNaver()}
                    aria-hidden="true"
                >
                    <img src={naverLogo} alt="naver login" width={30} height={30} />
                    <SignLabel>네이버 로그인</SignLabel>
                </SignButton>
            </div>
        </div>
    )
}

const SignButton = styled.div`
    cursor: pointer;
    width: 25rem;
    display: flex;
    justify-content: left;
    border: solid 1px #bebebe;
    border-radius: 4px;
    padding: 5px 15px;
    align-items: center;
    margin-bottom: 2rem;
    box-shadow: 1px 1px 5px 3px #4b4b4b1a;
    height: 3.5rem;
    &:hover {
        background-color: #e6e6e6;
    }
`

const SignLabel = styled.p`
    margin-left: 4rem;
`