import React, { Suspense } from 'react';
import './App.css';
import dayjs from 'dayjs';
import { CommonRoutes } from 'routes';
import { BrowserRouter } from 'react-router-dom';
import 'dayjs/locale/ko';
import { ConfigProvider, Spin } from 'antd';
import koKR from "antd/lib/locale/ko_KR";

dayjs.locale('ko');

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 15,
        }
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
}

export default App;
