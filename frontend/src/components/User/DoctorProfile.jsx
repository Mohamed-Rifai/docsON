import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({})
  const doctorId = useParams().id
 console.log(doctor);
  

  useEffect(() => {
    axios
      .get(`/user/doctor-view/${doctorId}`)
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [doctorId]);


  return (
    <div className="max-w-screen-md mx-auto my-8 ">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={doctor?.imageUrl}
            alt="/"
            className="w-full h-80 object-cover "
          />
          <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-4 py-1 rounded-bl-lg">
            <p className="text-sm">4.5</p>
            <div className="flex items-center">
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
            <p className="text-xs">(400 ratings)</p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Dr. {doctor?.name}
          </h2>
          <p className="text-lg font-bold text-gray-600 mb-2">
            {doctor?.department}
          </p>
          <p className="text-md text-gray-500 mb-4">{doctor?.hospital}</p>
          <p className="text-md text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquam est magna, ut interdum ex fermentum eu. Aenean commodo elit
            at erat venenatis, eget faucibus odio rhoncus. Nullam quis
            sollicitudin eros. Duis vel faucibus velit.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-md font-bold text-gray-600">Experience:</p>
            <p className="text-md text-gray-500">10+ years</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-md font-bold text-gray-600">Location:</p>
            <p className="text-md text-gray-500">Anytown, USA</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-md font-bold text-gray-600">Availability:</p>

            {doctor?.availableToday ? (
              <p className="text-md text-green-500 font-bold">
                Available Today
              </p>
            ) : (
              <p className="text-md text-red-500 font-bold">
                Unavailable Today
              </p>
            )}
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-md font-bold text-gray-600">Language:</p>
            <p className="text-md text-gray-500">English, Spanish</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-md font-bold text-gray-600">Specializations:</p>
            <p className="text-md text-gray-500">
              Cardiology, Internal Medicine
            </p>
          </div>
          <button
            className={`text-white w-full py-3 rounded-md font-medium my-6 ${
              doctor.availableToday
                ? "bg-[#00df9a] hover:bg-[#05b68d] focus:bg-[#069171]"
                : "bg-red-400 cursor-not-allowed"
            }`}
            disabled={!doctor.availableToday}
          >
            {doctor.availableToday ? "Book an Appointment" : "Unavailable Today"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
