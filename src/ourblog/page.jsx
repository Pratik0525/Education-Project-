import Image from "next/image";
import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import img from "../../public/blog3.jpg";
import imgs from "../../public/blog4.jpg";

const blog = [
  {
    day: "20",
    date: "May 2016",
    icon: <FiMessageSquare />,
    num: "0",
    images: img,
    heading: "Five Training Roles of the CEO",
    para: "Cras venenatis erat ac massa ultricies, sollici tudin ullamc orper justo elementum. Donec eu molestie odio, et congue enim....",
    icon2: <PiLinkSimpleBold className="text-[#36363699] text-lg " />,
    icon3: <IoPerson />,
    midname: "Ram",
    lastname: "Design",
  },
  {
    day: "20",
    date: "May 2016",
    icon: <FiMessageSquare />,
    num: "0",
    images: img,
    heading: "Five Training Roles of the CEO",
    para: "Cras venenatis erat ac massa ultricies, sollici tudin ullamc orper justo elementum. Donec eu molestie odio, et congue enim....",
    icon2: <PiLinkSimpleBold className="text-[#36363699] text-lg " />,
    icon3: <IoPerson />,
    midname: "Ram",
    lastname: "Design",
  },
];
const ourblog = () => {
  return (
    <>
      <main className="w-full bg-gray-100 h-fit">
        <div className=" w-10/12 mx-auto py-10">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-semibold">OUR BLOG</h1>
          </div>
          <div className=" pt-10  ">
            <div className="md:flex grid lg:gap-10 md:gap-4 gap-10 ">
              {blog.map((val, i) => {
                return (
                  <>
                    <main className="  md:flex flex-col md:flex-row justify-center  md:gap-2 md:w-full w-full mx-auto    ">
                      <div className="lg:w-20 md:w-28 w-fit  text-white md:flex-col flex    ">
                        <div className=" w-32 lg:w-20 md:w-20 bg-[#497faf] md:rounded-t-lg rounded-t-md px-1  flex flex-col font-semibold justify-center items-center h-14 text-sm ">
                          <p>{val.day}</p>
                          <span className="">{val.date}</span>
                        </div>
                        <div className=" bg-red-500 sm:rounded-b-lg rounded-t-md px-1 lg:w-20 md:w-20 flex justify-center items-center gap-1 text-lg font-semibold h-14 w-full ">
                          {val.icon}
                          <p>{val.num}</p>
                        </div>
                      </div>
                      <div
                        className="   h-fit  flex flex-col lg:gap-5 gap-5 md:gap-2
                       shadow-lg shadow-[#d7d7d7] rounded-lg w-full   "
                      >
                        <div>
                          <Image
                            src={val.images}
                            width={400}
                            height={400}
                            className="lg:h-96 lg:w-full w-full  h-60  rounded-t-lg object-cover"
                          />
                        </div>
                        <div className="pl-4">
                          <h1 className="lg:text-lg text-lg md:text-sm text-[#497faf]">
                            {val.heading}
                          </h1>
                        </div>
                        <div className="px-4">
                          <p className="text-xs text-[#86999b] ">{val.para}</p>
                        </div>
                        <div className="  h-14 flex px-4 justify-between items-center  border-t-[1px] border-gray-200  lg:px-10  md:px-4">
                          <div className=" h-full  flex justify-center items-center w-fit">
                            {val.icon2}
                          </div>
                          <div className=" gap-1 text-[#36363699]  flex justify-center items-center h-full md:px-4 px-0 w-fit ">
                            {val.icon3}
                            <p>{val.midname}</p>
                          </div>
                          <div className=" flex justify-center items-center h-full ">
                            <p className="text-[#36363699] ">{val.lastname}</p>
                          </div>
                        </div>
                      </div>
                    </main>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ourblog;
