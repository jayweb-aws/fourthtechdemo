import Image from "next/image";
import { sProgramSupportArr } from "../../../../../constant/constant";

const ProgramSupport = () => {
  return (
    <div>
      <div className="container px-[30px] lg:flex gap-x-[20px]">
        <div className="max-w-[400px] mb-[30px] lg:mb-0">
          <h3 className="text-[20px] sm:text-[24px] lg:text-[34px] xl:text-[38px] leading-[40px] font-semibold text-dark mb-[20px] lg:mb-[40px]">
            Support When You Need It
          </h3>
          <p className="mb-[20px] lg:mb-[40px]">
            Our dedicated team of instructors and mentors is committed to your success. Whether you're grappling with a challenging concept or need clarification on a topic, we're here to guide you every step of the way.
          </p>

          <button className="p-[15px] sm:p-[15px_20px] lg:p-[20px_42px] text-[14px] lg:text-[16px] text-white font-medium bg-secondary">
            Apply Today
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[15px] w-full">
          {sProgramSupportArr?.map((item, i) => (
            <div
              className="bg-[#3B3A3A] rounded-[10px] mb-[40px] text-white p-[30px_17px] text-center"
              key={i}
            >
              <div className="bg-[#B9E0FE] w-[95px] h-[95px] rounded-full mx-auto mb-[20px]">
                <Image src={item?.img} alt="support" />
              </div>

              <div>
                <h4 className="text-[20px] font-semibold text-grey-100 mb-[10px]">
                  {item?.title}
                </h4>
                <p className="text-[14px]">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSupport;
