import { useContext} from "react";
import { AuthContext } from "../store/AuthContext";
export  const useAuth = () => {
  const {auth,setAuth}=useContext(AuthContext) 
  return auth && auth.loggedIn;
};