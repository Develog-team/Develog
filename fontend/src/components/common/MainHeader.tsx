import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_FEED, ROUTE_GOAL, ROUTE_INFO, ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "routes/const";
import styled from "styled-components";

export const MainHeader = () => {

    const [token, setToken] = useState<string | null>();
    const [profile, setProfile] = useState<string | null>();
    const [name, setName] = useState<string | null>();

    useEffect(() => {
        setToken(sessionStorage?.getItem("accessToken"));
        setProfile(sessionStorage?.getItem("picture"));
        setName(sessionStorage?.getItem("name"));
    }, [])

    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("picture");
        navigate(ROUTE_INFO, { replace: true });
    }

    return (
        <>
            <StyledInfoHeader>
                <div
                    className="header-logo"
                    aria-hidden="true"
                    onClick={() => navigate(ROUTE_INFO)}>
                    <Avatar size="small" />
                    <span style={{ marginLeft: 10 }}>
                        디벨로그
                    </span>
                </div>
                <div
                    className="header-menu">
                    <span />
                    <div
                        className="nav-item"
                        aria-hidden="true"
                        onClick={() => navigate(ROUTE_GOAL)}
                    >
                        목표
                    </div>
                    <div
                        className="nav-item">
                        옵저빙
                    </div>
                    <div
                        className="nav-item"
                        aria-hidden="true"
                        onClick={() => navigate(ROUTE_FEED)}
                    >
                        피드
                    </div>
                    <span />
                </div>
                {
                    token ? (
                        <>
                            <StyledSignContainer>
                                <StyledSignLabel
                                    aria-hidden="true"
                                >
                                    {
                                        profile ?
                                            (<Avatar size="small" src={profile} />)
                                            : (<Avatar size="small" icon={<UserOutlined />} />)
                                    }
                                    <span style={{ marginLeft: 10 }}>
                                        {name}
                                    </span>
                                </StyledSignLabel>
                                <StyledSignLabel
                                    onClick={() => handleLogout()}
                                    aria-hidden="true"
                                >
                                    로그아웃
                                </StyledSignLabel>
                            </StyledSignContainer>
                        </>
                    ) :
                        (
                            <>
                                <StyledSignContainer>
                                    <StyledSignLabel
                                        onClick={() => navigate(ROUTE_SIGN_IN)}
                                        aria-hidden="true"
                                    >
                                        로그인
                                    </StyledSignLabel>
                                    <StyledSignLabel
                                        onClick={() => navigate(ROUTE_SIGN_UP)}
                                        aria-hidden="true"
                                    >
                                        회원가입
                                    </StyledSignLabel>
                                </StyledSignContainer >
                            </>
                        )
                }
            </StyledInfoHeader >
        </>
    )
}

const StyledInfoHeader = styled(Header)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    height: 3.6rem;
`

const StyledSignContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0px 1rem;
    width: 20%;
`

const StyledSignLabel = styled.div`
    font-size: 0.8rem;
    cursor: pointer;
`