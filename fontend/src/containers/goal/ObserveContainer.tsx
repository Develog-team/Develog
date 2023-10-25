import styled from 'styled-components';
import { theme } from 'antd';

// 임시 데이터
const data = [
  {
    id: 1,
    message: '경현님께서 목표를 실행하셨습니다.',
    title: '목표 제목',
    desc: '목표 설명',
  },
  {
    id: 2,
    message: '형진님께서 목표를 실행하셨습니다.',
    title: '목표 제목',
    desc: '목표 설명',
  },
];

export const ObserveContainer = () => {
  const { token } = theme.useToken();
  return (
    <Wrap>
      {data.map((list) => (
        <ObserveList color={token.colorPrimary} key={list.id}>
          <div>{list.message}</div>
          <div className='excution'>
            <div className='title'>{list.title}</div>
            <div className='desc'>{list.desc}</div>
          </div>
        </ObserveList>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ObserveList = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  .excution {
    padding: 15px;
    border-radius: 5px;
    background-color: #eeeeee;
  }
  &:hover .title {
    color: ${({ color }) => color};
    text-decoration: underline;
  }
  .excution .title {
    font-weight: bold;
  }
`;
