
import axios from "../../../axios";
import { UseErrorToast } from "../../../hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabetic characters are allowed")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required")
  .matches(/^\S+$/, "Whitespace not allowed"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"  )
     .required("Required")
     .matches(/^\S+$/, "Whitespace not allowed"),
});



const SignupForm = () => (
  <Form>
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
        Name
      </label>
      <Field
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
      />
      <ErrorMessage name="name" component="div" className="text-red-500" />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
        Email
      </label>
      <Field
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <ErrorMessage name="email" component="div" className="text-red-500" />
    </div>

    <div className="mb-4">
      <label
        className="block mb-2 font-bold text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <Field
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      />
      <ErrorMessage name="password" component="div" className="text-red-500" />
    </div>

    <div className="mb-6">
      <label
        className="block mb-2 font-bold text-gray-700"
        htmlFor="confirmPassword"
      >
        Confirm Password
      </label>
      <Field
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm your password"
      />
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className="text-red-500"
      />
    </div>

    <div className="flex flex-col items-center">
      <button
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Signup
      </button>

      <div className="flex items-center mt-4">
        <span className="mr-2 text-gray-600">
          Already have an account?
        </span>
        <Link to="/user/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </div>
    </div>
  </Form>
);

const UserSignup = () => { 
    const navigate = useNavigate();

    const handleSubmit = async (values) => {

        try {
           await axios.post("/auth/user-signup",values);
           
          navigate('/user/login')

        } catch (err) {
            console.log(err);
            const obj = err.response.data;
            const arr = [...Object.values(obj)];

            UseErrorToast({ message: arr[0] });                     
        }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Formik
          initialValues={{ name: "", email: "", password: "",confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {SignupForm}
        </Formik>
      </div>
    );
}

export default UserSignup









// import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
// import axios from '../../../axios'


// const UserSignup = () => {


//   const initialValues = {name : "" , email: "", password: "", confirmPassword: ""}
//   const [formData,setFormData] = useState(initialValues)
//   const [errors, setErrors] = useState(null)
//   const navigate = useNavigate()
//     const onChangeHandle = (e) => {
     
//         const {name, value} = e.target;
//         setFormData({...formData,[name]: value})
       
//     }

//     const handleSubmit = (e) =>{
        
//         e.preventDefault()  
//         axios
//           .post("auth/signup", formData)
//           .then((res) => {
//             console.log(res.data);
//             navigate("/login");
//           })
//           .catch((err) => {
//             console.log(err);
//             const obj = err.response.data;
//             const arr = [...Object.values(obj)];
//             setErrors(arr[0]);
//           });
       

//     }
    

//   return (
//     <div>
     

//       <div>
        
//         <h2>Sign Up</h2>
//               {errors && <p style={{ color: "red" }}>{errors}</p>}
//    <form onSubmit={handleSubmit}>
//         <label >Name</label>
//         <input 
//          name='name'
//          onChange={onChangeHandle}
//          type="text"
//          value={formData.name}
//         placeholder="Enter name" /> <br />
       
//               <label >Email</label>
//               <input
//                   name='email'
//                   type="email"
//                   value={formData.email}
//                   onChange={onChangeHandle}

//                   placeholder="Enter email" /> <br />

//               <label >Password</label>
//               <input
//                   name='password'
//                   type="password"
//                   value={formData.password}
//                   onChange={onChangeHandle}

//                   placeholder="Password"/>

//               <label >confirm Password</label>
//               <input
//                   name='confirmPassword'
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={onChangeHandle}
//                   placeholder="Confirm Password" /> 

//   <button type='submit'>Signup</button>
//               </form>
//       </div>

//       </div>
//   )
// }

// export default UserSignup



