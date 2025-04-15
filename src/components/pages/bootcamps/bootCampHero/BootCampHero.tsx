import heroStyle from "../../../../styles/GeneralStyles.module.css";
const BootCampHero = () => {
  return (
    <>
      <div
        className={`w-full flex justify-center items-center font-nunito bg-blend-darken h-[300px] md:h-[500px] ${heroStyle?.bgImg}`}
      >
        <h1 className="font-bold text-center text-white text-3xl md:text-4xl">
          Upcoming Bootcapms
        </h1>
      </div>
    </>
  );
};

export default BootCampHero;
