
import {  useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import AddDoctorForm from "./docterForm/AddDoctorForm";
import {  FaEye } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import empty from "../../assets/empty-folder.png";
import axios from '../../axios'


const Docters = () => {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false)
  const [doctors, setDoctors] = useState([])
  
  useEffect(()=> {

    const token = localStorage.getItem("HospitalToken");

    if(token){

    axios.get('/hospital/getAllDoctors',{
      headers: {
        Authorization: token
      },
    })
    .then((res) => {
      setDoctors(res.data)
     
    })
    .catch((err) => {
      console.log(err);
    })

  }
  },[])

  useEffect(()=> {
    if(reload){
    
      
       axios
         .get("/hospital/getAllDoctors", {
           headers: {
             Authorization: localStorage.getItem("HospitalToken"),
           },
         })
         .then((res) => {
           setDoctors(res.data);
           setReload(false)
         })
         .catch((err) => {
           console.log("catch working****", err);
         });

    }
  },[reload])

  const handleAddDoctor = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {          
    setShowModal(false)
  }

  const handleReload = () => {
    setReload(true)
  }
 
 

  return (
    <>
      {doctors.length !== 0 ? (
        <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Doctors List</h2>
            <button
              className="flex items-center px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 ml-52"
              onClick={handleAddDoctor}
            >
              <span className="font-bold">&#43;</span> Add Doctor
            </button>
            {showModal && (
              <AddDoctorForm
                onClose={handleCloseModal}
                onReload={handleReload}
              />
            )}
          </div>

          <div className="h-full ">
            <table className="w-full text-left table-auto">
              <thead className="bg-black text-white">
                <tr>
                  
                  <th className="px-1 py-4   items-center justify-center">
                   No
                  </th>
                  <th className="px-6 py-4  items-center">
                    Name
                  </th>
                  <th className="px-4 py-2  items-center justify-center">
                    Department
                  </th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor,index) => (
                  <tr key={doctor._id}>
                    <td className="border px-2 py-2">{index+1}</td>

                    <td className="border  px-4 py-4 flex items-center justify-center">
                      {doctor.name}
                    </td>
                    <td className="border px-4 py-2">{doctor.department}</td>
                    <td className="border px-4 py-5 flex justify-center">
                      <button className="mx-2 text-gray-400 hover:text-red-600">
                        <BsFillTrashFill />
                      </button>
                      <button className="mx-2 text-gray-400 hover:text-green-600">
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen pb-16">
          <img src={empty} alt="/" className="h-64 mb-4" />
          <p className="text-xl font-bold text-gray-800 mb-2">
            Empty Doctors List
          </p>
          <p className="text-gray-500 text-center mb-8">
            You have not added any doctors yet. Click the button below to add a
            doctor.
          </p>
          <button
            className="flex items-center px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600"
            onClick={handleAddDoctor}
          >
            <AiOutlineUserAdd className="mr-2" /> Add Doctor
          </button>

          {showModal && (
            <AddDoctorForm onClose={handleCloseModal} onReload={handleReload} />
          )}
        </div>
      )}
    </>
  );
        }          
export default Docters


//  <table className="table-auto w-full  border-collapse border border-slate-500 rounded-lg ">
            /* <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Doctor</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="border-separate">
                {doctors?.map((doctor, index) => (
                  <tr key={doctor?._id}>
                    <td className="border border-slate-600">{index + 1}</td>
                    <td className="my-3 flex items-centerborder ">
                      <div className="w-16 h-16 rounded-full overflow-hidden border">
                        <img
                          src={doctor?.image[0]?.url}
                          alt={doctor?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <p className="font-bold">{doctor?.name}</p>
                      </div>
                    </td>
                    <td className=" ">{doctor?.department}</td>
                    <td className=" px-3 py-3 flex items-center justify-center">
                      <div className="flex items-center bg-gray-100 rounded-full px-2 py-2">
                        <RiArrowRightSLine size={24} />
                      </div>
                      <button className="bg-gray-100 rounded-full px-2 py-2 ml-4">
                        <RiDeleteBin5Line size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */