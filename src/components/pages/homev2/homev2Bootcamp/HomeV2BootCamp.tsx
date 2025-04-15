import Image from 'next/image';
import Link from 'next/link';
import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import { homeBootCampArr } from '../../../../constant/constant';
import moneyImg from '../../../../assets/homev2/blog/Vector.png'
import clockImg from '../../../../assets/homev2/blog/clock.png'
import levelImg from '../../../../assets/homev2/blog/icon.png'
import layerImg from '../../../../assets/homev2/blog/layer.png'
import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";
import { motion } from 'framer-motion'
import { bottomToTopInit, bottomToTopAnimation } from '../../../../utils/animation';
import SingleBootCamp from './SingleBootCamp';

const HomeV2BootCamp = () => {
    const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery({});

    return (
        <div className="py-[60px] md:py-[80px] lg:py-[124px]">
            <div className='mb-[55px]'>
                <SectionTitle title="Fourth IT Academy" />
                <p className="text-grey px-[30px] text-[20px] md:text-[24px] text-center mt-[20px]">How our bootcamps compare to other training providers.</p>
            </div>


            <div className="container px-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] md:gap-x-[40px] lg:gap-x-[58px] gap-y-[30px]">
                    {
                        data?.data?.courses?.length === 0 && <div className='text-center text-secondary font-semibold underline'>
                            No Course Data Available
                        </div>
                    }
                    {
                        data?.data?.courses?.slice(0, 6)?.map((item: any, i: any) => (
                            <SingleBootCamp key={i} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeV2BootCamp;