import { useState } from "react";
import { UseErrorToast } from "../../../hooks/useToast";
import formValidate from './validate'

const AddDoctorForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [days, setDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleDayChange = (e) => {
    const { name, checked } = e.target;
    setDays((prevDays) => ({
      ...prevDays,
      [name]: checked,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneDayChecked = Object.values(days).some(Boolean);
    const selectedDays = Object.keys(days).filter((day) => days[day]);

    if (!isAtLeastOneDayChecked) {
      return UseErrorToast({ message: "Must select atleast one day" });
    }

    console.log(JSON.stringify(selectedDays));

    const formData = new FormData();
    formData.append("name", name);
    formData.append("department", department);
    formData.append("image", image);
    formData.append("days", JSON.stringify(selectedDays));

    //validating form values, it return a key value pair, and take value of object

    const error = Object.values(formValidate(name, department))[0];
    console.log(error);
    if (error) {
     return  UseErrorToast({message: error})
    }

    onClose();
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className=" bg-white rounded-lg w-1/2 px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="department"
            >
              Department
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="department"
              type="text"
              name="department"
              placeholder="Enter department"
              value={department}
              onChange={handleDepartmentChange}
              required
            />
          </div>

          <div className="mb-4">
            <p className="block text-gray-700 font-bold mb-2">Available Days</p>
            <div className="flex flex-wrap">
              {Object.keys(days).map((day) => (
                <label key={day} className="mr-2 w-full sm:w-auto">
                  <input
                    type="checkbox"
                    name={day}
                    checked={days[day]}
                    onChange={handleDayChange}
                    className="mr-1"
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="focus:outline-none"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorForm;
