import { Avatar } from "antd"
import { Header } from "antd/es/layout/layout"
import { useNavigate } from "react-router";
import { ROUTE_FEED, ROUTE_GOAL, ROUTE_SIGN_UP } from "routes/const";
import styled from 'styled-components';
import { ROUTE_SIGN_IN } from "routes/const";

export const InfoHeader = () => {

    const navigate = useNavigate();

    return (
        <>
            <StyledInfoHeader>
                <div
                    className="header-logo">
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
                </StyledSignContainer>
            </StyledInfoHeader>
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