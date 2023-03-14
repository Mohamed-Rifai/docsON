import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // clear the authentication token from local storage
    localStorage.removeItem("UserToken");

    setAuthenticated(false);

    navigate("/");
  };

  // check if the user is authenticated
  const token = localStorage.getItem("UserToken");
  if (token && !authenticated) {
    setAuthenticated(true);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ]">
      <h1 className="w-full text-3xl font-bold  text-[#00df9a]">+docsOn</h1>

      <ul className="hidden md:flex">
        <Link
          className={location.pathname === "/" ? "font-bold underline" : " "}
          to="/"
        >
          <li className="p-4">Home</li>
        </Link>
        <li className="p-4">Company</li>
        <Link
          className={
            location.pathname === "/user/docterslist"
              ? "font-bold underline"
              : " "
          }
          to="/user/docterslist"
        >
          <li className="p-4">Docters</li>
        </Link>
        {authenticated ? (
          <li className="p-4 hover:cursor-pointer" onClick={handleLogout}>
            Logout
          </li>
        ) : (
          <li
            className="relative p-4 hover:cursor-pointer"
            onClick={handleDropdown}
          >
            <span>Login</span>
            <ul
              className={`absolute top-full left-0 w-40 uppercase bg-gray-800 text-white rounded-md py-2 z-50 ${
                showDropdown ? "block" : "hidden"
              }`}
            >
              <Link to="/user/login">
                <li className="px-3 py-2 hover:bg-gray-900">User Login</li>
              </Link>
              <Link to="/hospital/home">
                <li className="px-3 py-2 hover:bg-gray-900">Hospital Panel</li>
              </Link>
              <li className="px-3 py-2 hover:bg-gray-900">Dashboard</li>
            </ul>
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
        {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold  text-[#00df9a] m-4">
          +docsOn
        </h1>

        <ul className="uppercase p-4">
          <Link
            className={location.pathname === "/" ? "font-bold underline" : " "}
            to="/"
          >
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <Link
            className={
              location.pathname === "/user/docterslist"
                ? "font-bold underline"
                : " "
            }
            to="/user/docterslist"
          >
            <li className="p-4 border-b border-gray-600">Doctors</li>
          </Link>
          {authenticated ? (
            <li
              className="p-4 border-b border-gray-600 hover:cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          ) : (
            <li
              className="p-4 relative hover:cursor-pointer"
              onClick={handleDropdown}
            >
              Login
              <ul
                className={`absolute bg-gray-800 right-0 top-full w-48 text-white rounded-md py-2 ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/user/login"
                >
                  <li className="p-4 border-b border-gray-600 hover:bg-gray-900">
                    User Login
                  </li>
                </Link>

                <Link to="/hospital/home">
                  <li className="p-4 border-b border-gray-600 hover:bg-gray-900">
                    Hospital panel
                  </li>
                </Link>
                <li className="p-4 hover:bg-gray-900">Dashboard</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
