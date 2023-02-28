import { useEffect } from "react";




const Cards = () => {



useEffect(() => {


},[])

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-50 mx-auto mt-[2rem] bg-white"
            src="https://image.cnbcfm.com/api/v1/image/106473194-1585903365063gettyimages-1208304527.jpg?v=1585903822&w=740&h=416&ffmt=webp&vtcrop=y"
            alt="/"
          />

          <h2 className="text-2xl font-bold text-center py-8">sfddf dsfdks</h2>
          {/* <p className="text-center text-4xl font-bold">1133</p> */}
          <div className="text-center font-medium">
            {/* <p className="py-2 border-b mx-8 mt-8">sfsf dff fdf</p>
            <p className="py-2 border-b mx-8">sfsf dff fdf</p> */}
            <p className="py-2 border-b mx-8">sfsf dff fdf</p>
          </div>
          <button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-[#00df9a]">
            Visit
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default Cards;
