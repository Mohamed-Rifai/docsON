import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { FaHospital } from "react-icons/fa";
import axios  from "../../axios";



const Cards =  () => {
const [datas, setDatas] = useState([])
 


useEffect(() => {

   axios.get("/hospital/gethospitals").then((res) => {
    setDatas(res.data)
   });

},[])


  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {datas?.map((data) => (
          <div
            key={data?._id}
            className="w-full bg-gray-50 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 group"
          >
            <div className="h-48 relative">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={data?.image[0]?.url}
                alt=""
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link to={`/user/hospitalview/${data._id}`}>
                  <button className="text-white rounded-md font-bold py-4 px-8 bg-[#00df9a] hover:bg-transparent text-lg hover:text-[#18ab7d] border">
                    <FaHospital className="mr-2 inline-block" />
                    Visit
                  </button>
                </Link>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center py-3 mt-8">
              {data?.name} Hospital
            </h2>
            <div className="text-center font-medium">
              <p className="py-1 border-b mx-8 mb-5">({data?.place})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
