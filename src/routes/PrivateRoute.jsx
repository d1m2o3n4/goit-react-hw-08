import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/slice";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(selectLoggedIn);
  return isLogedIn ? children : <Navigate to="login" />;
};
