import { Menu } from "antd";
import { Header } from "antd/es/layout/layout"
import 'assets/css/layout.css';

export const MainHeader = () => {
    return (
        <Header
            className="main-header">
            <Menu
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
        </Header>
    )
}