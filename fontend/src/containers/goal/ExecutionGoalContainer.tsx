import { Button, Drawer, Space } from 'antd';
import { ContainerBox } from 'components';
import { BeforePageBtn } from 'components/common/BeforePageBtn';
import { useState } from 'react';

const data = {
  title: '기록 제목',
  date: '2023-02-01',
  description: '기록 내용',
};

const Main = () => {
  const [retrospectopen, setRetrospectOpen] = useState(false);

  const openRetrospect = () => {
    setRetrospectOpen(true);
  };

  const closeRetrospect = () => {
    setRetrospectOpen(false);
  };
  return (
    <>
      <div
        style={{
          margin: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Space>
          <Button onClick={openRetrospect}>회고</Button>
        </Space>
        <Space>
          <Button>수정</Button>
          <Button danger>삭제</Button>
        </Space>
      </div>
      <div>{data.date}</div>
      <h2>{data.title}</h2>

      <div>{data.description}</div>
      <Drawer
        width={720}
        title='회고'
        placement='right'
        onClose={closeRetrospect}
        open={retrospectopen}
        extra={
          <Space>
            <Button>수정</Button>
            <Button danger>삭제</Button>
          </Space>
        }
      >
        <p>내용</p>
      </Drawer>
    </>
  );
};
export const ExecutionGoalContainer = () => {
  return (
    <ContainerBox $outline='shadow'>
      <BeforePageBtn />
      <Main />
    </ContainerBox>
  );
};
