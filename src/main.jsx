// entry point file

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// 2c. via src/routes/root.jsx
// 2d. update root route's element
import Root from "./routes/root";

// 1a. create browser router and configure first route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

// 1b. pass in router into <RouterProvider />
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// 2a. go to src/routes/root.jsx