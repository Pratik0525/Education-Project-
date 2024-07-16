import Image from "next/image";
import React from "react";
import imgss from "/public/team1.jpg";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
const ico = [
  {
    iconss: <FaArrowCircleRight />,
    title: "Role :",
    des: "Founder",
  },
];
const mickeyrorey = () => {
  return (
    <>
      <main className="bg-pink-500 w-11/12 mx-auto">
        <div className="flex ">
          <div className="w-3/12 bg-cyan-400 px-4 grid gap-4">
            <div>
              <h1 className="text-2xl font-semibold">About : Mickey Rorey</h1>
            </div>
            <div>
              <Image
                src={imgss}
                width={200}
                heigth={200}
                alt="Boy in Meeting"
              />
            </div>{" "}
            <div className="text-yellow-500 text-xl flex gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </div>
            <div>
              <p className="text-[#9d9d9d] italic">
                (2 votes, average: 4.50 out of 5)
              </p>
            </div>
            <div className="" align="center">
              <p className="italic text-sm">
                You need to be a registered member to rate this post.
              </p>
            </div>
          </div>
          <div className="w-5/12 bg-red-500">
            <div>
              {ico.map((val, i) => {
                return (
                  <>
                    <div>{val.iconss}</div>
                    <div>{val.title}</div>
                    <div>{val.des}</div>
                  </>
                );
              })}
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="w-4/12 bg-green-500">third</div>
        </div>
      </main>
    </>
  );
};

export default mickeyrorey;
