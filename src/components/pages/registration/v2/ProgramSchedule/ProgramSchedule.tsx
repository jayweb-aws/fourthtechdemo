import Image from "next/image";
import {
  sProgramScheduleLeftArr,
  sProgramScheduleRightArr,
} from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";

const ProgramSchedule = () => {
  return (
    <div className="pb-[60px] md:pb-[80px] lg:pb-[122px]">
      <Title title="An Example Day’s Schedule in Part-Time Program" />

      <div className="mt-[60px] container px-[30px] flex flex-col md:flex-row justify-center gap-x-[50px] lg:gap-x-[100px]">
        <div className="relative before:absolute before:left-[60px] before:top-[50px] before:w-[10px] before:h-[280px] before:bg-secondary mb-[30px] md:mb-0">
          {sProgramScheduleLeftArr?.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-x-[25px] mb-[40px] last:mb-0"
            >
              <div className="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[111px] before:h-[111px] before:bg-secondary before:rounded-full">
                <Image src={item?.img} alt="schedule" />
              </div>
              <div className="max-w-[160px]">
                <h4 className="text-[16px] md:text-[18px] font-semibold">
                  {item?.title}
                </h4>
                <p className="text-[14px] md:text-[16px]">{item?.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {sProgramScheduleRightArr?.map((item, i) => (
            <div key={i} className="max-w-[360px] mb-[24px] last:mb-0">
              <h4 className="text-[16px] md:text-[18px] font-semibold mb-[5px]">
                {item?.title}
              </h4>
              <p className="text-[14px] md:text-[16px]">{item?.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;
