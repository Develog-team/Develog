import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { userPrev } from "modules/feed";

interface PrevUserProps {
    data: userPrev;
}
export const PrevUser = (props: PrevUserProps) => {
    const { data } = props;

    return (
        <>
                <div
                    className="user-prev-container">
                    <div
                        className="flex-center"
                    >
                        <div>
                            {
                                data?.profPath ? (
                                    <Avatar size={60} src={data?.profPath} />
                                ) : (
                                    <Avatar size={60} icon={<UserOutlined />} />
                                )
                            }
                            <div
                            style={{marginTop:10}}>
                                {data.nickname}
                            </div>
                            <div
                                style={{
                                    fontSize: '0.7rem',
                                    marginTop: 20
                                }}
                            >
                                {data.intro}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}