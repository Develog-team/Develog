import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { ViewerBox } from 'components';

const data = {
  title: '기록 제목',
  date: '2023-02-01',
  description:
    '테스트\n ```java \n public class GoalController { \n\tprivate final GoalService goalService; \n\t@PostMapping() \n\tpublic Long created(GoalDTO goalDTO){ \n\t\treturn goalService.create(goalDTO);\n\t}\n\n\t@GetMapping()\n\tpublic List<GoalDTO> findList(){\n\t\treturn goalService.findByUser();\n\t}\n}\n```\n테스트',
  retrospect:
    '테스트\n ```java \n public class GoalController { \n\tprivate final GoalService goalService; \n\t@PostMapping() \n\tpublic Long created(GoalDTO goalDTO){ \n\t\treturn goalService.create(goalDTO);\n\t}\n\n\t@GetMapping()\n\tpublic List<GoalDTO> findList(){\n\t\treturn goalService.findByUser();\n\t}\n}\n```\n테스트',
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
      <ViewerBox value={data.description} />
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
        <ViewerBox value={data.retrospect} />
      </Drawer>
    </div>
  );
};
export const ExecutionGoalContainer = () => {
  return <Main />;
};
