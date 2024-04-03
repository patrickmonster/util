import Router from "@/router";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename={"/effect-ts"}>
    <Router />
  </BrowserRouter>
);
