/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  const token = localStorage.getItem("token");

  return !token ? children || <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
