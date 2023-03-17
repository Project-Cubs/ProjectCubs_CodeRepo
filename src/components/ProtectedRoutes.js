import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = function ({ isloggedIn }) {
  return isloggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
