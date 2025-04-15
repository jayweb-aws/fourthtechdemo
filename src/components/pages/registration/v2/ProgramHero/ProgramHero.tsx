import Image from "next/image";
import heroBgImg from "../../../../../assets/single-program/cybersecurity-vietnam.jpg";
import downloadImg from '../../../../../assets/single-program/download.png';
import FromBox from "../../TopFormRegistration";

const ProgramHero = () => {
  return (
    <div>
      <FromBox />
    </div>
    // <div className="container px-[30px] pt-[52px]">
    //   <div className="grid md:grid-cols-2">
    //     <div className="mb-[30px] md:mb-0">
    //       <FromBox />
    //     </div>

    //     {/* Right Side Img  */}
    //     <div>
    //       <Image src={heroBgImg} alt="hero" layout="responsive" />
    //       <a href={"/Fourth Academy Student Packet .pdf"} download="Fourth Academy Student Packet .pdf" className='flex items-center gap-x-[8px]  mt-[40px]'>
    //         <button className='w-[30px] lg:w-auto'>
    //           <Image
    //             src={downloadImg}
    //             alt='download'
    //             className='cursor-pointer'
    //           />
    //         </button>
    //         <button className='max-w-[132px] font-semibold text-left text-[14px] lg:text-[16px]'>Download Course Packet</button>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProgramHero;
