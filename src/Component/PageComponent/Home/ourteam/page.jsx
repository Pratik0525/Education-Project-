"use client";
import React from "react";
import { BsDiagram2 } from "react-icons/bs";
import { GiMagickTrick } from "react-icons/gi";
import { IoMdFlashlight } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import Image from "next/image";
// import Team1 from "../../public/team1.jpg";
// import Team2 from "../../public/team2.jpg";
// import Team3 from "../../public/team3.jpg";
// import Team4 from "../../public/team4.jpg";
import Team1 from "../../../../../public/web.jpg";
import Team2 from "../../../../../public/Cyber.jpg";
import Team3 from "../../../../../public/uiux.jpg";
import Team4 from "../../../../../public/python.jpg";
import { useRouter } from "next/navigation";

const icons = [
  {
    image: Team1,
    name: "Web Developer",
    title2: "Founder",
  },
  {
    image: Team2,
    name: "Cyber Security",
    title2: "Co-Director",
  },
  {
    image: Team3,
    name: "UI/UX",
    title2: "Marketing Director",
  },
  {
    image: Team4,
    name: "python",
    title2: "Art Director",
  },
];
const ourteam = () => {
  const router = useRouter();
  return (
    <>
      <main className=" bg-gray-50 w-full py-5">
        <div className=" w-10/12 mx-auto">
          <div className="flex md:justify-start justify-center ">
            <h1 className="text-2xl font-serif ">OUR TEAM</h1>
          </div>
          <div className="">
            <div className="md:flex md:justify-between grid grid-cols-1  gap-10  py-9 ">
              {icons.map((val, i) => {
                return (
                  <>
                    <div className="w-fit h-80  flex flex-col justify-center items-center gap-4 shadow-lg shadow-gray-200  group bg-gray-50 rounded-lg pb-8">
                      <div className=" text-[#497faf]  transition-all ease-in duration-300 delay-50">
                        <Image
                          src={val.image}
                          width={500}
                          height={500}
                          alt="image of a man"
                          className="rounded-t-lg h-60 object-cover "
                        />
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <h1
                          onClick={() => router.push("/mickeyrorey")}
                          className=" cursor-pointer text-xl font-semibold text-[#497faf] group-hover:text-red-500 transition-all ease-in duration-100 delay-75"
                        >
                          {val.name}
                        </h1>
                        <p className="text-sm font-extralight ">{val.title2}</p>
                      </div>
                    </div>
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

export default ourteam;
