import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import moneyImg from '../../../../assets/homev2/blog/Vector.png'
import clockImg from '../../../../assets/homev2/blog/clock.png'
import levelImg from '../../../../assets/homev2/blog/icon.png'
import layerImg from '../../../../assets/homev2/blog/layer.png'
import { bottomToTopInit, bottomToTopAnimation } from '../../../../utils/animation';
import { motion } from 'framer-motion';
import { useAppSelector } from "../../../../app/hooks";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";
import { timeConvert } from '../../../../utils/utility';

const SingleProgramCourse = ({ item }: any) => {
    const { user: { roles, studentType } } = useAppSelector((state) => state.auth);
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
                initial={bottomToTopInit}
                whileInView={bottomToTopAnimation}
                className='bg-white rounded-[10px] shadow-[0px_1px_24px_0px_#0000001A] mb-[40px]' key={item?.id}>
                <div className='max-w-full rounded-[10px]'>
                    <Image
                        src={item?.courseImage}
                        alt={item?.title}
                        layout='responsive'
                        className='rounded-t-[10px]'
                        width={370}
                        height={216}
                    />
                </div>

                <div className='p-[15px] font-poppins'>
                    <h4 className='text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-lightdark capitalize'>{item?.title}</h4>
                    <p className='text-[18px] text-grey pb-[10px]'>Duration: 3 months</p>
                    <div className='flex justify-between'>
                        <span className='text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]'>
                            <Image
                                src={moneyImg}
                                width={20}
                                height={20}
                            />
                            ${item?.price}</span>
                        <span className='text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px] capitalize'>
                            <Image
                                src={levelImg}
                                width={20}
                                height={20}
                            />
                            {item?.level}</span>
                    </div>
                    <div className='flex justify-between mb-[20px]'>
                        <span className='text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]'>
                            <Image
                                src={layerImg}
                                width={20}
                                height={20}
                            />
                            {item?.modules.length} modules</span>
                        <span className='text-darkgrey text-[18px] flex items-center gap-x-[5px] mb-[5px]'>
                            <Image
                                src={clockImg}
                                width={20}
                                height={20}
                            />
                            {timeConvert(item?.durationInMinutes)}</span>
                    </div>
                    <div>
                        <Link href={"/single-program"}>
                            <a>
                                <ButtonV2 text='View Bootcamp' className='!text-[15px] !p-[6px_20px]' />
                            </a>
                        </Link>
                        {roles.includes("student") && (
                            <div
                                onClick={() => setShowEnrollConfirmModal(true)}
                                className="border-2 ml-1 cursor-pointer border-secondary text-secondary capitalize inline-block p-[6px_20px] rounded-[30px] duration-300 hover:bg-secondary hover:text-white hover:border-transparent mt-[10px]"
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
            </motion.div>
        </>
    );
};

export default SingleProgramCourse;