import Typed from "react-typed";


const Banner = () => {
  return (
    <div className="text-white ">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2">Growing data with loij</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          book online
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Bio", "sass", "olkka"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          welcome to koottilangadinnnjii
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Banner;
