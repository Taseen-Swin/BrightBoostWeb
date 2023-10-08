import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
} from "react-router-dom";

import App  from "../app/App";
import Login  from "../app/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);


export default router;