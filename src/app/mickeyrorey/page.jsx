import Image from "next/image";
import React from "react";
import imgss from "/public/web.jpg";
import imagess from "/public/web.jpg";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import Recentimage1 from "../../../public/web.jpg";
const ico = [
  {
    iconss: <FaArrowCircleRight />,
    title: "Role :",
    des: "Founder",
  },
  {
    iconss: <FaArrowCircleRight />,
    title: "Website :",
    des: "http://iamdesigning.com",
  },
  {
    iconss: <FaArrowCircleRight />,
    title: "Experience :",
    des: "5 yrs",
  },
  {
    iconss: <FaArrowCircleRight />,
    title: "Course Submitted :",
    des: "12 NOS",
  },
  {
    iconss: <FaArrowCircleRight />,
    title: "Specialist in :",
    des: "Open Source",
  },
];
const recent = [
  {
    image: Recentimage1,
    topic: "Five Training Ro...",
    description: "Cras venenatis erat ac massa ultricies,...",
  },
  {
    image: Recentimage1,
    topic: "Five Training Ro...",
    description: "Cras venenatis erat ac massa ultricies,...",
  },
  {
    image: Recentimage1,
    topic: "Five Training Ro...",
    description: "Cras venenatis erat ac massa ultricies,...",
  },
];
const Checkboxs = [
  {
    name: "Corporate",
    number: "(2)",
  },
  {
    name: "Design",
    number: "(2)",
  },
  {
    name: "Learning",
    number: "(2)",
  },
  {
    name: "Tools",
    number: "(2)",
  },
  {
    name: "Traning",
    number: "(2)",
  },
];
const mickeyrorey = () => {
  return (
    <>
      {" "}
      <main className=" w-11/12 mx-auto ">
        <div className="flex px-4 ">
          <div className="w-3/12  grid gap-4 h-fit">
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
          <div className="w-6/12 flex flex-col gap-6 ">
            <div className="">
              {ico.map((val, i) => {
                return (
                  <>
                    <div className="flex items-center justify-start gap-2">
                      <div className="text-[#abb8c3]">{val.iconss}</div>
                      <div className="font-semibold text-[#86999b] text-sm">
                        {val.title}
                      </div>
                      <div className="text-[#abb8c3]">{val.des}</div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="grid gap-5 text-sm text-[#a7aeb5] ">
              <p className="font-sans">
                Nulla pretium, enim nec ornare varius, erat ipsum sollicitudin
                nisi, at tincidunt orci mi id nisi. Nam venenatis iaculis velit,
                sed sagittis lectus tempor vitae. Donec dapibus aliquam ante, ut
                molestie augue feugiat eget. Nulla vitae nulla tincidunt,
                pellentesque elit eu, euismod purus. Nam eget interdum metus.
                Pellentesque sed diam adipiscing, condimentum massa id, placerat
                justo. In faucibus nibh tellus, nec euismod libero ultrices
                vitae. Etiam tincidunt tellus nibh, in tincidunt quam tempor
                eget. Donec feugiat felis non justo viverra, a pellentesque erat
                condimentum. Nam ultrices nunc ac laoreet suscipit.
              </p>
              <span className="font-sans">
                Etiam eu faucibus elit. Phasellus porttitor, nibh non euismod
                eleifend, tortor diam scelerisque orci, ut elementum lorem
                tortor non quam. Donec non condimentum enim. Aenean auctor urna
                at dolor feugiat volutpat. Aenean vel semper nibh. Nunc eget
                velit eu nulla rhoncus iaculis non a purus. Phasellus posuere
                fringilla pharetra. Donec rutrum lacinia convallis. Phasellus
                ornare libero eget nunc cursus, at pretium odio faucibus. Nulla
                facilisi. Ut aliquet neque dictum tellus interdum, nec faucibus
                nisl pharetra.
              </span>
              <h1 className="text-black text-xl opensans">NO COMMENTS</h1>
            </div>
            <div className=" flex flex-col gap-2">
              <div>
                <h1>Reply</h1>
              </div>
              <div className=" grid grid-cols-2 py-3">
                <div className="">
                  <textarea
                    className="w-full h-48 p-3 bg-gray-100 rounded-lg"
                    placeholder="Comment"
                  />
                </div>
                <div className=" grid gap-4 px-3 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-gray-100 h-10 rounded-lg placeholder:text-gray-500 px-2 text-sm"
                    placeholder="Name(required)"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-gray-100 h-10 rounded-lg placeholder:text-gray-500 px-2 text-sm"
                    placeholder="Email ID(required)"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-gray-100 h-10 rounded-lg placeholder:text-gray-500 px-2 text-sm"
                    placeholder="URL"
                  />
                </div>
              </div>
              <div className="flex gap-1 ">
                <input type="checkbox" name="" id="checkbox" />
                <p
                  htmlFor="checkbox"
                  className="text-sm cursor-pointer hover:text-[#497faf] text-gray-400"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <div className="flex justify-end items-center mr-5 mt-3 ">
                <button className="w-fit h-fit px-3 py-2 bg-[#497faf] text-white font-bold text-md rounded-lg">
                  Comment
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/12 h-fit pl-2 grid gap-10 ">
            <div className="grid gap-5">
              <label htmlFor="email" className="text-xl font-medium">
                Search
              </label>
              <div className=" flex w-fit items-center ">
                <input
                  type="text"
                  className="h-10 pl-2 rounded-l-sm w-52"
                  placeholder="Enter Keyword"
                />
                <p className="rounded-r-sm bg-[#497faf] text-white h-10 flex justify-center items-center font-bold text-sm px-2">
                  SUBMIT
                </p>
              </div>
            </div>
            <div className="  grid gap-10">
              <div className="flex gap-2 justify-center items-center">
                <p className="text-lg w-10/12 font-semibold">Recent News</p>
                <div className="w-full h-[1px] bg-gray-400"></div>
              </div>
              <main className="  ">
                <div className="h-fit grid gap-10 ">
                  {recent.map((val, i) => {
                    return (
                      <>
                        <div className=" flex gap-2 ">
                          <div className="">
                            <Image
                              src={val.image}
                              width={500}
                              height={500}
                              className="w-20 h-full object-cover"
                              alt="web developer"
                            />
                          </div>
                          <div className="grid">
                            <h1 className="text-[#497faf] font-bold">
                              {val.topic}
                            </h1>
                            <span className="text-gray-400 text-sm">
                              {val.description}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </main>
            </div>
            <div className="grid gap-10">
              <div className="flex gap-2 justify-center items-center">
                <p className="text-xl w-7/12 font-semibold">Categories</p>
                <div className="w-full h-[0.5px] bg-gray-400"></div>
              </div>
              <div>
                <div className="grid gap-5">
                  {Checkboxs.map((val, i) => {
                    return (
                      <>
                        <main
                          key={i}
                          className="flex justify-between items-center group cursor-pointer "
                        >
                          <div className="flex gap-3 ">
                            <input
                              type="checkbox"
                              name=""
                              id="name"
                              className="cursor-pointer text-[#497faf]"
                            />
                            <label
                              htmlFor="name"
                              className="text-[#497faf] group-hover:text-red-500 cursor-pointer tansition-all delay-75 duration-300 ease-in-out"
                            >
                              {val.name}
                            </label>
                          </div>
                          <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-lg">
                            <p className="text-[#497faf] text-sm group-hover:text-red-500 cursor-pointer tansition-all delay-75 duration-300 ease-in-out">
                              {val.number}
                            </p>
                          </div>
                        </main>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid gap-10 ">
              <div className="flex gap-2 justify-center items-center">
                <p className="text-xl w-3/12 font-semibold">Tags</p>
                <div className="w-full h-[0.5px] bg-gray-400"></div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 p-2 h-fit bg-gray-200 flex justify-center items-center rounded-lg">
                  <p className=" text-[#497faf] text-sm group-hover:text-red-500 cursor-pointer tansition-all delay-75 duration-300 ease-in-out">
                    art
                  </p>
                </div>
                <div className="w-12 p-2 h-fit bg-gray-200 flex justify-center items-center rounded-lg">
                  <p className="text-[#497faf] text-sm group-hover:text-red-500 cursor-pointer tansition-all delay-75 duration-300 ease-in-out">
                    tips
                  </p>
                </div>
              </div>
            </div>
            <div>how</div>
            <div>are</div>
            <div>you</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default mickeyrorey;

{
  /* <main className="bg-yellow-500">
<div className="flex justify-between w-10/12 mx-auto">
  <div className="bg-pink-600 w-4/12 ">
    <Image src={imgss} width={500} height={500} alt="team meeting" />
  </div>
  <div className="bg-red-500 w-4/12">
    <p>Web Developer</p>
    <span>Description</span>
  </div>
  <div className="bg-green-500 w-4/12">Upcoming class scheduled</div>
</div>
</main> */
}
