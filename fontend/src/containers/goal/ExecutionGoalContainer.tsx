import { Button, Drawer, Space } from 'antd';
import { DefaultGoalPageBox } from 'components/goal';
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
    <div
      style={{
        minHeight: 620,
      }}
    >
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
    </div>
  );
};
export const ExecutionGoalContainer = () => {
  //임시 데이터
  const CalendarData = [
    {
      date: '2023-01-01',
      goals: ['1번'],
    },
    {
      date: '2023-08-22',
      goals: ['1번', '2번'],
    },
    {
      date: '2023-08-23',
      goals: ['2번', '4번', '3번'],
    },
    {
      date: '2023-10-22',
      goals: ['1번', '2번'],
    },
    {
      date: '2023-12-31',
      goals: ['1번', '2번'],
    },
  ];
  return (
    <DefaultGoalPageBox data={CalendarData}>
      <Main />
    </DefaultGoalPageBox>
  );
};
