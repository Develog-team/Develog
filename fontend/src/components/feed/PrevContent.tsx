import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { feedPrev } from "modules/feed";
import 'assets/css/feed/feedPrev.css';

interface PrevContentProps {
    data: feedPrev;
}

export const PrevContent = (props: PrevContentProps) => {
    const { data } = props;

    return (
        <div
            className="feed-prev-container">
            <div
                className="avatar">
                {
                    data?.user?.profPath ? (
                        <Avatar size={60} src={data?.user?.profPath} />
                    ) : (
                        <Avatar size={60} icon={<UserOutlined />} />
                    )
                }
            </div>
            <div>
                <div>
                    <p className="nick">
                        {data?.user.nickname}
                    </p>
                    <p className="date" >
                        {data?.regDt}
                    </p>
                </div>
                <div className="cont">
                    <span>
                        {data.contents.content}
                    </span>
                    <span>
                        {data.contents.url}
                    </span>
                </div>
            </div>
        </div>
    )
}