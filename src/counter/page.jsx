import React from "react";
import { MdGroups } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
const number = [
  {
    icon: (
      <MdGroups className="text-[#497faf] w-8 h-8 group-hover:rotate-360 transition-all delay-100 duration-300 ease-in-out" />
    ),
    num: "3000",
    description: "Learners Educated",
  },
  {
    icon: (
      <FaTrophy className="text-[#497faf] w-8 h-8 group-hover:rotate-360 transition-all delay-100 duration-300 ease-in-out" />
    ),
    num: "250",
    description: "Languages Available",
  },
  {
    icon: (
      <IoFlagSharp className="text-[#497faf] w-8 h-8 group-hover:rotate-360 transition-all delay-100 duration-300 ease-in-out" />
    ),
    num: "75",
    description: "Categories Listed",
  },
  {
    icon: (
      <LiaBookSolid className="text-[#497faf] w-8 h-8 group-hover:rotate-360 transition-all delay-100 duration-300 ease-in-out" />
    ),
    num: "1530",
    description: "Courses Available",
  },
];
const counters = () => {
  return (
    <>
      <div className="bg-[#497faf] w-full h-fit  ">
        <div className=" w-10/12 mx-auto  md:flex grid grid-cols-1 gap-10 md:gap-0 md:justify-between  md:flex-row   py-5 ">
          {number.map((val, i) => {
            return (
              <>
                <div className="w-full  flex justify-center items-center flex-col gap-1 py-3 group   ">
                  <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
                    {val.icon}
                  </div>
                  <div className="text-white text-3xl">{val.num}</div>
                  <div>
                    <p className="text-md text-white font-extralight">
                      {val.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default counters;
