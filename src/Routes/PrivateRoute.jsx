import { Navigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
