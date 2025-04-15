import HomeV2Hero from "./homev2Hero/HomeV2Hero";
import HomeV2Companies from "./homev2Companies/HomeV2Companies";
import HomeV2WhyFourth from "./homev2WhyFourth/HomeV2WhyFourth";
import HomeV2Highlights from "./homev2Highlights/HomeV2Highlights";
import HomeV2BootCamp from "./homev2Bootcamp/HomeV2BootCamp";
import HomeV2Customer from "./homeV2Customers/HomeV2Customer";
import HomeV2Service from "./homev2Service/HomeV2Service";
import HomeV2ServicePage from "./homeV2ServicePage/HomeV2ServicePage";

const Homev2 = () => {
  return (
    <div>
      <HomeV2Hero />
      <HomeV2Service />
      <HomeV2Companies />
      <HomeV2WhyFourth />
      <HomeV2Customer />
      {/* <HomeV2ServicePage/> */}
      <HomeV2Highlights />
      {/* <HomeV2BootCamp /> */}
    </div>
  );
};

export default Homev2;
