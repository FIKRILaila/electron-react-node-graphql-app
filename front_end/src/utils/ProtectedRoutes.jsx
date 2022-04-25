import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Home } from "../pages";
import { useAuth } from "./useAuth";

export default () => useAuth() ?  <Home /> : <Navigate to="login" replace state={{from:useLocation()}} />;