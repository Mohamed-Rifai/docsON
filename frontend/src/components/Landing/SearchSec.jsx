import React from 'react'

const SearchSec = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want dfk & dsfjlsd slkdff dfkf
          </h1>
          <p>fsdfj sdfjd sdfj kdsf kfksjdf iiia</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Docters Name"
            />
            <button className="text-black w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 bg-[#00df9a]"> 
              Search
            </button>
          </div>
          <p>
            sdff sdfk kdfjk dfsj sadi <span className="text-[#00df9a]">Privay Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchSec
