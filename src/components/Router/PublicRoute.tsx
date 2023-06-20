import { Default as Layout } from "@/layout";
import { useSelector } from "@/redux";
import { UserPath } from "@/router";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute: React.FC = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to={UserPath.PROFILE} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
