import Image from "next/image";
import React from "react";
import background from "../../../../../public/Boy.png";
// import Typewriters from "typewriter-effect";

const landing = () => {
  return (
    <main className="flex pb-10 h-fit">
      <div className=" w-6/12 flex flex-col justify-center  md:gap-3 gap-1 items-center text-[#497faf]  ">
        <h1 className="md:text-5xl text-2xl font-semibold uppercase">
          Study With
        </h1>
        <p className="md:text-3xl text-lg font-semibold uppercase ">
          Group of{" "}
        </p>
        <p className="md:text-4xl text-xl font-semibold uppercase">
          Professionals
          {/* <Typewriters
            options={{
              strings: ["fdsvj", "World"],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </p>
      </div>
      <div className=" w-6/12   ">
        <Image
          src={background}
          width={500}
          height={500}
          alt="Handsome boy"
          className=" md:h-100 h-96 w-96 "
        />
      </div>
    </main>
  );
};

export default landing;
