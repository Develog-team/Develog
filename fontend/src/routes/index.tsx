import { useRoutes } from "react-router-dom";
import * as paths from './const';
import { MainLayout } from 'layouts';
import { NotFound } from 'containers';
import { DashBoardPage } from "pages/dashboard";

export const CommonRoutes = () => {
    const routes = useRoutes([
        {
            path: paths.ROUTE_ROOT,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        /** 대시보드 */
                        {
                            path: paths.ROUTE_MAIN,
                            element: <DashBoardPage />
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    // element를 return함으로써 적절한 계층으로 구성된 element가 렌더링 될 수 있도록 함
    return routes;
};
