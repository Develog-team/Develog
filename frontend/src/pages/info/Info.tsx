import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { MainHeader } from "components";
import { InfoContainer } from "containers";

const Info = () => {

    return (
        <>
            <Layout
                className="fullLayout">
                <MainHeader />
                <Content>
                    <InfoContainer />
                </Content>
            </Layout>
        </>
    )
}
export default Info;