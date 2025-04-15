import testimonialBG from "../../../styles/GeneralStyles.module.css";
import ServicesCards from "./servicesCards/ServicesCards";

const Services = () => {
  return (
    <>
      <div
        className={` w-full   bg-blend-darken h-[500px]   ${testimonialBG.testimonialBG}`}
      ></div>
      <div className="container mx-auto font-nunito py-12">
        <div className="pb-6">
          <h1 className="text-center text-3xl md:text-4xl font-bold my-2 md:my-3">
            Fourth IT Academy
          </h1>
          <p className="text-center text-lg md:text-xl font-bold">
            How Can We Make You Happy?
          </p>
        </div>
        <ServicesCards />
      </div>
    </>
  );
};

export default Services;
