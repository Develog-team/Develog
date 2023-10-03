import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { MainHeader } from "components"
import { Outlet } from "react-router-dom"
import 'assets/css/mainLayout.css';

export const MainLayout = () => {

    return (
        <Layout
            className="fullLayout">
            <MainHeader />
            <Content
                className="mainContent">
                <Outlet />
            </Content>
            {/* <MainFooter /> */}
        </Layout>
    )
}