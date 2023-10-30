import { Button, Image, Modal, Space, Tabs, Tooltip, theme } from 'antd';
import { ContainerBox } from '../common/ContentBox';
import { useState } from 'react';
import styled from 'styled-components';

// 임시데이터
const data = {
  imageUrl: '',
  nickname: '닉네임',
  observe: {
    observer: 2,
    observing: 2,
  },
  urlList: [
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
  ],
  introduce: '자기소개',
};
const observeData = {
  observer: [
    {
      userId: 1,
      nickname: 'ss',
    },
    {
      userId: 2,
      nickname: 'dd',
    },
  ],
  observing: [
    {
      userId: 3,
      nickname: 'ww',
    },
  ],
};

const MainProfile = () => {
  return (
    <Space
      className='mainProfileWrap'
      size='middle'
      direction='vertical'
      align='center'
    >
      <ContainerBox
        $outline='shadow'
        $padding='false'
        anotherStyle={{
          width: 250,
          aspectRatio: '1/1',
          borderRadius: '50%',
          background: 'gray',
          overflow: 'hidden',
        }}
      >
        {data.imageUrl === '' && (
          <Image
            width='100%'
            height='100%'
            src='error'
            fallback='data:image/png;base64,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'
          />
        )}
      </ContainerBox>
      <div className='profileNickname'>{data.nickname}</div>
    </Space>
  );
};

const Observer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const { token } = theme.useToken();
  return (
    <>
      {' '}
      <ObservingBlock onClick={showModal} color={token.colorPrimary}>
        <Space split={'•'}>
          <div>{data.observe.observer} observer</div>
          <div>{data.observe.observing} observing</div>
        </Space>
      </ObservingBlock>
      <ModalWrap
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        color={token.colorPrimary}
      />
    </>
  );
};

const ModalWrap = ({
  isOpen,
  setIsOpen,
  color,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
}) => {
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      title='나의 옵저버 관리'
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Tabs
        type='card'
        centered
        items={[
          {
            label: `${data.observe.observer} observer`,
            children: <ObserveList list={observeData.observer} color={color} />,
            key: 'observer',
          },
          {
            label: `${data.observe.observing} observing`,
            children: (
              <ObserveList list={observeData.observing} color={color} />
            ),
            key: 'observing',
          },
        ]}
      />
    </Modal>
  );
};

const ObserveList = ({
  list,
  color,
}: {
  list: { nickname: string; userId: number }[];
  color: string;
}) => {
  return (
    <ObserverListWrap color={color}>
      {list.map((user) => (
        <li key={user.userId}>
          <div>{user.nickname}</div>
          <Button danger>삭제</Button>
        </li>
      ))}
    </ObserverListWrap>
  );
};

export const ProfileBox = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 15, width: 250 }}
    >
      <MainProfile />
      <Observer />
      <Space wrap>
        {data.urlList.map((list) => (
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
                alt={`${list.url} 아이콘`}
              />
            </Button>
          </Tooltip>
        ))}
      </Space>
      <div>{data.introduce}</div>
    </div>
  );
};
const ObservingBlock = styled.div<{ color: string }>`
  cursor: pointer;
  &:hover {
    color: ${({ color }) => color};
  }
`;
const ObserverListWrap = styled.ul<{ color: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #e3e3e3;
    transition: border 0.3s;
    position: relative;
  }
  li:hover {
    border: 1px solid ${({ color }) => color};
  }
  button {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    transition:
      opacity 0.3s,
      visibility 0.3s;
  }
  li:hover button {
    visibility: visible;
    opacity: 1;
  }
`;
