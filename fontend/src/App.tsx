import React, { Suspense } from 'react';
import dayjs from 'dayjs';
import { CommonRoutes } from 'routes';
import { BrowserRouter } from 'react-router-dom';
import 'dayjs/locale/ko';
import { ConfigProvider, Spin } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import 'assets/css/app.css';
import 'assets/css/common.css';
import 'assets/css/layout.css';

dayjs.locale('ko');

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9672d9',
          borderRadius: 1,
          fontSize: 15,
          fontFamily: 'NanumSquareNeo',
        },
      }}
      locale={koKR}
    >
      <Suspense fallback={<Spin />}>
        <BrowserRouter>
          <CommonRoutes />
        </BrowserRouter>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
