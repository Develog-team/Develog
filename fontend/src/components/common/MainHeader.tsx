import { UserOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { Header } from "antd/es/layout/layout"

export const MainHeader = () => {
    return (
        <Header
            className="main-header">
            <div
                className="header-logo">
                <Avatar size="small" />
                <span style={{marginLeft: 10}}>
                    디벨로그
                </span>
            </div>
            <div
                className="header-menu">
                <Menu
                    className="menu"
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={new Array(3).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </div>
            <div
                className="header-profile">
                <Avatar size="small" icon={<UserOutlined />} />
                <span style={{marginLeft: 10}}>
                    아이디
                </span>
            </div>
        </Header>
    )
}