import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";

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
const fofollow = () => {
  return (
    <>
      <div className=" lg:w-3/12 flex flex-col md:gap-8 gap-5 ">
        <div>
          <h1 className="text-xl text-[#497faf] font-semibold">Follow us</h1>
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
            <p className="text-[#86999b] italic">We can be supported here!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default fofollow;
