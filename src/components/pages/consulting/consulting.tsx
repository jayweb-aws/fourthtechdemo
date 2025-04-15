import ConsultingCards from "../../../components/pages/consulting/consulting-cards/consulting-cards";
import testimonialBG from "../../../styles/GeneralStyles.module.css";

const Consulting = () => {
  return (
    <>
      <div
        className={`w-full bg-blend-darken h-[500px]   ${testimonialBG.consultingBG}`}
      ></div>
      <div className="container py-12 mx-auto font-nunito">
        <h1 className="text-center text-3xl md:text-4xl font-bold my-2 ">
          Fourth IT Academy
        </h1>
        <p className="text-center text-xl font-bold">Consulting</p>
        <ConsultingCards />
      </div>
    </>
  );
};

export default Consulting;
