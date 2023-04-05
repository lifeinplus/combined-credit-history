import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/scss/main.scss";
import "./assets/js/main";

import App from "./App";
import Spinner from "./components/Spinner";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>
);
