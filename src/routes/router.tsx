import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:model/:id",
  PROTECTED: "/protected",
  STARTPAGE: "/",
  ERROR: "/error",
  LOGIN: "/login",
} as const;

export const PrivateRoutes = () => {
  const isAuth = false;
  if (isAuth) {
    return <Outlet />;
  } else {
    return <Login />;
  }
};

const publicRoutes: RouteObject[] = [
  {
    path: PATH.STARTPAGE,
    element: <Adidas />,
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.MODEL,
    element: <Model />,
  },
  {
    path: PATH.ERROR,
    element: <Error404 />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
]);
