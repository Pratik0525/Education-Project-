import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import meeting from "../../../../../public/upcomingevent.jpg";
const upcomingevent = () => {
  return (
    <>
      <main className="py-20">
        <div className=" w-10/12 mx-auto  flex flex-col gap-4">
          <div className=" flex justify-between items-center  ">
            <div className="md:text-xl text-lg font-semibold  ">
              <h1>UPCOMING EVENTS</h1>
            </div>
            <div className=" flex ">
              <IoIosArrowBack className="md:w-10 w-8 h-10 text-[#497faf] cursor-pointer" />
              <IoIosArrowForward className="md:w-10 w-8 h-10 text-[#497faf] cursor-pointer" />
            </div>
          </div>

          <div className="md:flex grid  gap-3  ">
            <div className="  lg:w-2/12 md:w-3/12  ">
              <Image
                src={meeting}
                width={100}
                height={200}
                alt="team meeting"
                className="object-cover md:w-52 lg:h-28 md:h-40 w-52 h-28"
              />
            </div>
            <div className="flex flex-col gap-3 p-2 w-full ">
              <div className="md:flex grid md:gap-2 gap-0 items-center">
                <h1 className="font-semibold md:text-lg text-xl ">
                  Free Seminar at London
                </h1>
                <span className="font-thin italic text-[#323333]">
                  17 Sep 2019
                </span>
              </div>
              <div>
                <p className="text-[#86999b] ">
                  Pellentesque ut porta libero. Curabitur non auctor nisi.
                  Maecenas turpis diam, egestas eget dictum id, condimentum
                  nunc. Fusce tempor in purus sed mattis. Nulla cursus eleifend
                  eros sit amet tempor. Donec nisl lacus, ornare...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default upcomingevent;
