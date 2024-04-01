import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({})
  const doctorId = useParams().id
  const navigate = useNavigate()
  const location = useLocation()
 
  

  useEffect(() => {
    axios
      .get(`/user/doctor-view/${doctorId}`)
      .then((res) => {
       
        setDoctor(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [doctorId]);


  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden ">
      <div className="flex flex-col md:flex-row">
        <div className="relative flex-none md:w-1/2">
          <img
            src={doctor?.imageUrl}
            alt="/"
            className="w-full object-cover object-center h-96 md:h-full"
          />
          <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-4 py-1 rounded-bl-lg">
            <div className="flex items-center">
              <p className="text-sm mr-1">4.5</p>
              <div className="flex items-center">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
              <p className="text-xs ml-1">(400 ratings)</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Dr. {doctor?.name}
          </h2>
          <p className="text-lg font-bold text-gray-600 mb-2">
            {doctor?.department}
          </p>
          <p className="text-md text-gray-500 mb-4">{doctor?.hospital}</p>
          <div className="flex items-center mb-4">
            <div className="bg-green-500 text-white font-bold rounded-md py-1 px-2 mr-2">
              10+ years experience
            </div>
            <div className="bg-blue-500 text-white font-bold rounded-md py-1 px-2">
              Anytown, USA
            </div>
          </div>
          <p className="text-md text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquam est magna, ut interdum ex fermentum eu. Aenean commodo elit
            at erat venenatis, eget faucibus odio rhoncus. Nullam quis
            sollicitudin eros. Duis vel faucibus velit.
          </p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-start">
              <p className="text-md font-bold text-gray-600 mb-2">Languages:</p>
              <p className="text-md text-gray-500">English, Spanish</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-md font-bold text-gray-600 mb-2">
                Specializations:
              </p>
              <p className="text-md text-gray-500">
                Cardiology, Internal Medicine
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/user/appointment-page" , {state:{from: location.pathname}})}
            className={`text-white w-full py-3 rounded-md font-medium ${
              doctor.availableToday
                ? "bg-[#00df9a] hover:bg-[#05b68d] focus:bg-[#069171]"
                : "bg-red-400 cursor-not-allowed"
            }`}
            disabled={!doctor.availableToday}
          >
            {doctor.availableToday ? "Book Appointment" : "Unavailable Today"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
