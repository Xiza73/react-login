import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { LoaderProvider } from "./context/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </ChakraProvider>
  </React.StrictMode>
);
