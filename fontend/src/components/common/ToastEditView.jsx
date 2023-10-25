import React, { useRef } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { theme } from 'antd';

//에디터용 css 파일
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

// 코드 구문 강조 모든 리스트 파일
import codeSyntax from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

type EditorProps = {
  value: string | undefined,
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}
  
type ViewerProps = Pick<EditorProps, 'value'>



export const ViewerBox = ({value} : ViewerProps) => {
  const {token} = theme.useToken();
  return (
    <StyledBox font={token.fontFamily} fontSize={token.fontSize}>
      <Viewer
        initialValue={value}
        plugins={[codeSyntax]}
      />
    </StyledBox>
  )
}

export const EditerBox = ({ value, setValue }: EditorProps) => {
  const editorRef = useRef(null);
  const markdownContent = editorRef.current?.getInstance().getMarkdown();
  const {token} = theme.useToken();
  return (
    <StyledBox font={token.fontFamily} fontSize={token.fontSize}>
      <Editor
        initialValue={value}
        ref={editorRef}
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
        onChange={() => setValue(markdownContent)}
        // 위지윅 불필요
        hideModeSwitch={true}
        plugins={[codeSyntax]}
      />
    </StyledBox>
  );
};
const StyledBox = styled.div`
  .toastui-editor-contents p,
  .ProseMirror,
  .toastui-editor-md-preview,
  code,
  .toastui-editor-pseudo-clipboard{
    font-size:${({fontSize}) => fontSize}px;
  }
  .toastui-editor-contents p,
  .ProseMirror,
  .toastui-editor-md-preview,
  code,
  .toastui-editor-pseudo-clipboard,
  .toastui-editor-popup-body,
  .toastui-editor-ok-button,
  .toastui-editor-close-button, .toastui-editor-file-select-button,
  .toastui-editor-defaultUI-toolbar,
  .toastui-editor-file-name,
  #toastuiAltTextInput {
    font-family: ${({font}) => font};
    border-radius: 5px;
  }

`;