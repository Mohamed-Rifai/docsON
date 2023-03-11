
import {  useEffect, useState } from "react";
import {
  RiArrowRightSLine,
  RiDeleteBin5Line,
} from "react-icons/ri";
import AddDoctorForm from "./docterForm/AddDoctorForm";
import EmptyDocters from "./EmptyDocters";
import axios from '../../axios'


const Docters = () => {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false)
  const [doctors, setDoctors] = useState([])
  
  useEffect(()=> {

    axios.get('/hospital/getAllDoctors',{
      headers: {
        Authorization: localStorage.getItem("HospitalToken")
      },
    })
    .then((res) => {
      setDoctors(res.data)
     
    })
    .catch((err) => {
      console.log('catch working****',err);
    })

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
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Doctors List</h2>
            <button
              className="flex items-center px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 ml-52"
              onClick={handleAddDoctor}
            >
              <span className="font-bold">&#43;</span> Add Doctor
            </button>
            {showModal &&
             <AddDoctorForm 
             onClose={handleCloseModal}
              onReload={handleReload} 
              />}
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Doctor</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors?.map((doctor) => (
                  <tr key={doctor?._id}>
                    <td className="border px-6 py-4">{doctor?.id}</td>
                    <td className="border px-6 py-4 flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={doctor?.image[0]?.url}
                          alt={doctor?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <p className="font-bold">{doctor?.name}</p>
                        <p className="text-gray-500">{doctor?.specialty}</p>
                      </div>
                    </td>
                    <td className="border px-6 py-4">{doctor?.department}</td>
                    <td className="border px-6 py-4 flex items-center justify-center">
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
            </table>
          </div>
        </div>
      ) : (
        <EmptyDocters />
      )}
    </>
  );
        }          
export default Docters