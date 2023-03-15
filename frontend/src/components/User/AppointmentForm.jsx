import React from 'react'

import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom'
import axios from "../../axios";
import {razorpayKey} from '../../Constants/Constants'

const AppointmentForm = () => {
  const initialState = {name: "", place: "", phone: "", age:"", time:"",}
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()
  const location = useLocation()

  // find the prev path
  const prevPage = location?.state?.from
  


  const handleChange = (e) => {
    
    const {name, value} = e.target
    
    setFormData((prevState => ({...prevState, [name]:value})))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("user/appointment-payment", formData, {
        headers: {
          Authorization: localStorage.getItem("UserToken"),
        },
      })
      .then((response) => {
       console.log(response.data);
        verifyPayment(response.data.data)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    
    
  };

  const verifyPayment = (data) => {
    const option = {
      key: razorpayKey,
      amount: data.amount,
      currency: data.currency,
      name: "hello",
      description: "Test Transaction",
      image: "https://dummyimage.com/16:9x1080/",
      order_id:data.id,
      handler: async (res) => {
        try {
          
          const {data} = await axios.post('/user/verifyPayment', res)
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme:{
        color: "#3399cc",

      }
    };
    const rzp1 = new window.Razorpay(option);
    rzp1.open();
  }

  const handleCancel = () => {
    
    navigate(prevPage)
    
  };

  return (
    <div className="bg-white p-6 ">
      <h1 className="text-xl font-bold mb-4 text-center">Appointment Form</h1>
      <div className="flex justify-center items-center p-5 border">
        <div className="bg-gray-300 w-1/2 p-5 rounded-sm">
          <form className="p-8" onSubmit={handleSubmit}>
            <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-gray-300 border rounded-md py-2 px-4 w-full"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="place">
                  Place
                </label>
                <input
                  className="border-gray-300 border rounded-md py-2 px-4 w-full"
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border-gray-300 border rounded-md py-2 px-4 w-full"
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="age">
                  Age
                </label>
                <input
                  className="border-gray-300 border rounded-md py-2 px-4 w-full"
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="time">
                  Time
                </label>
                <select
                  className="border-gray-300 border rounded-md py-2 px-4 w-full appearance-none"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">-- Select a time --</option>
                  <option value="9am">9am</option>
                  <option value="10am">10am</option>
                  <option value="11am">11am</option>
                  <option value="12pm">12pm</option>
                  <option value="1pm">1pm</option>
                  <option value="2pm">2pm</option>
                  <option value="3pm">3pm</option>
                  <option value="4pm">4pm</option>
                  <option value="5pm">5pm</option>
                </select>
              </div>

              <div className="mb-4 mx-auto">
                <label className="block font-medium mb-2" htmlFor="fee">
                  Appointment Fee
                </label>
                <p className="font-medium">${100}</p>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
              <button
                className="ml-4 border border-blue-500 hover:bg-blue-500 text-blue-500 font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;