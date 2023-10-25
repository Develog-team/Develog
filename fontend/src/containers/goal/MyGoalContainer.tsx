import { Button, Divider, Modal, Space, Tag, message } from 'antd';
import { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableStateSnapshot,
  DropResult,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { StyledInput, StyledTextarea } from 'components';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
// ----------------------------------------------------------------------------------

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
        width: '32%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
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

const CreateGoalModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [createGoalTitle, setCreateGoalTitle] = useState<string>('');
  const [createGoalDesc, setCreateGoalDesc] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  //임시 구현용
  const isSuccessGoal = true;

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
    setIsOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title='목표 생성'
        open={isOpen}
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
    </>
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //모달 오픈
  const showModal = () => {
    setIsModalOpen(true);
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
    <div style={{ minHeight: 350 }}>
      <Space>
        <h2>목표 칸반보드</h2>
        <Button onClick={showModal}>목표 작성</Button>
        <CreateGoalModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </Space>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        ></div>
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
    </div>
  );
};

// ----------------------------------------------------------------------------------

export const MyGoalContainer = () => {
  const params = useParams();
  return <>{!params.goalId ? <KanbanBoardWrapper /> : <Outlet />}</>;
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
