import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";

import {
  AiFillSignal,
  AiOutlineClockCircle,
  AiOutlineDollar,
} from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";

const BootCampsCard = ({
  name,
  id,
  duration,
  cutprice,
  price,
  timeHour,
  timeMinute,
  level,
  modules,
  imgSrc,
  linkTo,
}: {
  name: any;
  duration: number;
  id: any;
  imgSrc: any;
  cutprice: number;
  timeHour: number;
  timeMinute: number;
  level: string;
  linkTo: string;
  modules: number;
  price: number;
}) => {
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
        id={id}
        mutationHook={useEnrollMutation}
        successMessage="Successfully enrolled!"
        sureButtonColor="success"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 100, ease: "linear" }}
        className=" flex justify-center items-center font-nunito rounded-lg w-full "
      >
        <div className=" bg-base-100 shadow-xl font-nunito rounded-lg w-full h-full flex flex-col">
          <Image
            width={350}
            height={200}
            layout="responsive"
            src={imgSrc}
            alt="Shoes"
            className="rounded-tl-xl rounded-tr-xl"
          />
          <div className="px-3">
            <p className="font-bold text-[1.1rem] leading-6 mt-[15px] regular-font">
              {name}
            </p>
          </div>
          <div className="  md:px-3 sm:px-3 lg:px-3 xl:px-3 xsm:px-[0.6rem] mt-auto">
            <div className="my-6 text-gray-400">
              <p className="Nunito">Duration: {duration} Months</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <AiOutlineDollar className="h-5  md:w-5 sm:w-5 lg:w-5 xl:w-5 xsm:w-3" />
                </div>
                <div className="flex ml-1 lg:ml-1 justify-around text-lg items-center">
                  <div className=" line-through mr-2 text-gray-400 xsm:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                    ${cutprice}
                  </div>
                  <div className=" md:mr-5 sm:mr-5 lg:mr-5 xl:mr-5 xsm:mr-[0.30rem] text-blue-500 xsm:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                    ${price}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-evenly">
                <div className="flex items-center justify-between">
                  <span className="mr-1 lg:mr-2">
                    <AiFillSignal className="  h-4 md:w-4 sm:w-4 lg:ml-4 xl:w-4 xsm:w-3 text-blue-600 font-bold" />
                  </span>{" "}
                  <span className="font-bold xsm:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                    {level}
                  </span>
                </div>
                <div className="flex  md:ml-4 sm:ml-4 lg:ml-4 xl:ml-4 xsm:ml-[0.30rem] items-center justify-center">
                  <span className="mr-1 lg:mr-2">
                    <AiOutlineClockCircle className=" h-4 md:w-4 sm:w-4 lg:ml-4 xl:w-4 xsm:w-3 text-gray-400" />
                  </span>{" "}
                  <span className="mr-1 text-gray-400 xsm:text-[12px]  sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                    {timeHour}h
                  </span>
                  <span className="text-gray-400 xsm:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                    {timeMinute}m
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center my-6 text-gray-400">
              <span>
                <TbStack2 className="w-6 h-6" />
              </span>
              <p className="mx-2">{modules}</p>
              <p>Modules</p>
            </div>
            <div className={`flex justify-between items-center pb-4 mt-auto`}>
              <div className="border rounded-lg p-2  bg-blue-700 text-white text-center">
                <Link href={`/bootcamp-view/[id]`} as={`/bootcamp-view/${id}`}>
                  <button className="">View Bootcamp</button>
                </Link>
              </div>
              {roles.includes("student") && (
                <div
                  onClick={() => setShowEnrollConfirmModal(true)}
                  className="border rounded-lg p-2  bg-emerald-700 text-white text-center "
                >
                  <button>
                    {studentType === "self-pace"
                      ? "Self-Paced"
                      : "Instructor-Led"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BootCampsCard;
