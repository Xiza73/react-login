import { Route } from "@/interfaces";
import { Login } from "@/pages";
import { Navigate } from "react-router-dom";

export const AuthPath = {
  ROOT: "/auth",
  LOGIN: "/auth/login",
  // REGISTER: "/auth/register",
  // FORGOT_PASSWORD: "/auth/forgot-password",
  // ANY: "/auth/*",
} as const;
// type AuthPath = typeof AuthPath[keyof typeof AuthPath];

export const AuthRoutes: {
  [key in keyof typeof AuthPath]: Route;
} = {
  ROOT: {
    path: AuthPath.ROOT,
    element: <Navigate to={AuthPath.LOGIN} replace />,
  },
  LOGIN: {
    path: AuthPath.LOGIN,
    element: <Login />,
    label: "Login",
  },
} as const;
