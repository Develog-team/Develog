import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { MainFooter, MainHeader } from "components"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {

    return (
        <Layout
            style={{ width: '100vw', height: '100vh' }}>
            <MainHeader />
            <Content>
                <Outlet />
            </Content>
            <MainFooter />
        </Layout>
    )
}