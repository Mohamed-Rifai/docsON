import { AiOutlineUserAdd } from "react-icons/ai";
import emptyDoctersPage from "../../assets/empty-folder.png";

const EmptyDocters = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pb-16">
      <img
        src={emptyDoctersPage}
        alt="Empty Doctors List"
        className="h-64 mb-4"
      />
      <p className="text-xl font-bold text-gray-800 mb-2">Empty Doctors List</p>
      <p className="text-gray-500 text-center mb-8">
        You have not added any doctors yet. Click the button below to add a
        doctor.
      </p>
      <button className="flex items-center px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600">
        <AiOutlineUserAdd className="mr-2" /> Add Doctor
      </button>
    </div>
  );
};

export default EmptyDocters;
