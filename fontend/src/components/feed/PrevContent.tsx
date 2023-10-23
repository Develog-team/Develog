import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { feedPrev } from "modules/feed";
import styled from "styled-components";

interface PrevContentProps {
    data: feedPrev;
}

export const PrevContent = (props: PrevContentProps) => {
    const { data } = props;

    return (
        <StyledFeedListCont
            onClick={() => console.log('click')}
        > 
            <StyledAvatar>
                {
                    data?.user?.profPath ? (
                        <Avatar size={60} src={data?.user?.profPath} />
                    ) : (
                        <Avatar size={60} icon={<UserOutlined />} />
                    )
                }
            </StyledAvatar>
            <div>
                <div>
                    <StyledNick>
                        {data?.user.nickname}
                    </StyledNick>
                    <StyledDate>
                        {data?.regDt}
                    </StyledDate>
                </div>
                <StyledContData>
                    <span>
                        {data.contents.content}
                    </span>
                    <span>
                        {data.contents.url}
                    </span>
                </StyledContData>
            </div>
        </StyledFeedListCont>
    )
}

const StyledFeedListCont = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
`

const StyledNick = styled.p`
    font-size: 1rem;
    margin: 0px 0px 3px 0px;
    font-weight: 600;
`

const StyledDate = styled.p`
    font-size: 0.75rem;
    margin: 0px;
    color: gray;
`

const StyledAvatar = styled.div`
    margin-right: 15px;
`

const StyledContData = styled.div`
    margin-top: 10px;
`
