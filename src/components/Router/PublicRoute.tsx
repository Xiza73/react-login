import { useAuth } from "@/context";
import { Default as Layout } from "@/layout";
import { UserPath } from "@/router";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to={UserPath.PROFILE} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
