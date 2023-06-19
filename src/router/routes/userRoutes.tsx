import { Route } from "@/interfaces";
import { Profile } from "@/pages";
import { Navigate } from "react-router-dom";

export const UserPath = {
  ROOT: "/user",
  PROFILE: "/user/profile",
  // SETTINGS: "/user/settings",
  ANY: "/user/*",
} as const;
// type AuthPath = typeof AuthPath[keyof typeof AuthPath];

export const UserRoutes: {
  [key in keyof typeof UserPath]: Route;
} = {
  ROOT: {
    path: UserPath.ROOT,
    element: <Navigate to={UserPath.PROFILE} replace />,
  },
  PROFILE: {
    path: UserPath.PROFILE,
    index: true,
    element: <Profile />,
    label: "Profile",
  },
  ANY: {
    path: UserPath.ANY,
    element: <Navigate to={UserPath.PROFILE} replace />,
  },
} as const;
