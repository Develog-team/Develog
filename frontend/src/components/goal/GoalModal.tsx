import { useState } from 'react';
import { message, Modal, Divider } from 'antd';
import { StyledInput, StyledTextarea } from 'components';

type BooleanStateProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface GoalModalProps extends BooleanStateProps {
  title?: string | undefined;
  description?: string | undefined;
}

export const GoalModal = ({
  isOpen,
  setIsOpen,
  title,
  description,
}: GoalModalProps) => {
  //목표 내용 state
  const [GoalTitle, setGoalTitle] = useState<string | undefined>(title);
  const [GoalDesc, setGoalDesc] = useState<string | undefined>(description);
  //로딩
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  //임시 구현용
  const isSuccessGoal = true;

  // 메세지
  const [messageApi, contextHolder] = message.useMessage();

  //목표 생성
  const postGoal = () => {
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
    setGoalTitle(title);
    setGoalDesc(description);
    //모달 접기
    setIsOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title='목표 생성'
        open={isOpen}
        onOk={postGoal}
        onCancel={closeModal}
        confirmLoading={confirmLoading}
      >
        <StyledInput
          id='title'
          placeholder='제목'
          value={GoalTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGoalTitle(e.target.value)
          }
        />
        <Divider />
        <StyledTextarea
          id='discription'
          value={GoalDesc}
          onChange={(e) => setGoalDesc(e.target.value)}
          placeholder='내용 작성'
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Modal>
    </>
  );
};
