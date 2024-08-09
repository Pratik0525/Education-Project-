import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
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

const focontact = () => {
  return (
    <>
      <div className=" lg:w-3/12 flex md:gap-6 gap-2 flex-col lg:px-0 md:px-5 px-0 ">
        <div>
          <h1 className="text-xl text-[#497faf] font-semibold">Contact us</h1>
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
    </>
  );
};

export default focontact;
