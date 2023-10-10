import { LeftOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, MenuProps, Space, Tag } from 'antd';
import { ContainerBox } from 'components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

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

const RecordList = ({ data }: { data: RecordDataProps }) => {
  return (
    <StyledRecordList>
      <Divider orientation='left' orientationMargin='0' plain>
        {data.date}
      </Divider>
      <div className='box'>
        <h4>{data.recordTitle}</h4>
        <div className={'description'}>{data.recordDesc}</div>
      </div>
    </StyledRecordList>
  );
};

//기록 전체
const RecordBox = () => {
  return (
    <RecordWrapper>
      <div className='header'>
        <h2>기록</h2>
        <Button>작성</Button>
      </div>
      <div>
        {data.record.map((list) => (
          <RecordList data={list} key={list.recordId} />
        ))}
      </div>
    </RecordWrapper>
  );
};

export const GoalsubContainer = () => {
  // const params = useParams();
  const navigate = useNavigate();

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

  return (
    <ContainerBox $outline='shadow'>
      <Button
        shape='circle'
        icon={<LeftOutlined />}
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <h1>{data.title}</h1>
      <div>{data.description}</div>
      <SettingWrap>
        <Dropdown menu={{ items }} placement='bottom'>
          <Tag style={{ cursor: 'pointer' }}>{data.status}</Tag>
        </Dropdown>
        <Space>
          <Button>수정</Button>
          <Button danger>삭제</Button>
        </Space>
      </SettingWrap>
      <Divider dashed />
      <RecordBox />
    </ContainerBox>
  );
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
