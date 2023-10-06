import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styled from 'styled-components';

type defaultStyledTextType = {
  id: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
};

interface StyledInputProps extends defaultStyledTextType {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

interface StyledTextArea extends defaultStyledTextType {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  autoSize: {
    minRows: number;
    maxRows: number;
  };
}

// -------------------------------------------------------------------------------------------
export const StyledInput = ({
  id,
  placeholder,
  value,
  onChange,
}: StyledInputProps) => {
  return (
    <StyledInputWrap>
      <Input
        className='antdInput'
        id={id}
        value={value}
        onChange={onChange}
        required={true}
      />
      <label htmlFor={id}>{placeholder}</label>
    </StyledInputWrap>
  );
};

export const StyledTextarea = ({
  id,
  placeholder,
  value,
  onChange,
  autoSize,
}: StyledTextArea) => {
  return (
    <StyledInputWrap>
      <TextArea
        className='antdInput'
        id={id}
        value={value}
        onChange={onChange}
        autoSize={autoSize}
        required={true}
      />
      <label htmlFor={id}>{placeholder}</label>
    </StyledInputWrap>
  );
};
// --------------------------------------------------------------------
const StyledInputWrap = styled.div`
  position: relative;
  label {
    color: #d7d7d7;
    position: absolute;
    top: 5px;
    left: 10px;
    z-index: 1;
    cursor: text;
    transition: all 0.3s;
  }
  .antdInput:where(:focus, :valid) + label {
    color: #9672d9;
    transform: translateY(-15px) scale(75%);
    background-color: white;
  }
`;
