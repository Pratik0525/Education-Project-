import React from "react";

const readmore = () => {
  return (
    <>
      <main className=" w-full py-16 mt-10 bg-gray-100">
        <div className=" w-10/12 mx-auto flex flex-col justify-center items-center gap-7 bg-white py-10 border-[1px] border-gray-100 shadow-xl shadow-gray-200">
          <h1
            align="center"
            className="lg:text-xl text-lg  w-full font-semibold text-black md:text-[#497faf]  flex justify-center items-center"
          >
            The Best Courses like Elsewhere. Come get trained. Guaranteed
            Placements.
          </h1>
          <p
            align="center"
            className="md:text-lg text-md md:text-black text-[#497faf] w-full "
          >
            You’ll get what you came for!
          </p>
          <button className="w-fit md:h-10 h-8  md:text-md text-sm  bg-[#497faf] text-white font-semibold flex justify-center items-center rounded-lg p-2 hover:bg-red-500 transition-all duration-300 ease-in-out">
            {" "}
            Read More
          </button>
        </div>
      </main>
    </>
  );
};

export default readmore;
