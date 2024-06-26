import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { MediportaContextProvider } from "./context/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MediportaContextProvider>
      <App />
    </MediportaContextProvider>
  </React.StrictMode>
);
