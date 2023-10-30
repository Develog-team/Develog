import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"

export const FullScreenLayout = () => {
    return (
        <Layout
            style={{
                width:'100vw',
                minHeight:'100vh'
            }}>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )
}