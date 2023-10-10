import { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const GoalMainContainer = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // goals로만 입장 시 /goals/my로 이동
    if (pathname === '/goals') navigate('my');
  }, []);

  return <Outlet />;
};
export default GoalMainContainer;
