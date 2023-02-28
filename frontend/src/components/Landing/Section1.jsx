import React from "react";
import Laptop from "../../assets/laptop.jpg";
const Section1 = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">
            collect uyour favaiforaite hospitals
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            full details of docters and hospitals
          </h1>
          <p>
            lorem iprsu sfdkj dsfjsjfj sfkjsfie sdkjfei iiersa driai dsfj
            dfjsjdffjiedsfs sdkfjije affaie rifai fairfa rifaei dfdrei fai eisof
            aaaadlsfi muhammed rifai dci dshafi ardshd ashfaq shifin
            dfjlksjdfdskfd
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
            find
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
