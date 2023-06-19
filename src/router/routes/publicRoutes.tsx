import { Route } from "@/interfaces";
import { Home } from "@/pages";
import { Navigate } from "react-router-dom";

export const PublicPath = {
  ROOT: "/",
  HOME: "/home",
  ANY: "/*",
} as const;
// type AuthPath = typeof AuthPath[keyof typeof AuthPath];

export const PublicRoutes: {
  [key in keyof typeof PublicPath]: Route;
} = {
  ROOT: {
    path: PublicPath.ROOT,
    element: <Navigate to={PublicPath.HOME} replace />,
  },
  HOME: {
    path: PublicPath.HOME,
    element: <Home />,
    label: "Home",
  },
  ANY: {
    path: PublicPath.ANY,
    element: <Navigate to={PublicPath.HOME} replace />,
  },
} as const;
