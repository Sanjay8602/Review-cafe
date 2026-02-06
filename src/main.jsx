import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from 'react-router-dom'
import App from "./App.jsx";
import "./index.css";

const basename =
  window.location.hostname === "reviewmycafe.in" ? "/" : "/Review-cafe/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
