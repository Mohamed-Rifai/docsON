
import { useState } from "react";
import { AiOutlinePlus, AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import EmptyDocters from "./EmptyDocters";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    department: "Cardiology",
    phone: "(123) 456-7890",
    image: "https://via.placeholder.com/48",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    department: "Pediatrics",
    phone: "(123) 456-7890",
    image: "https://via.placeholder.com/48",
  },
  {
    id: 3,
    name: "Dr. David Johnson",
    department: "Oncology",
    phone: "(123) 456-7890",
    image: "https://via.placeholder.com/48",
  },
];

const Docters = () => {
  const [showAddDoctor, setShowAddDoctor] = useState(false);

  const handleAddDoctor = () => {
    setShowAddDoctor(!showAddDoctor);
  };

  return (
    <>
      {doctors.length !== 0 ? (
        <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <div className="flex justify-center  mb-6">
            <h2 className="text-xl font-bold text-gray-800">Doctors List</h2>
            <button
              className="flex items-center px-3 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 ml-44"
              onClick={handleAddDoctor}
            >
              <AiOutlinePlus className="mr-2 " /> Add Doctor
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors?.map((doctor) => (
                  <tr key={doctor?.id}>
                    <td className="border px-4 py-2">{doctor?.id}</td>
                    <td className="border px-4 py-2 rounded-full">
                      <img
                        src={doctor?.image}
                        alt={doctor?.name}
                        className="w-8 h-8 rounded-full"
                      />
                    </td>
                    <td className="border px-4 py-2">{doctor?.name}</td>
                    <td className="border px-4 py-2">{doctor?.department}</td>
                    <td className="border px-4 py-2">{doctor?.phone}</td>
                    <td className="border px-4 py-2">
                      <button className="mr-2">
                        <AiOutlineEye />
                      </button>
                      <button>
                        <AiOutlineEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
       <EmptyDocters/>
      )}
    </>
  );
        }          
export default Docters