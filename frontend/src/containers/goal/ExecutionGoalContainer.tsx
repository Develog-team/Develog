import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { ViewerBox } from 'components';
import { ROUTE_GOAL_WRITE, ROUTE_GOAL_REWRITE } from 'routes/const';

const data = {
  title: '기록 제목',
  date: '2023-02-01',
  description:
    '테스트\n ```java \n public class GoalController { \n\tprivate final GoalService goalService; \n\t@PostMapping() \n\tpublic Long created(GoalDTO goalDTO){ \n\t\treturn goalService.create(goalDTO);\n\t}\n\n\t@GetMapping()\n\tpublic List<GoalDTO> findList(){\n\t\treturn goalService.findByUser();\n\t}\n}\n```\n테스트',
  retrospect:
    '테스트\n ```java \n public class GoalController { \n\tprivate final GoalService goalService; \n\t@PostMapping() \n\tpublic Long created(GoalDTO goalDTO){ \n\t\treturn goalService.create(goalDTO);\n\t}\n\n\t@GetMapping()\n\tpublic List<GoalDTO> findList(){\n\t\treturn goalService.findByUser();\n\t}\n}\n```\n테스트',
};
// const data = {
//   title: '기록 제목',
//   date: '2023-02-01',
//   description:
//     '테스트\n ```java \n public class GoalController { \n\tprivate final GoalService goalService; \n\t@PostMapping() \n\tpublic Long created(GoalDTO goalDTO){ \n\t\treturn goalService.create(goalDTO);\n\t}\n\n\t@GetMapping()\n\tpublic List<GoalDTO> findList(){\n\t\treturn goalService.findByUser();\n\t}\n}\n```\n테스트',
//   retrospect: '',
// };

const Main = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/').splice(1);
  const nvaigatePath = `${pathnameArr[0]}/${pathnameArr[1]}/${pathnameArr[2]}`;
  const lastPath = pathnameArr[pathnameArr.length - 1];

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
          {data.retrospect ? (
            <Button onClick={openRetrospect}>회고</Button>
          ) : (
            <Button onClick={() => navigate(ROUTE_GOAL_WRITE)}>
              회고 작성
            </Button>
          )}
        </Space>
        <Space>
          <Button
            onClick={() =>
              navigate(
                `/${nvaigatePath}/${ROUTE_GOAL_REWRITE}?executionId=${lastPath}`
              )
            }
          >
            수정
          </Button>
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
            <Button onClick={() => navigate(ROUTE_GOAL_REWRITE)}>수정</Button>
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
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes(ROUTE_GOAL_WRITE) ||
      pathname.includes(ROUTE_GOAL_REWRITE) ? (
        <Outlet />
      ) : (
        <Main />
      )}
    </>
  );
};
