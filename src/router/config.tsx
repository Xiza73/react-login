import { matchRoutes, useLocation } from "react-router-dom";
import { AuthRoutes, PublicRoutes, UserRoutes } from ".";

/* export type AdminRoute = {
  [key in keyof typeof AdminRoutes]: (typeof AdminRoutes)[key]["path"];
}[keyof typeof AdminRoutes]; */

// export type AdminPath = (typeof AdminRoutes)[keyof typeof AdminRoutes]["path"];

const routes = Object.values({
  ...PublicRoutes,
  ...AuthRoutes,
  ...UserRoutes,
}).map(({ path }) => ({
  path,
}));

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location) || [
    {
      route: { path: "/" },
    },
  ];

  return route.path;
};
