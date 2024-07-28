import React from "react";

const afterlanding = () => {
  return (
    <div className="flex flex-col gap-7 py-5 bg-gray-100 shadow-md shadow-gray-200 ">
      <div className="w-10/12 mx-auto">
        <p className="lg:text-xl md:text-lg font-semibold text-[#497faf]">
          Be the first to know about new Course and Discounts: Subscribe to
          Newsletter
        </p>
      </div>
      <div className="md:flex grid grid-cols-1 w-10/12 mx-auto md:gap-10 gap-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Name"
          className="border-2  md:w-96 w-full h-10 bg-gray-200 pl-2 placeholder:text-gray-400 rounded-md"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Email"
          className="border-2  md:w-96 w-full h-10 bg-gray-200 pl-2 placeholder:text-gray-400 rounded-md"
          required
        />
        <button className="h-10 lg:w-28 md:w-32 w-full bg-[#497faf] hover:bg-red-500 transition-all ease-in-out duration-600 delay-100 text-white font-semibold  rounded-md md:text-sm lg:text-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default afterlanding;
