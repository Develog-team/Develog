import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { InfoHeader } from "components";
import { InfoContainer } from "containers";

const Info = () => {

    return (
        <>
            <Layout
                className="fullLayout">
                <InfoHeader />
                <Content>
                    <InfoContainer />
                </Content>
            </Layout>
        </>
    )
}
export default Info;