import { Navigate, Outlet, useLocation } from "react-router-dom"
import { ROUTE_SIGN_IN } from "./const";

const PrivateRoute = () => {
    const location = useLocation();
    const token = sessionStorage.getItem("accessToken");

    return (
        // token이 없으면 로그인화면으로
        token
            ? 
        <Outlet />
        : 
        <Navigate to={ROUTE_SIGN_IN} state={{ from: location }} replace />
    )
}
export default PrivateRoute