import { useNavigate } from "react-router-dom";
import { ROUTE_SIGN_UP } from "routes/const";
import styled from "styled-components"

export const InfoContent01 = () => {

    const navigate = useNavigate();

    return (
        <StyledInfoContainer>
            <StyledCont>
                <h1>나와 당신의 개발로그</h1>
                <h2>DEVELOG</h2>
            </StyledCont>
            <StyledCont2>
                <StartButton
                    onClick={() => navigate(ROUTE_SIGN_UP)}
                    aria-hidden="true"
                >
                    <span>디벨로그 시작하기</span>
                </StartButton>
            </StyledCont2>
        </StyledInfoContainer>
    )
}

const StyledInfoContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
`

const StyledCont = styled.div`
    padding: 15rem 0px 0px 10rem;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`

const StyledCont2 = styled.div`
    margin-top: 3rem;
    margin-left: 70%;
`

const StartButton = styled.div`
    padding: 5px;
    border: 2px solid #9672d965;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor: pointer;
    &:hover {
        background-color: #9672d9ed;
        color: white;
    }
`