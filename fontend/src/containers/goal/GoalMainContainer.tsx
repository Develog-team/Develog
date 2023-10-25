import { Tabs } from 'antd';
import { DefaultGoalPageBox } from 'components/goal';
import { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  ROUTE_GOAL,
  ROUTE_GOAL_MY,
  ROUTE_GOAL_WRITE,
  ROUTE_OBSERVE,
} from 'routes/const';
import styled from 'styled-components';

//탭 타입
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

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

const GoalMainContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnameArr = pathname.split('/').filter((list) => list !== '');

  useEffect(() => {
    // goals로만 입장 시 /goals/my로 이동
    if (pathnameArr.length === 1) navigate(ROUTE_GOAL_MY);
  }, []);

  //기본 탭
  const defaultPanes = [
    {
      label: '목표 기록',
      key: ROUTE_GOAL_MY,
      closable: false,
    },
    {
      label: '옵저버 창',
      key: ROUTE_OBSERVE,
      closable: false,
    },
  ];

  //현재 활성화된 탭 키 상태
  const [activeKey, setActiveKey] = useState(pathnameArr[1]);
  //현재 저장되어있는 탭 리스트 상태
  const [items, setItems] = useState(defaultPanes);

  // 배너 클릭 시 탭 변경
  const changeTab = (key: string) => {
    setActiveKey(key);
    navigate(`/${ROUTE_GOAL}/${key}`);
  };

  //탭 삭제
  const removeTab = (targetKey: TargetKey) => {
    //삭제 탭 키 찾기
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);

    //찾은 탭 키를 소유한 탭을 필터링
    const newPanes = items.filter((pane) => pane.key !== targetKey);

    //현재 활성화 된 탭 창과 삭제 창이 같을 경우 탭 창 변경
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }

    //변경된 리스트 적용
    setItems(newPanes);
  };

  return (
    <Wrap>
      <Tabs
        defaultActiveKey={pathnameArr[1]} //기본 탭
        centered // 중앙 정렬
        type='editable-card' // 수정이 가능한 카드 타입
        hideAdd // 추가 버튼 숨기기
        onChange={changeTab}
        activeKey={activeKey}
        onEdit={removeTab}
        items={items}
      />
      {/* 옵저빙 */}
      {pathname.includes(ROUTE_OBSERVE) && (
        <DefaultGoalPageBox>
          <Outlet />
        </DefaultGoalPageBox>
      )}
      {/* 목표 */}
      {!pathnameArr.includes(ROUTE_GOAL_WRITE) &&
        !pathnameArr.includes(ROUTE_OBSERVE) && (
          <DefaultGoalPageBox CalenderData={CalendarData}>
            <Outlet />
          </DefaultGoalPageBox>
        )}
      {/* 작성 */}
      {pathnameArr.includes(ROUTE_GOAL_WRITE) && <Outlet />}
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export default GoalMainContainer;
