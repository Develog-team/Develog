import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { AllFeedContainer, MyFeedContainer, ScrapFeedContainer, SubFeedContainer } from "containers";
import { useState } from "react";

const Feed = () => {

    const [activeKey, setActiveKey] = useState<string>();

    const changeTab = (key: string) => {
        setActiveKey(key);
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
        </>
    )
}

export default Feed;