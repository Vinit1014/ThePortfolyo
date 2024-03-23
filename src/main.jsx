import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context.jsx";
import { NextUIProvider } from "@nextui-org/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </NextUIProvider>
  </React.StrictMode>
);

{
  /* <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider> */
}
