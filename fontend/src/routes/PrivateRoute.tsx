import { Outlet } from "react-router-dom"

const PrivateRoute = () => {
    // const location = useLocation();
    // const token = sessionStorage.getItem("accessToken");

    return (
        // token이 없으면 로그인화면으로
        // token
        //     ? 
        <Outlet />
        // : 
        // <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default PrivateRoute