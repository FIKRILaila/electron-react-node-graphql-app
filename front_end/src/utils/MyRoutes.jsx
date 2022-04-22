import { useRoutes } from "react-router-dom";
import { Home, Login,Register, NotFound} from "../pages";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
const Routers =  () =>useRoutes([
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element:  <Home/>
      }
    ],
  },
  {
    path: "*",
    element:(<NotFound/>)
  },
])
export default Routers