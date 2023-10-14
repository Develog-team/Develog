import { Avatar } from "antd"
import { Header } from "antd/es/layout/layout"

export const InfoHeader = () => {
    return (
        <>
            <Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    color: 'black',
                    width: '100%',
                    height: '3.5rem'
                }}>
                <div
                    className="header-logo">
                    <Avatar size="small" />
                    <span style={{ marginLeft: 10 }}>
                        디벨로그
                    </span>
                </div>
                <div>
                    <span>디벨로그</span>
                </div>
                <div>

                </div>
            </Header>
        </>
    )
}