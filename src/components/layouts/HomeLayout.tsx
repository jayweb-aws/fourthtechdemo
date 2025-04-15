import { ICommon } from "../../interfaces/ICommon";
import FooterV2 from "../shared/FooterV2";
import Header from "../shared/HeaderV2";

const HomeLayout = ({ children }: ICommon) => {
  return (
    <div className="!font-poppins">
      <Header />
      <div>
        {children}
      </div>
      <FooterV2 />
    </div>
  );
};

export default HomeLayout;
