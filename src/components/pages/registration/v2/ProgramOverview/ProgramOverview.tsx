import Image from "next/image";
import overViewImg from "../../../../../assets/single-program/overview.png";
import Title from "../../../../common/Title/Title";

const ProgramOverview = () => {
  return (
    <div className="pt-[80px] xl:pt-[110px] pb-[60px] xl:pb-[93px]">
      <Title title="Program Overview" />

      <div className="container px-[30px] grid-cols-1 grid lg:grid-cols-3 mt-[30px] md:mt-[52px] gap-x-[20px]">
        <div className="mb-[30px] lg:mb-0">
          <Image
            src={overViewImg}
            alt="overview"
          // layout='responsive'
          />
        </div>

        <div className="col-span-2 max-w-[715px]">
          <p className="text-[16px] text-dark mb-[30px] lg:mb-[44px]">
            The ever-evolving digital landscape requires vigilant cybersecurity measures. With the rise in cyber threats, there's a growing need for professionals trained to guard our digital infrastructure. This Cybersecurity Bootcamp is designed to groom the next generation of cybersecurity experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
