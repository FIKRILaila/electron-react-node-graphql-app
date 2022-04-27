import { useRoutes } from "react-router-dom";
import { Welcome, Login,Register, NotFound, AddFiliale,AllFiliale,AddProject,AllProjects} from "../pages";
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
      },
      {
        path: "/addProject",
        element:  <AddProject/>
      },
      {
        path: "/Projects",
        element:  <AllProjects/>
      }
    ],
  },
  {
    path: "*",
    element:(<NotFound/>)
  },
])
export default Routers