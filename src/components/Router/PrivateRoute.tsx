import { Default as Layout } from "@/layout";
import { useSelector } from "@/redux";
import { AuthPath } from "@/router";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to={AuthPath.LOGIN} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
