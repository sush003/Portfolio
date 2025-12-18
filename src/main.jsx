import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
