import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Loader } from "./components/Loader";
import { ReduxProvider } from "./redux";

function App() {
  return (
    <ReduxProvider>
      <Loader />
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
