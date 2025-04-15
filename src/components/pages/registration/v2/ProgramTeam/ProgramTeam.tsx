import Image from "next/image";
import { sProgramTeamArr } from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";

const ProgramTeam = () => {
  return (
    <div>
      <div className="relative z-10 before:absolute before:w-full before:h-full before:bg-secondary before:z-[-1] before:skew-y-[-4deg] my-[60px] md:my-[100px]">
        <div className="container px-[30px] pt-[60px] pb-[60px] lg:pb-[100px]">
          <Title title="Meet the Team" className="text-white" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-[37px]">
            {sProgramTeamArr?.map((item, i) => (
              <div className="text-center text-white mb-[30px] lg:mb-0" key={i}>
                <div>
                  <Image src={item?.img} alt="team" />
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold">{item?.title}</h4>
                  <span className="text-[16px]">{item?.designation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="text-lightdark underline">
          View all the members of the Team
        </button>
      </div>
    </div>
  );
};

export default ProgramTeam;
