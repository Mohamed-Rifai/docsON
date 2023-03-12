import {  useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearHospital } from "../../app/slices/authHospital";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const name = useSelector((state) => state.hospitalAuth.name);
 

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // clear the authentication token from local storage
    localStorage.removeItem("HospitalToken");
    dispatch(clearHospital())

   

    navigate("/hospital/login");
  };

  return (
    <div className=" border-y flex justify-between items-center bg-white h-24 max-w-[1240px] mx-auto px-4 text-gray-800 ] ">
      <h1 className="w-full text-3xl font-bold  text-[#0fad7b]">+docsOn</h1>

      <ul className="hidden md:flex">
        <Link to="/hospital/home">
          <li className="p-4">Home</li>
        </Link>
        <li className="p-4">Company</li>
        <Link to="/hospital/docters">
          <li className="p-4">Docters</li>
        </Link>

        <li
          className="relative p-4 hover:cursor-pointer"
          onClick={handleDropdown}
        >
          <span className="flex items-center font-bold">
            <FaUser className="mr-2" />
            {name}
          </span>
          <ul
            className={`absolute top-full left-0 w-40 uppercase bg-gray-800 text-white rounded-md py-2 ${
              showDropdown ? "block" : "hidden"
            }`}
          >
            <Link to="#">
              <li className="px-3 py-2 hover:bg-gray-900">Profile</li>
            </Link>

            <li className="px-3 py-2 hover:bg-gray-900" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
        {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
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

          <li
            className="p-4 relative hover:cursor-pointer"
            onClick={handleDropdown}
          >
            <span className="flex items-center font-bold">
              <FaUser className="mr-2" />
              {name}
            </span>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
