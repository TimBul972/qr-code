import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout"; // внутри него будет навигация

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
