import { useRoutes } from "react-router-dom";
import { Welcome, Login,Register, NotFound, AddFiliale,AllFiliale} from "../pages";
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
        element:  <Welcome/>
      },
      {
        path: "/addFiliale",
        element:  <AddFiliale/>
      },
      {
        path: "/Filiales",
        element:  <AllFiliale/>
      }
    ],
  },
  {
    path: "*",
    element:(<NotFound/>)
  },
])
export default Routers