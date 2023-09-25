import { Avatar, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import 'assets/css/signLayout.css';

export const LoginLayout = () => {
    return (
        <Layout className="full-view">
            <div
                className="logo">
                <Avatar size="small" />
                <span style={{ marginLeft: 10 }}>
                    디벨로그
                </span>
            </div>
            <Layout className="main">
                <div />
                <Content className="content">
                    <Outlet />
                </Content>
                <div />
            </Layout>
        </Layout>
    )
}