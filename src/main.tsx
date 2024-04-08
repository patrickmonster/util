import Router from "@/router";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/assets/css/app.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
    <Router />
  </BrowserRouter>
);
