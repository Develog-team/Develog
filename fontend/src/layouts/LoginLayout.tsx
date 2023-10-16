import { Avatar, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

export const LoginLayout = () => {
    return (
        <Layout className="full-view">
            <SignHeader>
                <Avatar size="small" />
                <span style={{ marginLeft: 10 }}>
                    디벨로그
                </span>
            </SignHeader>
            <Layout className="sign-main">
                <div />
                <Content className="sign-cont">
                    <Outlet />
                </Content>
                <div />
            </Layout>
        </Layout>
    )
}

const SignHeader = styled.div`
    display: flex;
    justify-content: left;
    margin: 2rem 0px 0px 5rem;
`