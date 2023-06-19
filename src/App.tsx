import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context";
import { router } from "./router";
import { Loader } from "./components/Loader";

function App() {
  return (
    <AuthProvider>
      <Loader />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
