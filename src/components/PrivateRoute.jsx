import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const user = localStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;