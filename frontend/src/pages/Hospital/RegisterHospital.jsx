import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterHospital = () => {

  const intialValues = {
    name:'',email:'',password:'',
    confirmPassword:'',place:'',
  }
  
  const [formName, setName] = useState("");
  const [formEmail, setEmail] = useState("");
  const [formPassword, setPassword] = useState("");
  const [formConfirmPassword, setConfirmPassword] = useState("");
  const [formPlace, setPlace] = useState("");
  const [formState, setState] = useState("");
  const [formZip, setZip] = useState("");
  const [formPhone, setPhone] = useState("");
  const [formPhoto, setPhoto] = useState("");

   

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Register your Hospital
        </h2>
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-gray py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-email"
                  type="email"
                  name="email"
                  value={formEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rifai@gmail.com"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Hospital Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="name"
                  value={formName}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Hospital"
                />
              </div>
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-password"
                  type="password"
                  name="password"
                  value={formPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-confirmPassword"
                  type="password"
                  value={formConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  placeholder="******"
                />
              </div>
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-phone"
                  type="text"
                  name="phone"
                  value={formPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-image"
                >
                  Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-image"
                  name="image"
                  type="file"
                  value={formPhoto}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-place"
                >
                  Place
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-place"
                  type="text"
                  name="place"
                  value={formPlace}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Albuquerque"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    type="text"
                    name="state"
                    value={formState}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Zip
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  name="zip"
                  value={formZip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="90210"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-0 mt-10 mb-5">
              <button
                className="w-full px-5  py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 uppercase tracking-wide text-xs font-bold mb-2"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          Already have an account? <Link to='/hospital/login' className="text-blue-800 font-bold">Login</Link>
        </div>
      </div>
    </div>

   
  );
};

export default RegisterHospital;
