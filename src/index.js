import React from "react";
import ReactDOM from "react-dom/client";

// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/scss/main.scss";
import "./assets/js/main";

import App from "./App";
import Spinner from "./components/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <React.Suspense fallback={<Spinner />}>
            <App />
        </React.Suspense>
    </React.StrictMode>
);
