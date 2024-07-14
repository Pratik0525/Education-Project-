import Landing from "../landing/page";
import Afterlanding from "../afterlanding/page";
import Icons from "../4icon/page";
import Ourteam from "../ourteam/page";
import Counterss from "../counter/page";
import Feature from "../ourfeaturedcourse/page";
import Upcomingevent from "../upcomingevent/page";
import OurBlog from "../ourblog/page";
import ReadMore from "../readmore/page";

const page = () => {
  return (
    <div>
      <Landing />
      <Afterlanding />
      <Icons />
      <Ourteam />
      <Counterss />
      <Feature />
      <Upcomingevent />
      <OurBlog />
      <ReadMore />
    </div>
  );
};

export default page;
