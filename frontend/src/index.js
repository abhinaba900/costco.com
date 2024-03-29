import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);


