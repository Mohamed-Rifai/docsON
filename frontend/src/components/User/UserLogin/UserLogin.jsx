// import axios from "../../../axios";
// import { UseErrorToast } from "../../../hooks/useToast";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const UserLogin = () => {
//   const initialState = { email: "", password: "" };
//   const [formData, setFormData] = useState(initialState);
//   const navigate = useNavigate();

//   const onChangeHandle = (event) => {
//     const { name, value } = event.target;

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("/auth/login", {
//         email: formData.email,
//         password: formData.password,
//       });
//       console.log(response);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       const obj = err.response.data;
//       const arr = [...Object.values(obj)];

//       UseErrorToast({ message: arr[0] });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-4">
//           <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={onChangeHandle}
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             className="block mb-2 font-bold text-gray-700"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={onChangeHandle}
//           />
//         </div>

//         <div className="flex flex-col items-center">
//           <button
//             className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Login
//           </button>

//           <div className="flex items-center mt-4">
//             <span className="mr-2 text-gray-600">Don't have an account?</span>
//             <Link to="/signup" className="text-blue-500 hover:text-blue-700">
//               Signup
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserLogin;


import axios from "../../../axios";
import { UseErrorToast } from "../../../hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!!!"),
  password: Yup.string().required("Required!!!"),
});

const LoginForm = () => (
  <Form>
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

    <div className="mb-6">
      <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
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

    <div className="flex flex-col items-center">
      <button
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Login
      </button>

      <div className="flex items-center mt-4">
        <span className="mr-2 text-gray-600">Don't have an account?</span>
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Signup
        </Link>
      </div>
    </div>
  </Form>
);

const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
    const response =  await axios.post("/auth/login", values);
      const token = response.data.token;
      localStorage.setItem("UserToken", token);
      navigate("/");
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
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {LoginForm}
      </Formik>
    </div>
  );
};

export default UserLogin;
