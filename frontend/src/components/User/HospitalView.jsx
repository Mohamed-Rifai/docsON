import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import axios from "../../axios";

const HospitalView = () => {
  const hospitalId = useParams();
  const id = hospitalId.id.toString();

  const [hospitalData, setHospitalData] = useState(null);

  useEffect(() => {
    // Fetch hospital data for the given hospitalId
    axios
      .get(`/hospital/gethospital/${id}`)
      .then((response) => {
        setHospitalData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col">
      <div className="relative w-full h-80 bg-gray-200 flex justify-center items-center">
        <img
          src={hospitalData?.image[0].url}
          alt="Hospital"
          className="w-80 h-80 object-cover rounded-full"
        />
       
        <h1
          className="font-bold text-4xl text-white"
          style={{
            color: "#3F3D56",
            textShadow: "2px 2px #F3F3F3",
            animation: "blinkText 2s linear infinite",
          }}
        >
          <FaHospital className="inline-block mr-2 text-red-500" />
          {hospitalData?.name} Hospital
        </h1>
      </div>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-black">About Us</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-500">Address:</h3>
          <p className="text-gray-500">
            {hospitalData?.place}, {hospitalData?.state}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-500">Contact us:</h3>
          <p>
           +91 {hospitalData?.phone}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-black mb-2">Our Doctors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt="Doctor"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="ml-2">
                  <h4 className="text-lg font-bold">Dr. Jane Smith</h4>
                  <p className="text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="Doctor"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="ml-2 ">
                  <h4 className="text-lg font-bold">Dr. John Doe</h4>
                  <p className="text-gray-500">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalView;



//
//https://i.pravatar.cc/150?img=60



  // <div className="min-h-min bg-white overflow-hidden flex ">
  //     <div className="container mx-auto px-2 py-10">
  //       <div className="flex flex-col md:flex-row items-center justify-between w-full ">
  //         <div className="w-full md:w-1/3 p-4 flex justify-center">
  //           <img
  //             src={hospitalData?.image[0].url}
  //             alt="/"
  //             className="w-80 h-80 object-cover rounded-full hospital-photo"
  //           />
  //         </div>

  //         <div className="w-full md:w-2/3 p-4 mx-auto">
  //           <h2 className="text-3xl font-bold mb-4 text-center text-black hospital-name">
  //             {hospitalData?.name} Hospital
  //           </h2>
  //           <div className="mb-4">
  //             <h3 className="text-lg font-bold text-gray-500 hospital-address-label">
  //               Address:
  //             </h3>
  //             <p className="text-gray-500 hospital-address">
  //               {hospitalData?.place}, {hospitalData?.state}
  //             </p>
  //           </div>
  //           <div className="mb-4">
  //             <h3 className="text-lg font-bold text-gray-500 hospital-website-label">
  //               Website:
  //             </h3>
  //             <Link className="text-blue-500 hospital-website-link">
  //               www.hospital.com
  //             </Link>
  //           </div>
  //           <div className="mb-4">
  //             <h3 className="text-lg font-bold text-gray-500 hospital-doctors-label">
  //               Doctors:
  //             </h3>

  //             <div className="flex items-center mt-2">
  //               <img
  //                 src="https://i.pravatar.cc/150?img=60"
  //                 alt=""
  //                 className="w-14 h-14 rounded-full object-cover mr-4"
  //               />
  //               <div>
  //                 <p className="text-gray-500 hospital-doctor-name">
  //                   Dr. John Doe
  //                 </p>
  //                 <p className="text-gray-400 hospital-doctor-speciality">
  //                   Cardiologist
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="flex items-center mt-2">
  //               <img
  //                 src="https://i.pravatar.cc/150?img=61"
  //                 alt=""
  //                 className="w-14 h-14 rounded-full object-cover mr-4"
  //               />
  //               <div>
  //                 <p className="text-gray-500 hospital-doctor-name">
  //                   Dr. Jane Smith
  //                 </p>
  //                 <p className="text-gray-400 hospital-doctor-speciality">
  //                   Neurologist
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>