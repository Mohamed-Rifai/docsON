import { useState } from "react";
import { UseErrorToast, UseSuccessToast } from "../../../hooks/useToast";
import formValidate from './validate'
import axios from "../../../axios";

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
  const [loading, setLoading] = useState(false)

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
    setLoading(true)

    const selectedDays = Object.keys(days).filter((day) => days[day]);

    //validating form values, it return a key value pair, and take value of object
    const error = Object.values(formValidate(name, department))[0];

    if (error) {
      setLoading(false)
      return UseErrorToast({ message: error });
    }

    // checking, is atleast one day selected?
    const isAtLeastOneDayChecked = Object.values(days).some(Boolean);

    if (!isAtLeastOneDayChecked) {
      setLoading(false)
      return UseErrorToast({ message: "Must select atleast one day" });
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("department", department);
    formData.append("days", JSON.stringify(selectedDays));
    formData.append("file", image);

   

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("HospitalToken"),
      },
    };
        
    axios
      .post("/hospital/add-doctor", formData, headers)
      .then((res) => {
       const response = Object.values(res.data)
       UseSuccessToast({ message: response[0]})
        setLoading(false)
 onClose();
      })
      .catch((err) => {
        console.log("catch working", err);
         const error = Object.values(err.response.data);
         UseErrorToast({ message: error[0] });
         setLoading(false)
      });

   
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
              id="file"
              name="file"
              onChange={handleImageChange}
              className="focus:outline-none"
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex justify-center w-full lg:w-auto"
              disabled={loading}
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="animate-spin w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : (
                "Submit"
              )}
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
