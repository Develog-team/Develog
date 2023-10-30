import { PlusOutlined } from "@ant-design/icons";
import { FloatButton, Tabs, Tooltip } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { FeedAddModal } from "components";
import { AllFeedContainer, MyFeedContainer, ScrapFeedContainer, SubFeedContainer } from "containers";
import { useState } from "react";

const Feed = () => {
    // const modalRef = useRef<HTMLDivElement>(null);
    //tab 이동 key
    const [activeKey, setActiveKey] = useState<string>();
    //modal 띄우기 여부
    const [addFeedShow, setAddFeedShow] = useState<boolean>(false);

    const changeTab = (key: string) => {
        setActiveKey(key);
    }

    const handleShareClick = () => {
        setAddFeedShow(true);
    }

    return (
        <>
            <Tabs
                type="card"
                activeKey={activeKey}
                tabPosition={'left'}
                onChange={changeTab}
            >
                <TabPane
                    tab='전체'
                    key="all"
                    style={{ padding: '2px' }}>
                    <AllFeedContainer />
                </TabPane>
                <TabPane
                    tab='스크랩'
                    key="scrap"
                    style={{ padding: '2px' }}>
                    <ScrapFeedContainer />
                </TabPane>
                <TabPane
                    tab='구독'
                    key="sub"
                    style={{ padding: '2px' }}>
                    <SubFeedContainer />
                </TabPane>
                <TabPane
                    tab='내글'
                    key="my"
                    style={{ padding: '2px' }}>
                    <MyFeedContainer />
                </TabPane>
            </Tabs>
            <Tooltip
                placement="topRight"
                title={'새 글을 공유하세요!'}
                color="#9672d9"
            >
                <FloatButton
                    shape="circle"
                    icon={<PlusOutlined />}
                    type="primary"
                    onClick={() => handleShareClick()}
                />
            </Tooltip>
            {
                addFeedShow && (
                    <FeedAddModal
                        open={addFeedShow}
                        closeModal={()=>setAddFeedShow(false)}
                    />
                )
            }
        </>
    )
}

export default Feed;