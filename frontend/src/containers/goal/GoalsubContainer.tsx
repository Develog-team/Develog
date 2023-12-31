import { Button, Divider, Dropdown, MenuProps, Space, Tag } from 'antd';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { GoalModal } from 'components/goal';
import { ROUTE_GOAL_WRITE, ROUTE_GOAL_REWRITE } from 'routes/const';
//타입
type RecordDataProps = {
  recordId: number;
  date: string;
  recordTitle: string;
  recordDesc: string;
};

//임시 데이터
const data = {
  title: '제목',
  description: '내용',
  status: '시작 전',
  record: [
    {
      recordId: 1,
      date: '2021/03/02',
      recordTitle:
        'ssㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ',
      recordDesc:
        'ssㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ',
    },
    {
      recordId: 2,
      date: '2021/03/02',
      recordTitle: 'ss',
      recordDesc: 'ss',
    },
  ],
};
// const data = {
//   title: '제목',
//   description: '내용',
//   status: '시작 전',
//   record: [],
// };

//메인 전체
const MainContainer = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Tag>{'시작 전'}</Tag>,
    },
    {
      key: '2',
      label: <Tag>{'진행 중'}</Tag>,
    },
    {
      key: '3',
      label: <Tag>{'완료'}</Tag>,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //모달 오픈
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <h1>{data.title}</h1>
      <div>{data.description}</div>
      <SettingWrap>
        <Dropdown menu={{ items }} placement='bottom'>
          <Tag style={{ cursor: 'pointer' }}>{data.status}</Tag>
        </Dropdown>
        <Space>
          <Button onClick={showModal}>수정</Button>
          <Button danger>삭제</Button>
          <GoalModal
            title={data.title}
            description={data.description}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        </Space>
      </SettingWrap>
    </>
  );
};
// ------------------------------------------------------------------------------
//기록 리스트
const RecordList = ({ data }: { data: RecordDataProps }) => {
  const navigate = useNavigate();
  return (
    <StyledRecordList>
      <Divider orientation='left' orientationMargin='0' plain>
        {data.date}
      </Divider>
      <div
        className='box'
        role='presentation'
        onClick={() => {
          navigate(`${data.recordId}`);
        }}
      >
        <h4>{data.recordTitle}</h4>
        <div className={'description'}>{data.recordDesc}</div>
      </div>
    </StyledRecordList>
  );
};
//기록 전체
const RecordContainer = () => {
  const navigate = useNavigate();
  return (
    <RecordWrapper>
      <div className='header'>
        <h2>기록</h2>
        <Button
          onClick={() => {
            navigate('write');
          }}
        >
          작성
        </Button>
      </div>
      <div
        style={{
          minHeight: 350,
        }}
      >
        {data.record.length !== 0 &&
          data.record.map((list, idx) => <RecordList data={list} key={idx} />)}
        {data.record.length === 0 && (
          <div
            style={{
              height: 350,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            목표를 실행하고 기록해 보세요!
          </div>
        )}
      </div>
    </RecordWrapper>
  );
};
// ------------------------------------------------------------------------------
export const GoalsubContainer = () => {
  const { pathname } = useLocation();
  const params = useParams();

  const containerSet = () => {
    if (
      params.executionId ||
      pathname.includes(ROUTE_GOAL_WRITE) ||
      pathname.includes(ROUTE_GOAL_REWRITE)
    ) {
      return <Outlet />;
    } else {
      return (
        <>
          <MainContainer />
          <Divider dashed />
          <RecordContainer />
        </>
      );
    }
  };

  return <>{containerSet()}</>;
};

const SettingWrap = styled.div`
  float: right;
  clear: both;
  margin: 20px auto;
`;
const RecordWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledRecordList = styled.div`
  .box {
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .box:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
  h4 {
    margin: 0 0 10px;
  }
  /* 말줄임 */
  .description,
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;
