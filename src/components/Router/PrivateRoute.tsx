import { useAuth } from "@/context";
import { Default as Layout } from "@/layout";
import { AuthPath } from "@/router";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={AuthPath.LOGIN} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
