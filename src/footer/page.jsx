import React from "react";
import { SiWindows } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
const button = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Course",
  },
  {
    name: "News",
  },
  {
    name: "Shop",
  },
  {
    name: "Contact",
  },
];
const location = [
  {
    icon: <FaLocationDot className="w-6 h-6 text-[#497faf]" />,
    title: "Address:",
    locate: "103, C Block, West Street, New York, BMC, US",
  },
  {
    icon: <IoIosMail className="w-6 h-6 text-[#497faf]" />,
    title: "Mail: ",
    locate: "enquiries@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="w-6 h-6 text-[#497faf]" />,
    title: "Phone: ",
    locate: "020 65241 652145",
  },
];
const icon = [
  {
    iconss: <FaFacebookF />,
  },
  {
    iconss: <FaTwitter />,
  },
  {
    iconss: <FaInstagram />,
  },
  {
    iconss: <VscGithubAlt />,
  },
];
const footer = () => {
  return (
    <>
      <footer className="bg-gray-100 w-full ">
        <div className="bg-white w-full">
          <div className=" w-10/12 mx-auto h-fit py-5 md:flex grid grid-cols-3 gap-3 lg:justify-start justify-center items-center  md:gap-2 text-[#86999b]">
            {button.map((val, i) => {
              return (
                <button className="hover:text-red-500 transition-all duration-300 ease-in-out border-r-[1px] md:px-3  h-full  border-gray-200">
                  {val.name}
                </button>
              );
            })}
          </div>
        </div>
        <main className="w-10/12 mx-auto">
          <div className=" w-full lg:flex grid md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-0 gap-14  py-10">
            <div className=" lg:w-6/12 flex flex-col md:gap-8 gap-5 ">
              <h1 className="text-xl text-[#497faf] font-semibold">About</h1>{" "}
              <div className="flex gap-3">
                <SiWindows className="lg:w-10 w-32 h-7 text-[#497faf] rotate-45" />
                <p className="text-[#86999b] text-sm ">
                  Guru comes with powerful theme options, which empowers you to
                  quickly and easily build incredible store. Cras faucibus risus
                  varius.
                </p>
              </div>{" "}
            </div>
            <div className=" lg:w-3/12 flex md:gap-6 gap-2 flex-col lg:px-0 md:px-5 px-0 ">
              <div>
                <h1 className="text-xl text-[#497faf] font-semibold">
                  Contact us
                </h1>
              </div>
              <div className="">
                {location.map((val, i) => {
                  return (
                    <>
                      <div className="flex items-start gap-2  py-3 group">
                        <span className="text-[#86999b] cursor-pointer">
                          {val.icon}
                        </span>
                        <div>
                          <span className="font-semibold text-[#86999b] cursor-pointer">
                            {val.title}
                          </span>
                          <span className="text-sm text-[#86999b] group-hover:text-red-500 cursor-pointer">
                            {val.locate}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" lg:w-3/12 flex flex-col md:gap-8 gap-5 ">
              <div>
                <h1 className="text-xl text-[#497faf] font-semibold">
                  Follow us
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5  justify-start">
                  {icon.map((val, i) => {
                    return (
                      <>
                        <div className="bg-white  cursor-pointer hover:border-[1px] hover:border-[#497faf] transition-all ease-in-out duration-200 hover:scale-125 scale-90 w-10 h-10 rounded-full flex justify-center items-center">
                          {val.iconss}
                        </div>
                      </>
                    );
                  })}
                </div>
                <div>
                  <p className="text-[#86999b] italic">
                    We can be supported here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
};

export default footer;
