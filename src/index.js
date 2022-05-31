import React from "react";
import ReactDOM from "react-dom/client";
// The below line is added by VIkram Singh
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // The Below Browser Router is added by Vikram Singh
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
