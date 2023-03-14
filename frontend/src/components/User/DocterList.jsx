import React, { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../../axios";

const DoctorList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("user/getAllDoctors").then((res) => {
      setDoctors(res.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Fetch doctors data from your backend API based on the searchValue

  return (
    <div className="bg-gray-100">
      {/* Top Image */}
      <img
        src="https://www.asterhospitals.in/sites/default/files/2021-01/about-us-new.jpg"
        alt="/"
        className="w-full"
      />

      {/* Search Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-screen-md mx-auto flex items-center">
          <input
            type="text"
            placeholder="Search doctors or hospitals"
            className="border border-gray-300 rounded-full py-2 px-4 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchValue}
            onChange={handleSearchChange}
          />
          {/* <button className="ml-4 bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-4 text-white flex-shrink-0"> */}
          <button className="flex items-center justify-center text-black w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 bg-[#00df9a]">
            <FaSearch className="text-white mr-2" />
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>

      {/* Doctors Cards */}
      <div className="flex">
        <div className="max-w-screen-md mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {doctors?.map((doctor) => (
              <Link to={`/user/docterview/${doctor._id}`} key={doctor?._id}>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={doctor?.imageUrl}
                      alt=""
                      className="h-64 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold text-white">
                        {doctor?.name}
                      </h2>
                      <p className="text-lg text-gray-300">
                        {doctor?.department}
                      </p>
                      <p className="text-lg text-gray-300">
                        {doctor?.hospital?.name}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.293 7.293a1 1 0 00-1.414-1.414L10 13.586 6.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">4.5</span>
                      <span className="text-gray-400"> (400)</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
