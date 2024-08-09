import { SiWindows } from "react-icons/si";

const about = () => {
  return (
    <>
      <div className=" lg:w-6/12 flex flex-col md:gap-8 gap-5 ">
        <h1 className="text-xl text-[#497faf] font-semibold">About</h1>{" "}
        <div className="flex gap-3">
          <SiWindows className="lg:w-10 w-32 h-7 text-[#497faf] rotate-45" />
          <p className="text-[#86999b] text-sm ">
            Guru comes with powerful theme options, which empowers you to
            quickly and easily build incredible store. Cras faucibus risus
            varius.
          </p>
        </div>{" "}
      </div>
    </>
  );
};

export default about;
