import { ReactNode } from "react";
import { ProtectedPage } from "../components/pages/ProtectedPage";
// import { Navigate } from "react-router-dom";
 import { Login } from "../components/pages/Login";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const logget = true;
  if (logget) {
    return <ProtectedPage />;
  } else {
    return <Login/>;
  }
  //   return logget ? children : <Navigate to={"/error"} />;
  // не заработала из примера Игоря, выдаёт ошибку оболочки ProtectedRoute: Type 'undefined' is not assignable to type 'Element | null'.
};
