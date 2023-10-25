import { useState } from 'react';

import styled from 'styled-components';

import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditerBox, StyledInput } from 'components';

export const WriteGoalContainer = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string | undefined>('');

  const postExcution = () => {
    console.log(title);
    console.log(description);

    // navigate(-1);
  };
  const cancelExcution = () => {
    navigate(-1);
  };

  return (
    <Wrap>
      <Space>
        <Button onClick={postExcution}>저장</Button>
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
