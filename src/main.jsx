// entry point file

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// 2c. via src/routes/root.jsx
// 2d. update root route's element
import Root from "./routes/root";

// 3c. via src/error-page.jsx
// 3d. set the <ErrorPage> as the errorElement on the root route
import ErrorPage from "./error-page";

// 4d. via src/routes/contact.jsx
// 4e. import the contact component and create a new route
import Contact from "./routes/contact";

// 1a. create browser router and configure first route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // 3d.
    errorElement: <ErrorPage />,

    // // 4e.
    // {
    //   path: "contacts/:contactId",
    //   element: <Contact />
    // }
    // 4f. open /contacts/1 to see rendered contact component

    // 5a. move the contacts route to be a child of the root route
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ],
    // 5b. go to src/routes/root.jsx
    
  },
]);

// 1b. pass in router into <RouterProvider />
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// 2a. go to src/routes/root.jsx

// 3a. go to src/error-page.jsx

// 4a. go to src/routes/contact.jsx
