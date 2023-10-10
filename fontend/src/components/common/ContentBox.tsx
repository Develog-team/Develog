import styled from 'styled-components';

//타입
//기본
interface defaultBoxProps {
  width?: string;
  height?: string;
  $padding?: 'true' | 'false';
  $outline?: 'line' | 'shadow' | 'both';
  anotherStyle?: any;
  children?: React.ReactNode;
}
//스타일에 필요없는 children 제거한 타입
type StyledBoxProps = Omit<defaultBoxProps, 'children'>;
// -----------------------------------------------------------------------------

//컨텐츠 박스 컴포넌트
export const ContainerBox = ({
  width = 'auto',
  height = 'auto',
  $padding = 'true',
  $outline,
  anotherStyle,
  children,
}: defaultBoxProps) => {
  return (
    <StyledBox
      width={width}
      height={height}
      $padding={$padding}
      $outline={$outline}
      style={anotherStyle}
    >
      {children}
    </StyledBox>
  );
};

// -----------------------------------------------------------------------------
//스타일
const StyledBox = styled.div<StyledBoxProps>`
  background-color: #ffffff;
  ${({ width, height }) => `width: ${width}; height: ${height};`}
  ${({ $padding }) => $padding === 'true' && `padding: 20px;`}
  ${({ $outline }) => {
    switch ($outline) {
      case 'line':
        return `border: 1px solid gray;`;
      case 'shadow':
        return `box-shadow: 4px 4px 6px gray;`;
    }
  }}
  border-radius: 5px;
`;
