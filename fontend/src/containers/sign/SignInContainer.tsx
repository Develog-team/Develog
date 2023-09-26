import googleLogo from 'assets/img/sign/google-icon.png';
import kakaoLogo from 'assets/img/sign/kakao-icon.png';
import naverLogo from 'assets/img/sign/naver-icon.png';
import 'assets/css/sign.css';
import { Divider } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTE_GOAL, ROUTE_SIGN_UP } from 'routes/const';
// import axiosInstance from 'utils/api';

export const SignInContainer = () => {

    const navigate = useNavigate();

    const loginGoogle = () => {
        //구글 로그인 axios 호출


        // const axiosInstance = new AxiosInstanceCreator({
        //     baseURL: `${process.env.REACT_APP_API_ROOT}`,
        //     withCredentials: true,
        // }).create()

        console.log('google');

        // axiosInstance.get(`/oauth2/authorization/google`)
        //     .then((response: any) => {
        //         // 메인으로 이동
        //         console.log(response);
        //         //navigate(ROUTE_GOAL);

        //     })
        //     .catch((error: any) => {
        //         if (error.response?.status === 401) {
        //             //회원가입으로 이동
        //             console.log(error);

        //             //navigate(ROUTE_SIGN_UP);
        //         }
        //     });

        axios.get('http://localhost:8080/oauth2/authorization/google')
            .then(response => {
                // 메인으로 이동
                console.log(response);
            })
            .catch(error => {
                if (error?.response?.status === 401) {
                    //회원가입으로 이동
                    console.log(error);
                }
            });
    }

    const loginKakao = () => {
        //카카오 로그인 axios 호출

        const baseUrl = `${process.env.REACT_APP_API_ROOT}`

        axios.get(`${baseUrl}/oauth2/authorization/kakao`)
            .then((response: any) => {
                // 메인으로 이동
                console.log(response);

                navigate(ROUTE_GOAL);

            })
            .catch((error: any) => {
                if (error.response?.status === 401) {
                    //회원가입으로 이동
                    console.log(error);

                    navigate(ROUTE_SIGN_UP);
                }
            });
    }

    const loginNaver = () => {
        //네이버 로그인 axios 호출

        const baseUrl = `${process.env.REACT_APP_API_ROOT}`

        axios.get(`${baseUrl}/oauth2/authorization/naver`)
            .then((response: any) => {
                // 메인으로 이동
                console.log(response);

                navigate(ROUTE_GOAL);

            })
            .catch((error: any) => {
                if (error.response?.status === 401) {
                    //회원가입으로 이동
                    console.log(error);

                    navigate(ROUTE_SIGN_UP);
                }
            });
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