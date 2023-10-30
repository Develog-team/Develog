import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"

export const NotFound = () => {
    return (
        <>
            <Layout>
                <div>
                    {/* Header 부분 */}
                </div>
                <Content>
                    <div>
                        <h2>죄송합니다. <br />현재 찾을 수 없는 페이지를 요청하셨습니다.</h2>
                        <br /><br />
                        <p>존재하지 않는 주소를 입력하셨거나,</p>
                        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
                        <p>문의사항은 관리자에게 연락 바랍니다. </p>
                        <br />
                        {/* <Button onClick={() => history.replace(ROUTE_DASH_BOARD)}>홈으로</Button> */}
                    </div>
                </Content>
            </Layout>
        </>
    )
}