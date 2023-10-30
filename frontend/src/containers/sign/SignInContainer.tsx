import googleLogo from 'assets/img/sign/google-icon.png';
import kakaoLogo from 'assets/img/sign/kakao-icon.png';
import naverLogo from 'assets/img/sign/naver-icon.png';
import { Divider } from 'antd';
import styled from 'styled-components';
import { signRequestT } from 'modules/sign';

export const SignInContainer = () => {

    const LoginReq =( type: signRequestT ) => {
        const link = document.createElement('a');
        link.href = `http://localhost:8080/oauth/${type}`;
        document.body.appendChild(link);
        link.click();
    }

    const loginGoogle = () => {
        //구글 로그인 axios 호출
        LoginReq('google');
    }
    const loginKakao = () => {
        //카카오 로그인 axios 호출
        LoginReq('kakao');
    }

    const loginNaver = () => {
        //네이버 로그인 axios 호출
        LoginReq('naver');
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
                    aria-hidden="true"
                    onClick={() => loginKakao()}
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
        </div >
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