import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/router";

import "@/assets/css/app.css";
import React from "react";
import "./index.css";

console.log("PUBLIC_URL", import.meta.env.PUBLIC_URL);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router()} />
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router />
    </BrowserRouter> */}
  </React.StrictMode>
);
