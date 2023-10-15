import {
  Button,
  Divider,
  Image,
  Modal,
  Space,
  Tabs,
  Tag,
  Tooltip,
  message,
} from 'antd';
import { useState } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import {
  DragDropContext,
  Draggable,
  DraggableStateSnapshot,
  DropResult,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { ContainerBox } from 'components';
import { StyledInput, StyledTextarea } from 'components/common/StyledInput';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
// ----------------------------------------------------------------------------------
//탭 타입
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

//칸반에 들어가는 목표 리스트 타입
type KanbanListDataProps = {
  dataId: number;
  title: string;
  description: string;
  url: string;
  status: string;
};

//칸반 리스트
const kanbanList = ['시작 전', '시작', '완료'];

// ----------------------------------------------------------------------------------
// 캘린더 차트
const CalendarChartWrapper = () => {
  const data = [
    {
      value: 348,
      day: '2023-08-24',
    },
  ];
  return (
    <ContainerBox height='200px' $outline='shadow'>
      <ResponsiveCalendar
        data={data}
        from='2023-01-01'
        to='2023-12-31'
        emptyColor='#eeeeee'
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor='#ffffff'
        dayBorderWidth={2}
        dayBorderColor='#ffffff'
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </ContainerBox>
  );
};

// 칸반 리스트
const KanbanList = ({
  provided,
  data,
  title,
}: {
  provided: DroppableProvided;
  data: KanbanListDataProps[];
  title: string;
}) => {
  const filteredData = data.filter((list) => list.status === title);

  const navigate = useNavigate();

  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      style={{
        flexGrow: 1,
        flexBasis: 210,
        maxWidth: '210px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <Space>
        <Tag>{title}</Tag>
        <div className='listLength'>{filteredData.length}</div>
      </Space>
      {data.map((list, index) => {
        if (list.status === title) {
          return (
            <Draggable draggableId={`${index}`} index={index} key={index}>
              {(provided, snapshot) => (
                <StyledKanbanList
                  $snapshot={snapshot}
                  ref={provided.innerRef}
                  role='presentation'
                  onClick={() => navigate(`${list.dataId}`)}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    ...provided.draggableProps.style,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 5,
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      wordBreak: 'break-all',
                    }}
                  >
                    {list.title}
                  </div>
                  <div
                    style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      wordBreak: 'break-all',
                    }}
                  >
                    {list.description}
                  </div>
                </StyledKanbanList>
              )}
            </Draggable>
          );
        }
      })}
      {provided.placeholder}
    </div>
  );
};
//칸반 전체
const KanbanBoardWrapper = () => {
  //임시 데이터
  const data = [
    {
      dataId: 1,
      title: '1번11111111111111111111111111111111111111111111111',
      description: '내용11111111111111111111111111111111111111111111111111111',
      url: '/1',
      status: '시작',
    },
    {
      dataId: 2,
      title: '2번',
      description: '내용',
      url: '/2',
      status: '시작',
    },
    {
      dataId: 3,
      title: '3번',
      description: '내용',
      url: '/3',
      status: '완료',
    },
    {
      dataId: 4,
      title: '4번',
      description: '내용',
      url: '/4',
      status: '시작 전',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [createGoalTitle, setCreateGoalTitle] = useState('');
  const [createGoalDesc, setCreateGoalDesc] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  //임시 구현용
  const isSuccessGoal = true;

  //모달 오픈
  const showModal = () => {
    setIsModalOpen(true);
  };
  //목표 생성
  const createGoal = () => {
    //클릭 시 로딩
    setConfirmLoading(true);
    // api 호출

    //결과
    if (!isSuccessGoal) {
      //실패 => 임시로 구현
      setTimeout(() => {
        //메세지
        messageApi.open({
          type: 'error',
          content: '생성에 실패하였습니다. 다시 시도하여 주세요',
        });
        //로딩 끝
        setConfirmLoading(false);
      }, 2000);
    } else {
      // 성공 => 임시로 로딩 구현
      setTimeout(() => {
        //메세지
        messageApi.open({
          type: 'success',
          content: '생성에 성공하였습니다',
        });
        //로딩 끝, 모달 종료
        setConfirmLoading(false);
        closeModal();
      }, 2000);
    }
  };
  //모달 접기
  const closeModal = () => {
    //작성한 내용 초기화
    setCreateGoalTitle('');
    setCreateGoalDesc('');
    //모달 접기
    setIsModalOpen(false);
  };

  // 드래그 시 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    //destination이 undefined인 경우의 오류 제거
    if (!destination) return;

    //현재 드래그한 리스트
    const dragedList = data[source.index];

    // 드래그를 시작한 데이터 삭제
    data.splice(source.index, 1);

    // 드래그를 끝낸 자리에 삭제한 데이터 추가, 스테이터스 변화
    data.splice(destination.index, 0, {
      ...dragedList,
      status: destination.droppableId,
    });
  };

  return (
    <ContainerBox $outline='shadow'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>목표 칸반보드</h2>
          {contextHolder}
          <Button onClick={showModal}>목표 작성</Button>
          <Modal
            title='목표 생성'
            open={isModalOpen}
            onOk={createGoal}
            onCancel={closeModal}
            confirmLoading={confirmLoading}
          >
            <StyledInput
              id='title'
              placeholder='제목'
              value={createGoalTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCreateGoalTitle(e.target.value)
              }
            />
            <Divider />
            <StyledTextarea
              id='discription'
              value={createGoalDesc}
              onChange={(e) => setCreateGoalDesc(e.target.value)}
              placeholder='내용 작성'
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Modal>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {kanbanList.map((kanbanlList) => {
            return (
              <Droppable key={kanbanlList} droppableId={kanbanlList}>
                {(provided) => (
                  <KanbanList
                    provided={provided}
                    data={data}
                    title={kanbanlList}
                  />
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </ContainerBox>
  );
};

// ----------------------------------------------------------------------------------
//좌측 프로필
const ProfileWrap = () => {
  // 임시 데이터
  const urlList = [
    {
      urlId: 1,
      url: 'https://github.com/royud',
    },
    {
      urlId: 2,
      url: 'https://www.youtube.com/channel/UCt0kVhTCg2ypYXaMxhbrpCQ',
    },
    {
      urlId: 3,
      url: 'https://velog.io/@ljj9535',
    },
    {
      urlId: 4,
      url: 'https://www.pillnuts.store/',
    },
  ];

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 15, width: 250 }}
    >
      <Space
        className='mainProfileWrap'
        size='middle'
        direction='vertical'
        align='center'
      >
        <ContainerBox
          width='250px'
          $outline='shadow'
          $padding='false'
          anotherStyle={{
            aspectRatio: '1/1',
            borderRadius: '50%',
            background: 'gray',
            overflow: 'hidden',
          }}
        >
          <Image
            width='100%'
            height='100%'
            src='error'
            fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=='
          />
        </ContainerBox>
        <div className='profileNickname'>닉네임</div>
      </Space>
      <Space split={'•'}>
        <div>2 observer</div>
        <div>2 observing</div>
      </Space>
      <Space wrap>
        {urlList.map((list) => (
          <Tooltip
            key={list.urlId}
            arrow={false}
            placement='bottom'
            title={list.url}
          >
            <Button
              shape='circle'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => window.open(list.url)}
            >
              <img
                src={`http://www.google.com/s2/favicons?domain=${list.url}`}
                alt=''
              />
            </Button>
          </Tooltip>
        ))}
      </Space>
      <div>자기소개</div>
    </div>
  );
};
//우측 목표
const GoalMain = () => {
  const params = useParams();
  return (
    <Space direction='vertical' size='middle' style={{ width: 700 }}>
      <CalendarChartWrapper />
      {params.goalId ? <Outlet /> : <KanbanBoardWrapper />}
    </Space>
  );
};
// ----------------------------------------------------------------------------------
//목표 창
const MyGoal = () => {
  return (
    <div
      style={{
        marginTop: 56,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ProfileWrap />
      <GoalMain />
    </div>
  );
};

//탭 관리
const GoalTab = () => {
  //기본 탭
  const defaultPanes = [
    {
      label: '목표 기록',
      key: '1',
      children: <MyGoal />,
      closable: false,
    },
    {
      label: '옵저버 창',
      key: '2',
      children: '옵저버 창',
      closable: false,
    },
  ];

  //현재 활성화된 탭 키 상태
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  //현재 저장되어있는 탭 리스트 상태
  const [items, setItems] = useState(defaultPanes);

  // 배너 클릭 시 탭 변경
  const changeTab = (key: string) => {
    setActiveKey(key);
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
    <div style={{ margin: '56px 0' }}>
      <Tabs
        defaultActiveKey='1' //기본 탭
        centered // 중앙 정렬
        type='editable-card' // 수정이 가능한 카드 타입
        hideAdd // 추가 버튼 숨기기
        onChange={changeTab}
        activeKey={activeKey}
        onEdit={removeTab}
        items={items}
      />
    </div>
  );
};

export const GoalContainer = () => {
  return <GoalTab />;
};

const StyledKanbanList = styled.div<{ $snapshot: DraggableStateSnapshot }>`
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: ${({ $snapshot }) =>
    $snapshot.isDragging ? 'none' : '2px 2px 4px gray'};
  padding: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eeeeee;
  }
`;
