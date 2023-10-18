import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const WriteGoalContainer = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        저장
      </Button>
      <Editor
        initialValue=''
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
      />
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 100vh;
`;
