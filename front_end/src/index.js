import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext_Component } from "./store/AuthContext";


createRoot(document.getElementById("root")).render(
         <React.StrictMode>
          <BrowserRouter>
            <AuthContext_Component>
              <App />
            </AuthContext_Component>
          </BrowserRouter>
          </React.StrictMode>,
);