import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BeforePageBtn = () => {
  const navigate = useNavigate();
  return (
    <Button
      shape='circle'
      icon={<LeftOutlined />}
      onClick={() => navigate(-1)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};
