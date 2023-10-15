import { useRoutes } from 'react-router-dom';
import * as paths from './const';
import { FullScreenLayout, LoginLayout, MainLayout } from 'layouts';
import { NotFound } from 'containers';
import { InfoPage } from 'pages/info';
import PrivateRoute from './PrivateRoute';
import { SignInPage, SignUpPage } from 'pages/sign';
import { GoalMainPage, GoalPage, GoalsubPage, WriteGoalPage } from 'pages/goal';
import { ProfilePage } from 'pages/profile';
import { FeedPage } from 'pages/feed';

export const CommonRoutes = () => {
  const routes = useRoutes([
    {
      path: paths.ROUTE_ROOT,
      children: [
        {
          element: <LoginLayout />,
          children: [
            // 로그인 페이지
            {
              path: paths.ROUTE_SIGN_IN,
              element: <SignInPage />,
            },
            // 회원가입 페이지
            {
              path: paths.ROUTE_SIGN_UP,
              element: <SignUpPage />,
            },
          ],
        },
        {
          //네비게이션 없이 FullScreen으로 사용하는 페이지
          element: <FullScreenLayout />,
          children: [
            {
              path: paths.ROUTE_INFO,
              element: <InfoPage />,
            },
          ],
        },
        {
          element: <MainLayout />,
          children: [
            {
              // 로그인 필요한 페이지
              element: <PrivateRoute />,
              children: [
                // 목표
                {
                  path: paths.ROUTE_GOAL,
                  element: <GoalMainPage />,
                  children: [
                    {
                      path: paths.ROUTE_GOAL_MY,
                      element: <GoalPage />,
                      children: [
                        // 특정 목표 페이지
                        {
                          path: paths.ROUTE_GOAL_LIST,
                          element: <GoalsubPage />,
                        },
                        // 목표 작성 페이지
                        {
                          path: paths.ROUTE_GOAL_WRITE,
                          element: <WriteGoalPage />,
                        },
                      ],
                    },
                  ],
                },

                //프로필 페이지
                {
                  path: paths.ROUTE_PROFILE,
                  element: <ProfilePage />,
                },
              ],
            },
            //피드 메인 페이지
            {
              path: paths.ROUTE_FEED,
              element: <FeedPage />
            }
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  // element를 return함으로써 적절한 계층으로 구성된 element가 렌더링 될 수 있도록 함
  return routes;
};
