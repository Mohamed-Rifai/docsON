import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios  from "../../axios";



const Cards =  () => {
const [datas, setDatas] = useState([])
 


useEffect(() => {

   axios.get("/hospital/gethospitals").then((res) => {
    setDatas(res.data)
   });

},[])

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {datas.map((data) => (
          <div
            key={data._id}
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
          >
            <img
              className="w-50 mx-auto mt-[2rem] bg-white"
              src={data.photo}
              alt="/"
            />

            <h2 className="text-2xl font-bold text-center py-8">{data.name}</h2>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8">{data.city}</p>
            </div>
            <Link to={`/hospitalview/${data._id}`}>
              <button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-[#00df9a]">
                Visit
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
