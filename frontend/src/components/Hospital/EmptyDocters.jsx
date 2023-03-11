import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import empty from "../../assets/empty-folder.png";
import AddDoctorForm from "./docterForm/AddDoctorForm";

const EmptyDocters = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddDoctor = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pb-16">
      <img src={empty} alt="/" className="h-64 mb-4" />
      <p className="text-xl font-bold text-gray-800 mb-2">Empty Doctors List</p>
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

      {showModal && <AddDoctorForm onClose={handleCloseModal} />}
    </div>
  );
};

export default EmptyDocters;
