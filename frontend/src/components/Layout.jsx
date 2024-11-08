
import { RiArrowDownSLine } from '@remixicon/react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../public/logo-no-background.png"

const Layout = () => {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-4 border-b border-gray-400">

        <div className="flex items-center space-x-2 w-2/5">
        <Link to="">
          <img width="200" src={logo} alt="" />
        </Link>
        </div>

        <div className="w-3/5 flex justify-evenly text-xl">
            <ul className="flex items-center gap-x-10 mr-14">
                <Link to=""><li className="flex items-center gap-x-2">Products <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Solutions <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Resources <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Contact</li></Link>
            </ul>
            <ul className="flex gap-x-10">
                <Link to="log-in" className="hover:text-[#2ECC40]"><li>Login</li></Link>
                <Link to="sign-up" className="hover:text-[#2ECC40]"><li>Signup</li></Link>
            </ul>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

    </div>
  );
};

export default Layout;
