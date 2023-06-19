import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthRoutes, PublicPath, PublicRoutes, UserPath, UserRoutes } from ".";
import { PublicRoute, PrivateRoute } from "@/components";

export const router = createBrowserRouter([
  {
    path: PublicPath.ROOT,
    element: <PublicRoute />,
    children: [
      ...Object.values(PublicRoutes).map(({ path, element }) => ({
        path,
        element,
      })),
      ...Object.values(AuthRoutes).map(({ path, element }) => ({
        path,
        element,
      })),
    ],
  },
  {
    path: UserPath.ROOT,
    element: <PrivateRoute />,
    children: [
      ...Object.values(UserRoutes).map(({ path, element }) => ({
        path,
        element,
      })),
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
