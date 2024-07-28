import Landing from "../../PageComponent/Home/landing/page";
import Afterlanding from "../../PageComponent/Home/afterlanding/page";
import Icons from "../../PageComponent/Home/4icon/page";
import Ourteam from "../../PageComponent/Home/ourteam/page";
import Counterss from "../../PageComponent/Home/counter/page";
import Feature from "../../PageComponent/Home/ourfeaturedcourse/page";
import Upcomingevent from "../../PageComponent/Home/upcomingevent/page";
import OurBlog from "../../PageComponent/Home/ourblog/page";
import ReadMore from "../../PageComponent/Home/readmore/page";
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
