import React from "react";
import { BsDiagram2 } from "react-icons/bs";
import { GiMagickTrick } from "react-icons/gi";
import { IoMdFlashlight } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
const icons = [
  {
    icon: (
      <BsDiagram2 className="w-24 h-20 text-[#497faf] group-hover:rotate-12 transition-all ease-in duration-300 delay-50" />
    ),
    title: "We Coach easy",
    title2: "Learn the best Way",
    description:
      "Sit voluptatem accusantium doloremque  laudantium, totam remaperiam.",
  },
  {
    icon: (
      <GiMagickTrick className="w-20 h-20 text-[#497faf] group-hover:rotate-12 transition-all ease-in duration-300 delay-50" />
    ),
    title: "CREATIVE COURSE",
    title2: "Creative Coaching",
    description:
      "Sit voluptatem accusantium doloremque  laudantium, totam remaperiam.",
  },
  {
    icon: (
      <IoMdFlashlight className="w-20 h-20 text-[#497faf] group-hover:rotate-12 transition-all ease-in duration-300 delay-50" />
    ),
    title: "INNOVATIVE IDEA",
    title2: "Design your Course",
    description: "Sit voluptatem accusantium doloremque  um, totam remaperiam.",
  },
  {
    icon: (
      <MdManageAccounts className="w-20 h-20 text-[#497faf] group-hover:rotate-12 transition-all ease-in duration-300 delay-50" />
    ),
    title: "TRAINED FACILITY",
    title2: "Get Everything Right",
    description:
      "Sit voluptatem accusantium doloremque  laudantium, totam remaperiam.",
  },
];
const icon = () => {
  return (
    <>
      <main className="  ">
        <div className="md:flex grid grid-cols-1 gap-10 md:w-10/12 w-8/12 mx-auto py-16 ">
          {icons.map((val, i) => {
            return (
              <>
                <div className="w-fit h-80  flex flex-col justify-center items-center gap-4 py-6 lg:px-4 md:px-1 px-2 group bg-gray-50 shadow-md shadow-gray-200 rounded-lg  ">
                  <div>{val.icon}</div>
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="lg:text-lg uppercase md:text-md  text-[#497faf] group-hover:text-red-500 font-semibold transition-all ease-in duration-100 delay-75">
                      {val.title}
                    </h1>
                    <p className="text-sm font-extralight ">{val.title2}</p>
                  </div>
                  <div>
                    <p className="text-xs  text-[#86999b] text-center">
                      {val.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default icon;
