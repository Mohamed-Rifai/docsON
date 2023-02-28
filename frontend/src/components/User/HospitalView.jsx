import React from "react";
import { useParams } from "react-router-dom";

const HospitalView = () => {
  const { hospitalId } = useParams();

  // Fetch hospital data and doctors data for the given hospitalId from your backend API

  return (
    <div className="min-h-min bg-white overflow-hidden">
      <div className="container mx-auto px-2 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          {/* Hospital Image */}
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/500x500"
              alt="/"
              className="w-full"
            />
          </div>

          {/* Hospital Details */}
          <div className="w-full md:w-2/3 p-4 mx-auto ml-20 ">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Hospital Name
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">Address:</h3>
              <p className="text-gray-500">123 Main Street, Anytown, USA</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">Phone:</h3>
              <p className="text-gray-500">(555) 555-5555</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">Website:</h3>
              <a href="#" className="text-blue-500">
                www.hospital.com
              </a>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">Doctors:</h3>
              <ul className="list-disc ml-4">
                <li className="text-gray-500">Doctor 1</li>
                <li className="text-gray-500">Doctor 2</li>
                <li className="text-gray-500">Doctor 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalView;
