"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
const Links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/shop",
    title: "Shop",
  },
  {
    href: "/",
    title: "Pages",
  },
  {
    href: "/",
    title: "Courses",
  },
  {
    href: "/",
    title: "News",
  },
  {
    href: "/",
    title: "Gallery",
  },
  {
    href: "/",
    title: "Community",
  },
];
const navigation = () => {
  const [Prev, setPrev] = useState(false);
  return (
    <nav>
      <div className="bg-[#497faf]">
        <div className=" md:flex sm:flex-col md:flex-row py-2 justify-between  items-center w-10/12 mx-auto h-fit ">
          <div className=" flex text-[14px] items-center md:text-md lg:text-[16px] md:gap-2 gap-0 text-white ">
            <div>
              <p>Create your own custom course.</p>
            </div>
            <div>
              <Link href="/" className="underline sm:text-xs md:text-[16px]">
                Learn How?
              </Link>
            </div>
          </div>
          <div className="text-center md:text-md lg:text-[16px] text-[14px]">
            <p className="text-white">Login / Register</p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 h-20 ">
        <div className=" flex justify-between  items-center w-10/12  mx-auto  h-full ">
          <div>
            <p className="lg:text-4xl md:text-3xl text-4xl ">
              <Link href="/">Guru</Link>
            </p>
          </div>
          <div className=" hidden md:flex ">
            <div className=" flex lg:gap-10 md:gap-6 uppercase font-medium text-sm  ">
              {Links.map((val, i) => {
                return <Link href={val.href}>{val.title}</Link>;
              })}
            </div>
          </div>
          <div>
            <IoIosMenu className="text-3xl flex md:hidden" />
          </div>
        </div>
      </div>
      {/* Sidebar */}
      {/* <div className="md:hidden flex ">
        <div className="h-96 w-full bg-[#497faf]   ">
          <div className="text-white flex flex-col justify-center items-center w-full  ">
            {Links.map((val, i) => {
              return (
                <Link
                  key={i}
                  href={val.href}
                  align="center"
                  className=" text-lg py-3 border-2 px-6 hover:text-[#fee6af] w-full transition-all delay-100 duration-300 ease-in-out "
                >
                  {val.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default navigation;
