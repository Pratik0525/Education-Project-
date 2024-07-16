import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Team1 from "../../public/team1.jpg";
import Team2 from "../../public/team2.jpg";
import Team3 from "../../public/team3.jpg";

const feature = [
  {
    imagess: Team1,
    title: "Food",
    description: " Fitness Sport Training Gym",
    button: "Free",
    para: "3 Lessons",
  },
  {
    imagess: Team2,
    title: "Food",
    description: " Fitness Sport Training Gym",
    button: "Free",
    para: "3 Lessons",
  },
  {
    imagess: Team3,
    title: "Food",
    description: " Fitness Sport Training Gym",
    button: "Free",
    para: "3 Lessons",
  },
];
const ourfeature = () => {
  return (
    <>
      <main className="bg-gray-100 py-10">
        <div className=" w-10/12 mx-auto flex justify-between items-center py-5">
          <div className="md:text-xl text-lg font-semibold  ">
            <h1>OUR FEATURED COURSE</h1>
          </div>
          <div className=" flex ">
            <IoIosArrowBack className="md:w-10 w-8 h-10 " />
            <IoIosArrowForward className="md:w-10 w-8 h-10 " />
          </div>
        </div>
        <div className="md:w-10/12 w-10/12 mx-auto  md:flex md:justify-between grid grid-cols-1 gap-10 md:gap-4 lg:gap-0">
          {feature.map((val, i) => {
            return (
              <div className=" bg-white lg:w-80 md:w-60 flex flex-col gap-3 pb-7 rounded-lg shadow-lg shadow-gray-300">
                <div>
                  <Image
                    src={val.imagess}
                    className="rounded-t-lg md:w-60 lg:w-80  "
                  />
                </div>
                <div className="lg:px-5 md:px-2 px-4 py-3">
                  <h1 className="text-red-500">{val.title}</h1>
                  <p className="text-[#497faf] font-medium lg:text-lg md:text-md">
                    {val.description}
                  </p>
                </div>
                <div className="flex justify-between items-center lg:px-5 md:px-2 px-4">
                  <button className="w-16 h-8 bg-[#497faf] text-white font-semibold rounded-md">
                    {val.button}
                  </button>
                  <p className="text-gray-400">{val.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ourfeature;
