import React from 'react'

const HomeContent = () => {
  return (
    <div className="text-white ">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2">Welcome to docsOn</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black">
          Laksore Hospital
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-800">
            Fast, flexible financing for
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          welcome DocsOn 
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Book now
        </button>
      </div>
    </div>
  );
}

export default HomeContent
