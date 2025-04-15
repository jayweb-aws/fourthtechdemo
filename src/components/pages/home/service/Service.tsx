import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

const Service = () => {
  return (
    <div className="container my-12 md:my-20 space-y-6 pb-10 px-4 sm:px-0">
      <h3 className="text-[28px] md:text-4xl font-bold max-w-[690px] text-center mx-auto font-nunito">
        Shaping the Future in IT, One student at a time
      </h3>

      {/* <h4 className='text-center font-bold text-2xl text-gray-800'> When you win, we win.</h4> */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[300px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FiMonitor className="font-bold text-6xl text-[#F7C32E] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold font-nunito">7+</span>
            <span className="text-xs font-nunito">Online Courses</span>
          </div>
        </div>
        <div className="w-[300px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FaUserTie className="font-bold text-6xl text-[#1D3B53] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold font-nunito">4+</span>
            <span className="text-xs font-nunito">Expert Tutors</span>
          </div>
        </div>
        <div className="w-[300px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <FaUserGraduate className="font-bold text-6xl text-[#406E95] stroke-2" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold font-nunito">240+</span>
            <span className="text-xs font-nunito">Online Students</span>
          </div>
        </div>
        <div className="w-[300px] flex items-center gap-4 bg-[#FEF6E0] rounded-md px-10 py-4">
          <BsFillPatchCheckFill className="font-bold text-6xl text-[#8FB6E1]" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold font-nunito">6+</span>
            <span className="text-xs font-nunito">Certified Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
