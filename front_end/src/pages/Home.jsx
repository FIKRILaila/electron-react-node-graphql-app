import React, {useContext} from 'react';
import { AuthContext } from "../store/AuthContext";
import { useNavigate, Link,Outlet } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const LogOut = () => {
    localStorage.removeItem('token')
    setAuth({ loggedIn: false });
    navigate("/login", {
      replace: true,
    });
  }

  return (
    <div className="relative min-h-screen md:flex">
      <div className="sidebar bg-sky-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <p className="text-center text-white space-x-2 px-4">
          <Link to="/" className="text-2xl font-extrabold">TGCC</Link>
        </p>
        <nav className='text-center'>
          <p className="block py-2.5 px-4 rounded hover:bg-sky-700"> <Link to='/'>Home</Link></p>
          <p className="block py-2.5 px-4 rounded hover:bg-sky-700"> <Link to='/addFiliale'>Add Filiale</Link></p>
          <p className="block py-2.5 px-4 rounded hover:bg-sky-700"><Link to='/Filiales'>Filiales</Link></p>
          <p className="block py-2.5 px-4 rounded hover:bg-sky-700"> <Link to='/addProject'>Add Project</Link></p>
          <p className="block py-2.5 px-4 rounded hover:bg-sky-700"><Link to='/Projects'>Projects</Link></p>
          <p className='block py-2.5 px-4 rounded hover:bg-sky-700' onClick = {LogOut}>Logout</p>
        </nav>
      </div>

      <div className="flex-1 p-10 text-2xl">

        <Outlet/>

      </div>
      
    </div>
  )
}
