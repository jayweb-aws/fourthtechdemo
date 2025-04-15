import Link from "next/link";
import { useAppSelector } from "../../../../app/hooks";
const Hero = () => {
  const { firstName } = useAppSelector((state) => state.auth.user);
  return (
    <>
      <div className="relative bg-gray-500">
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200/20 px-6 ">
          <div className="container text-center text-white sm:space-y-4 md:space-y-8 space-y-2">
            <h3 className="lg:text-4xl sm:text-2xl text-xl font-bold font-nunito">
              This Is Your One Stop Shop To Your Brand New Tech Career
            </h3>
            <p className="font-medium text-xl sm:text-xl lg:text-2xl font-nunito">
              Increasing Talent Within Tech Spaces That Are Lucrative.
            </p>
            <div className="flex justify-center pb-[1rem] sm:pb-[3rem]">
              <Link href={!firstName ? "/registration" : "/bootcamps"}>
                <button
                  className="bg-[#425cfb] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-[16px] md:text-[20px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#425cfb] z-10"
                  type="button"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <video autoPlay muted loop className="w-full mx-auto z-0">
          <source src={require("../../../../assets/video.mp4")} />
        </video>
      </div>
    </>
  );
};

export default Hero;
