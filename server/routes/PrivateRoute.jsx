import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roleRequired }) => {
  // just pass through for now
  return children;
};

export default PrivateRoute;
