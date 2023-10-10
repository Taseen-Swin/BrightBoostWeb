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
    //loader: rootLoader,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <div>register world!</div>,
        
      },
      
    ],
  },

  {
    path: "/dashboard",
    element: <div>dashboard world</div>,
  },

  
]);


export default router;