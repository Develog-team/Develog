import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Button, Space, Modal, Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { EditerBox, StyledInput } from 'components';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const WriteGoalContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [executionId, setExecutionId] = useState<string | null>('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    params.executionId
      ? setExecutionId(params.executionId) // 회고 수정 시
      : setExecutionId(searchParams.get('executionId')); //목표 실행기록 수정 시
  }, [params]);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [modal, contextHolder] = Modal.useModal();
  const [postLoading, setPostLoading] = useState<boolean>(false);
  // 메세지
  const [messageApi, messageContextHolder] = message.useMessage();

  //로딩 성공 및 실패 임시 구현
  const postSuccess = false;

  const postExcution = () => {
    // 로딩 시작
    setPostLoading(true);
    console.log(title);
    console.log(description);

    setTimeout(() => {
      setPostLoading(false);
      if (postSuccess) {
        //성공 시
        navigate(-1);
      } else {
        // 실패 시
        messageApi.open({
          type: 'error',
          content: '실패했습니다.',
        });
      }
    }, 3000);
  };
  const cancelExcution = () => {
    modal.confirm({
      content: '취소하시겠습니까?',
      okText: '예',
      cancelText: '아니오',
      onOk: () => {
        navigate(-1);
      },
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <OkBtn />
        </>
      ),
    });
  };
  console.log(executionId);
  // --------------------------------------------------------------------------

  return (
    <Wrap>
      {messageContextHolder}
      <Space>
        <Button onClick={postExcution}>
          저장
          {postLoading && <Spin indicator={antIcon} />}
        </Button>
        <Button onClick={cancelExcution} danger>
          취소
        </Button>
      </Space>

      <div style={{ margin: '10px 0' }}>
        <StyledInput
          id='title'
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder='제목'
        />
      </div>
      <EditerBox value={description} setValue={setDescription} />
      {contextHolder}
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 100vh;
  .toastui-editor-md-container {
    background-color: white;
  }
  .toastui-editor-contents p,
  .toastui-editor-contents h6 {
    font-size: 15px;
  }
`;
