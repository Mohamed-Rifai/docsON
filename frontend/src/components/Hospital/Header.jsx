import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  // check if the user is authenticated
  const token = localStorage.getItem("HospitalToken");
  if (token && !authenticated) {
    setAuthenticated(true);
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // clear the authentication token from local storage
    localStorage.removeItem("HospitalToken");

    setAuthenticated(false);

    navigate("/hospital/home");
  };

  return (
    <div
      className=" border-y flex justify-between items-center bg-white h-24 max-w-[1240px] mx-auto px-4 text-gray-800 ] "
    >
      <h1 className="w-full text-3xl font-bold  text-[#04cc8d]">+docsOn</h1>

      <ul className="hidden md:flex">
        <Link to="/hospital/home">
          <li className="p-4">Home</li>
        </Link>
        <li className="p-4">Company</li>
        <Link to="/hospital/docters">
          <li className="p-4">Docters</li>
        </Link>
        {authenticated ? (
          <li
            className="relative p-4 hover:cursor-pointer"
            onClick={handleDropdown}
          >
            <span>Lakshore</span>
            <ul
              className={`absolute top-full left-0 w-40 uppercase bg-gray-800 text-white rounded-md py-2 ${
                showDropdown ? "block" : "hidden"
              }`}
            >
              <Link to="#">
                <li className="px-3 py-2 hover:bg-gray-900">Profile</li>
              </Link>

              <li
                className="px-3 py-2 hover:bg-gray-900"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </li>
        ) : (
          <li
            className="relative p-4 hover:cursor-pointer"
            onClick={handleDropdown}
          >
            <span>Account</span>
            <ul
              className={`absolute top-full left-0 w-40 uppercase bg-gray-800 text-white rounded-md py-2 ${
                showDropdown ? "block" : "hidden"
              }`}
            >
              <Link to="/hospital/login">
                <li className="px-3 py-2 hover:bg-gray-900">Login</li>
              </Link>
              <Link to="/hospital/registration">
                <li className="px-3 py-2 hover:bg-gray-900">Signup</li>
              </Link>
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
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-300 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold  text-[#0fad7b] m-4">
          +docsOn
        </h1>

        <ul className="uppercase p-4">
          <Link to="/hospital/home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <Link to="/hospital/docters">
            <li className="p-4 border-b border-gray-600">Doctors</li>
          </Link>
          {authenticated ? (
            <li
              className="p-4 relative hover:cursor-pointer"
              onClick={handleDropdown}
            >
              <span>Lakshore</span>
              <ul
                className={`absolute bg-gray-800 right-0 top-full w-48 text-white rounded-md py-2 ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                <Link to="#">
                  <li className="p-4 border-b border-gray-600 hover:bg-gray-900">
                    Profile
                  </li>
                </Link>

                <li
                  className="p-4 border-b border-gray-600 hover:bg-gray-900"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          ) : (
            <li
              className="p-4 relative hover:cursor-pointer"
              onClick={handleDropdown}
            >
              <span>Account</span>
              <ul
                className={`absolute bg-gray-800 right-0 top-full w-48 text-white rounded-md py-2 ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                <Link to="/hospital/login">
                  <li className="p-4 border-b border-gray-600 hover:bg-gray-900">
                    Login
                  </li>
                </Link>

                <Link to="/hospital/registration">
                  <li className="p-4 border-b border-gray-600 hover:bg-gray-900">
                    Signup
                  </li>
                </Link>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
