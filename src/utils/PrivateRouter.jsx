import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const { user, loadding } = useContext(MainContext);

  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  } else {
    if (loadding) {
      return <span className="loading loading-dots loading-lg"></span>;
    }
  }
  return children;
};

export default PrivateRouter;
