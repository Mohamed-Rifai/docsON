import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const DoctorView = () => {
  const [doctor, setDoctor] = useState({});
  const {id} = useParams()
  console.log(id);


  useEffect(() => {
    axios
      .get(`/hospital/doctor-view/${id}`, {
        headers: {
          Authorization: localStorage.getItem("HospitalToken"),
        },
      })
      .then((res) => {
        setDoctor(res.data);
      });
    // eslint-disable-next-line
  }, []);
  console.log(doctor);

  const handlePhoneClick = () => {
    window.location.href = `tel:${doctor.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${doctor.email}`;
  };

  const handleFacebookClick = () => {
    window.open(doctor.facebook, "_blank");
  };

  const handleTwitterClick = () => {
    window.open(doctor.twitter, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(doctor.instagram, "_blank");
  };

  return (
    <>
      {Object.keys(doctor).length !== 0 && (
        <div className="w-full h-screen flex justify-between">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex">
              <img 
              src={doctor.image[0].url}
              alt={doctor?.name} className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h1 className="text-xl font-bold">{doctor?.name}</h1>
                <p className="text-gray-600">{doctor?.speciality}</p>
              </div>
            </div>
            <div className="flex">
              <button className="text-gray-700 mr-4" onClick={handlePhoneClick}>
                <FaPhone />
              </button>
              <button className="text-gray-700 mr-4" onClick={handleEmailClick}>
                <FaEnvelope />
              </button>
              <button
                className="text-gray-700 mr-4"
                onClick={handleFacebookClick}
              >
                <FaFacebook />
              </button>
              <button
                className="text-gray-700 mr-4"
                onClick={handleTwitterClick}
              >
                <FaTwitter />
              </button>
              <button className="text-gray-700" onClick={handleInstagramClick}>
                <FaInstagram />
              </button>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex">
            <div className="w-1/3">
              <p className="text-gray-600 mb-2">Experience</p>
              <p className="text-lg font-semibold">{doctor.experience}</p>
            </div>
            <div className="w-1/3">
              <p className="text-gray-600 mb-2">Qualification</p>
              <p className="text-lg font-semibold">{doctor.qualification}</p>
            </div>
            <div className="w-1/3">
              <p className="text-gray-600 mb-2">Availability</p>
              <p className="text-lg font-semibold">{doctor.availability}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorView;
