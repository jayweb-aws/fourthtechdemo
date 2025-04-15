import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import moneyImg from "../../../../assets/homev2/blog/Vector.png";
import clockImg from "../../../../assets/homev2/blog/clock.png";
import frame from "../../../../assets/homev2/blog/frame.svg";
import layerImg from "../../../../assets/homev2/blog/layer.png";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
import { itemAnimation } from "../../../../utils/animation";
import { timeConvert } from "../../../../utils/utility";
import ButtonV2 from "../../../common/ButtonV2/ButtonV2";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";

const SingleProgramCourse = ({ item }: any) => {
  const {
    user: { roles, studentType },
  } = useAppSelector((state) => state.auth);
  const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
  const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);

  return (
    <>
      <ActionConfirmModal
        show={showEnrollConfirmModal}
        handleClose={handleCloseEnrollConfirmModal}
        title="Are you sure you want to enroll this course?"
        id={item?.id}
        mutationHook={useEnrollMutation}
        successMessage={`Success! You've enrolled in ${item?.title}. Please wait for Admin's approval. Once approved, you'll find the course listed on your Dashboard under 'Courses'.`}
        sureButtonColor="success"
      />
      <motion.div
        variants={itemAnimation}
        className="bg-white rounded-[10px] shadow-[0px_1px_24px_0px_#0000001A] p-2"
        key={item?.id}
      >
        <div className="max-w-full rounded-[10px]">
          <Image
            src={item?.courseImage}
            alt={item?.title}
            layout="responsive"
            className="rounded-xl"
            width={370}
            height={216}
          />
        </div>

        <div className="pt-4 px-2 pb-2 font-poppins">
          <h4 className="text-[20px] font-semibold text-lightdark capitalize">
            {item?.title}
          </h4>
          <div className="grid grid-cols-2 gap-3 mb-6 mt-3 overflow-hidden text-[#40424B] text-ellipsis whitespace-nowrap font-poppins text-[14px] font-medium leading-[14px]">
            <div className="flex items-center gap-2  ">
              <Image src={moneyImg} width={20} height={20} />
              <span>${item?.price}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={layerImg} width={20} height={20} />
              <span>{item?.modules.length} modules</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={clockImg} width={20} height={20} />
              <span>{timeConvert(item?.durationInMinutes)}</span>
            </div>
            <div className="flex items-center gap-x-2 capitalize">
              <Image src={frame} width={20} height={20} />
              <span>{item?.level}</span>
            </div>
          </div>
          <div>
            <Link href="/single-program">
              <a className="text-[#D53535] text-center font-poppins text-[16px] font-medium leading-[16px]">
                View Bootcamp
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProgramCourse;


// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useAppSelector } from "../../../../app/hooks";
// import moneyImg from "../../../../assets/homev2/blog/Vector.png";
// import clockImg from "../../../../assets/homev2/blog/clock.png";
// import levelImg from "../../../../assets/homev2/blog/icon.png";
// import layerImg from "../../../../assets/homev2/blog/layer.png";
// import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
// import { itemAnimation } from "../../../../utils/animation";
// import { timeConvert } from "../../../../utils/utility";
// import ButtonV2 from "../../../common/ButtonV2/ButtonV2";
// import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";

// const SingleProgramCourse = ({ item }: any) => {
//   const {
//     user: { roles, studentType },
//   } = useAppSelector((state) => state.auth);
//   const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
//   const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);

//   // console.log(item);
//   return (
//     <>
//       <ActionConfirmModal
//         show={showEnrollConfirmModal}
//         handleClose={handleCloseEnrollConfirmModal}
//         title="Are you sure you want to enroll this course?"
//         id={item?.id}
//         mutationHook={useEnrollMutation}
//         successMessage={`Success! You've enrolled in ${item?.title}. Please wait for Admin's approval. Once approved, you'll find the course listed on your Dashboard under 'Courses'.`}
//         sureButtonColor="success"
//       />
//       <motion.div
//         variants={itemAnimation}
//         className="bg-white rounded-[10px] shadow-[0px_1px_24px_0px_#0000001A] mb-[40px]"
//         key={item?.id}
//       >
//         <div className="max-w-full rounded-[10px]">
//           <Image
//             src={item?.courseImage}
//             alt={item?.title}
//             layout="responsive"
//             className="rounded-t-[10px]"
//             width={370}
//             height={216}
//           />
//         </div>

//         <div className="p-[15px] font-poppins">
//           <h4 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-lightdark capitalize">
//             {item?.title}
//           </h4>
//           <p className="text-[18px] text-grey pb-[10px]">Duration: 3 months</p>
//           <div className="flex justify-between">
//             <span className="text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]">
//               <Image src={moneyImg} width={20} height={20} />${item?.price}
//             </span>
//             <span className="text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px] capitalize">
//               <Image src={levelImg} width={20} height={20} />
//               {item?.level}
//             </span>
//           </div>
//           <div className="flex justify-between mb-[20px]">
//             <span className="text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]">
//               <Image src={layerImg} width={20} height={20} />
//               {item?.modules.length} modules
//             </span>
//             <span className="text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]">
//               <Image src={clockImg} width={20} height={20} />
//               {timeConvert(item?.durationInMinutes)}
//             </span>
//           </div>
//           <div>
//             <Link href={"/single-program"}>
//               <a>
//                 <ButtonV2 text="View Bootcamp" className="!text-[16px]" />
//               </a>
//             </Link>
//             {item?._id === "647939fe6a6659ee0d7c3744" ? (
//               <div className="border-2 ml-[3px] cursor-pointer border-secondary text-secondary capitalize inline-block p-[10px_20px] rounded-[30px] duration-300 hover:bg-secondary hover:text-white hover:border-transparent mt-[10px]">
//                 <button>Default Course</button>
//               </div>
//             ) : (
//               roles.includes("student") && (
//                 <div
//                   onClick={() => setShowEnrollConfirmModal(true)}
//                   className="border-2 ml-1 cursor-pointer border-secondary text-secondary capitalize inline-block p-[10px_20px] rounded-[30px] duration-300 hover:bg-secondary hover:text-white hover:border-transparent mt-[10px]"
//                 >
//                   <button>
//                     {studentType === "self-pace"
//                       ? "Self-Paced"
//                       : "Instructor-Led"}
//                   </button>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default SingleProgramCourse;
