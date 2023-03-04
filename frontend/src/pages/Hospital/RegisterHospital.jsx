import { useState } from "react";
// import axios from '../../axios'
const RegisterHospital = () => {
  
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
        </div>
      </div>
    </div>

    // <section class="bg-gray-50 dark:bg-gray-900">
    //   <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <a
    //       href="#"
    //       class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    //     >
    //       <img
    //         class="w-8 h-8 mr-2"
    //         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
    //         alt="logo"
    //       />
    //       Flowbite
    //     </a>
    //     <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //           Create and account
    //         </h1>
    //         <form class="space-y-4 md:space-y-6" action="#">
    //           <div>
    //             <label
    //               for="email"
    //               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Your email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="name@company.com"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="password"
    //               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="••••••••"
    //               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="confirm-password"
    //               class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Confirm password
    //             </label>
    //             <input
    //               type="confirm-password"
    //               name="confirm-password"
    //               id="confirm-password"
    //               placeholder="••••••••"
    //               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="confirm-password"
    //               class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Confirm password
    //             </label>
    //             <input
    //               type="confirm-password"
    //               name="confirm-password"
    //               id="confirm-password"
    //               placeholder="••••••••"
    //               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="confirm-password"
    //               class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Confirm password
    //             </label>
    //             <input
    //               type="confirm-password"
    //               name="confirm-password"
    //               id="confirm-password"
    //               placeholder="••••••••"
    //               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required=""
    //             />
    //           </div>
    //           <div class="flex items-start">
    //             <div class="flex items-center h-5">
    //               <input
    //                 id="terms"
    //                 aria-describedby="terms"
    //                 type="checkbox"
    //                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
    //                 required=""
    //               />
    //             </div>
    //             <div class="ml-3 text-sm">
    //               <label
    //                 for="terms"
    //                 class="font-light text-gray-500 dark:text-gray-300"
    //               >
    //                 I accept the{" "}
    //                 <a
    //                   class="font-medium text-primary-600 hover:underline dark:text-primary-500"
    //                   href="#"
    //                 >
    //                   Terms and Conditions
    //                 </a>
    //               </label>
    //             </div>
    //           </div>
    //           <button
    //             type="submit"
    //             class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //           >
    //             Create an account
    //           </button>
    //           <p class="text-sm font-light text-gray-500 dark:text-gray-400">
    //             Already have an account?{" "}
    //             <a
    //               href="#"
    //               class="font-medium text-primary-600 hover:underline dark:text-primary-500"
    //             >
    //               Login here
    //             </a>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default RegisterHospital;
