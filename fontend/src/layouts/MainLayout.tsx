import { Layout } from "antd"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {

    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}