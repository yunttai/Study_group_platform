import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
