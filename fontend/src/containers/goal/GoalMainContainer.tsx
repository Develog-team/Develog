import { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoalMainContainer = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // goals로만 입장 시 /goals/my로 이동
    if (pathname === '/goals') navigate('my');
  }, []);

  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export default GoalMainContainer;
