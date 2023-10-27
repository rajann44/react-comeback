import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Below is basename which will be appended pre url for each route
  <BrowserRouter basename="/app">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
