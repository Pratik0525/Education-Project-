import React from "react";
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
const topfooter = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto h-fit py-5 md:flex grid grid-cols-3 gap-3 lg:justify-start justify-center items-center  md:gap-2 text-[#86999b]">
        {button.map((val, i) => {
          return (
            <button className="hover:text-red-500 transition-all duration-300 ease-in-out border-r-[1px] md:px-3  h-full  border-gray-200">
              {val.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default topfooter;
