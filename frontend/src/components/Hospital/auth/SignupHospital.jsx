import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios";
import { UseErrorToast } from "../../../hooks/useToast";
import Validate from "./Validate";


const SignupHospital = () => {

 const intialValues = {
     name: "",
     email: "",
     password: "",
     confirmPassword: "",     
     place: "",
     state: "",
     phone: "",
     zip: "",
     file: null,
   };
   
    const [formData, setFormData] = useState(intialValues);
     const [loading, setLoading] = useState(false);
    const [errors, setErrors]  = useState({})
    const navigate = useNavigate()
   

 useEffect(() => {

  const token = localStorage.getItem("HospitalToken");
  if(token){

    navigate('/hospital/home')
  }
 })



  const onChangeHandle = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


    const onFileChange = (e) => {
        setFormData({ ...formData,
         file:e.target.files[0]
        })
    }
   
   
   const handleSubmit = (e) => {
     e.preventDefault();
      setLoading(true);
    
     const data = new FormData();

     data.append("name", formData.name);
     data.append("email", formData.email);
     data.append("password", formData.password);
     data.append("confirmPassword", formData.confirmPassword);
     data.append("place", formData.place);
     data.append("state", formData.state);
     data.append("phone", formData.phone);
     data.append("zip", formData.zip);
     data.append("file", formData.file);

  
     const errors = Validate(formData);

     if (Object.keys(errors).length !== 0) {
       setErrors(errors);
       setLoading(false);
     } else {

      setErrors('')

       axios
         .post("/auth/hospital-signup", data, {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         })
         .then((res) => {
           console.log(res);
           navigate('/hospital/login')
         })
         .catch((err) => {
           const error = Object.values(err.response.data); 
           UseErrorToast({message: error[0]})

            setLoading(false);
         });
         
     }
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
                     type="text"
                     name="email"
                     value={formData.email}
                     onChange={onChangeHandle}
                     placeholder="rifai@gmail.com"
                   />
                   {errors.email && (
                     <small className=" text-red-600">
                       {errors.email}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     value={formData.name}
                     onChange={onChangeHandle}
                     placeholder="Hospital"
                   />
                   {errors.name && (
                     <small className="ms-2 text-red-600">
                       {errors.name}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     value={formData.password}
                     onChange={onChangeHandle}
                     placeholder="******"
                   />
                   {errors.password && (
                     <small className="ms-2 text-red-600">
                       {errors.password}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     value={formData.confirmPassword}
                     onChange={onChangeHandle}
                     name="confirmPassword"
                     placeholder="******"
                   />
                   {errors.confirmPassword && (
                     <small className="ms-2 text-red-600">
                       {errors.confirmPassword}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     value={formData.phone}
                     onChange={onChangeHandle}
                     placeholder="Phone number"
                   />
                   {errors.phone && (
                     <small className="ms-2 text-red-600">
                       {errors.phone}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     name="file"
                     type="file"
                     onChange={onFileChange}
                   />
                   {errors.file && (
                     <small className="ms-2 text-red-600">
                       {errors.file}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                     value={formData.place}
                     onChange={onChangeHandle}
                     placeholder="Albuquerque"
                   />
                   {errors.place && (
                     <small className="ms-2 text-red-600">
                       {errors.place}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
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
                       value={formData.state}
                       onChange={onChangeHandle}
                       placeholder="state"
                     />
                     {errors.state && (
                       <small className="ms-2 text-red-600">
                         {errors.state}
                         {window.scrollTo({ top: 60, behavior: "smooth" })}
                       </small>
                     )}
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
                     value={formData.zip}
                     onChange={onChangeHandle}
                     placeholder="90210"
                   />
                   {errors.zip && (
                     <small className="ms-2 text-red-600">
                       {errors.zip}
                       {window.scrollTo({ top: 60, behavior: "smooth" })}
                     </small>
                   )}
                 </div>
               </div>
               <div className="flex flex-wrap -mx-0 mt-10 mb-5">
                 <button
                   className={` w-full px-5  py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 uppercase tracking-wide text-xs font-bold mb-2 ${
                     loading ? "flex justify-center cursor-not-allowed opacity-25" : ""
                   }`}
                   type="submit"
                 >
                   {loading ? (
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth={1.5}
                       stroke="currentColor"
                       className="flex justify-center w-6 h-6 animate-spin items-center"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                       />
                     </svg>
                   ) : (
                     "Register"
                   )}
                 </button>
               </div>
             </form>
             Already have an account?
             <Link to="/hospital/login" className="text-blue-800 font-bold">
               Login
             </Link>
           </div>
         </div>
       </div>
     );
   }
   
export default SignupHospital
   