import About from "./about";
import Contact from "./focontact";
import Follow from "./fofollow";
import Topfooter from "./topfooter";
const footer = () => {
  return (
    <>
      <footer className="bg-gray-100 w-full ">
        <div className="bg-white w-full">
          <Topfooter />
        </div>
        <main className="w-10/12 mx-auto">
          <div className=" w-full lg:flex grid md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-0 gap-14  py-10">
            <About />
            <Contact />
            <Follow />
          </div>
        </main>
      </footer>
    </>
  );
};

export default footer;
