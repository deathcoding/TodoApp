import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

console.log("fdvdfv");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
