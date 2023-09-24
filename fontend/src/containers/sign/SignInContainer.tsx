import googleLogo from 'assets/img/sign/google-icon.png';
import kakaoLogo from 'assets/img/sign/kakao-icon.png';
import naverLogo from 'assets/img/sign/naver-icon.png';
import 'assets/css/sign.css';
import { Divider } from 'antd';

export const SignInContainer = () => {

    const loginGoogle =() =>{
        //구글 로그인 axios 호출    
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
                    onClick={()=> loginGoogle()}
                    aria-hidden = "true"
                >
                    <img src={googleLogo} alt="google login" width={30} height={30} />
                    <p className='btn-label'>구글 로그인</p>
                </div>
                <div
                    className='sign-btn'
                >
                    <img src={kakaoLogo} alt="kakao login" width={30} height={30} />
                    <p className='btn-label'>카카오 로그인</p>
                </div>
                <div
                    className='sign-btn'
                >
                    <img src={naverLogo} alt="naver login" width={30} height={30} />
                    <p className='btn-label'>네이버 로그인</p>
                </div>
            </div>
        </div>
    )
}