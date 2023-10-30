import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import {
  ROUTE_FEED,
  ROUTE_GOAL,
  ROUTE_GOAL_MY,
  ROUTE_INFO,
} from 'routes/const';

export const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className='main-header'>
      <div
        className='header-logo'
        aria-hidden='true'
        onClick={() => navigate(ROUTE_INFO)}
      >
        <Avatar size='small' />
        <span style={{ marginLeft: 10 }}>디벨로그</span>
      </div>
      <div className='header-menu'>
        <span />
        <div
          className='nav-item'
          aria-hidden='true'
          onClick={() => navigate(`${ROUTE_GOAL}/${ROUTE_GOAL_MY}`)}
        >
          목표
        </div>
        <div
          className='nav-item'
          aria-hidden='true'
          onClick={() => navigate(ROUTE_FEED)}
        >
          피드
        </div>
        <span />
      </div>
      <div className='header-profile'>
        <Avatar size='small' icon={<UserOutlined />} />
        <span style={{ marginLeft: 10 }}>아이디</span>
      </div>
    </Header>
  );
};
