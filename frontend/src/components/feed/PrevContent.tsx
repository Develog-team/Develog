import { MoreOutlined, ShareAltOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { feedPrev } from "modules/feed";
import { useNavigate } from "react-router-dom";
import { ROUTE_FEED_DETAIL_WITH_ID } from "routes/const";
import styled from "styled-components";
import { getDateNm } from "utils";

interface PrevContentProps {
    data: feedPrev;
    openMore: () => void;
    shareFeed: () => void;
}

export const PrevContent = (props: PrevContentProps) => {
    const { data, openMore, shareFeed} = props;

    const navigate = useNavigate();

    const handleGoDetail =(feedId:any) =>{
        navigate(ROUTE_FEED_DETAIL_WITH_ID(feedId));
    }

    return (
        <div>
            <StyledFeedListCont
                onClick={() => handleGoDetail(data.key)}
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
                <StyledFeedCont>
                    <StyledFeedHead>
                        <StyledNick>
                            {data?.user.nickname}
                        </StyledNick>
                    </StyledFeedHead>
                    <StyledDate>
                        {getDateNm('YMD_KOR', data?.regDt)}
                    </StyledDate>
                    <StyledContData>
                        <span>
                            {data.contents.content}
                        </span>
                        <span>
                            {data.contents.url}
                        </span>
                    </StyledContData>
                </StyledFeedCont>
            </StyledFeedListCont>
            <StyledFeedFooter>
                <Tooltip
                    placement="topRight"
                    title={'스크랩'}
                    color="#9672d9"
                >
                    <StyledSettingDiv>
                        <StarOutlined />
                    </StyledSettingDiv>
                </Tooltip>
                <Tooltip
                    placement="topRight"
                    title={'공유하기'}
                    color="#9672d9"
                >
                    <StyledSettingDiv
                        onClick={() => shareFeed()}>
                        <ShareAltOutlined />
                    </StyledSettingDiv>
                </Tooltip>
                <Tooltip
                    placement="topRight"
                    title={'더보기'}
                    color="#9672d9"
                >
                    <StyledSettingDiv
                        onClick={() => openMore()}
                    >
                        <MoreOutlined />
                    </StyledSettingDiv>
                </Tooltip>
            </StyledFeedFooter>
        </div>
    )
}

const StyledFeedListCont = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
`

const StyledFeedHead = styled.div`
    display: flex;
    justify-content: left;
`

const StyledFeedFooter = styled.div`
    display: flex;
    justify-content: right;
`

const StyledSettingDiv = styled.div`
    width: 1.5rem;
    cursor: pointer;
`

const StyledNick = styled.div`
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

const StyledFeedCont = styled.div`
    width: 95%;
`
const StyledContData = styled.div`
    margin-top: 10px;
`
