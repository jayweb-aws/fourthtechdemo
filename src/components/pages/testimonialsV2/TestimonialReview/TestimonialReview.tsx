import Marquee from "react-fast-marquee";
import Image from 'next/image';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import { useGetAllPublishedReviewQuery } from "../../../../feature/api/dashboardApi";
import Loading from '../../../common/Loading';

const TestimonialReview = () => {
    const { data, isLoading, isError, isSuccess } = useGetAllPublishedReviewQuery(
        {}
    );
    return (
        <div className="companies">
            <SectionTitle title='People are talking' />

            <div className="bg-lightblue py-[40px] md:py-[65px] mt-[30px] md:mt-[56px]">
                <div className="container">
                    <div>
                        <Marquee>
                            {
                                data?.data?.reviews?.length === 0 && <div>No Reviews Available.</div>
                            }
                            {
                                isLoading && <Loading />
                            }
                            {
                                isSuccess && data?.data?.reviews?.slice(0, 10)?.map((item: any, i: any) => (
                                    <div key={i} className="max-w-[320px] bg-white ml-[20px] rounded-[10px] shadow-[0px_1px_24px_0px_#0000001A] p-[15px_8px_20px_30px] font-poppins">
                                        <p className="text-[18px] text-grey mb-[34px]">{item?.review}</p>
                                        <div className="flex gap-x-[20px]">
                                            <Image src={item?.student?.avatar}
                                                className="rounded-full"
                                                width={60}
                                                height={60}
                                                alt="logo" />
                                            <div>
                                                <h4 className="text-[20px]">{item?.student?.firstName} {item?.student?.lastName} </h4>
                                                <span className="text-[16px] text-grey">{item?.title}</span>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </Marquee>
                    </div>
                    <div className="mt-[30px] md:ml-[70px]">
                        <Marquee
                            direction="right"
                        >
                            {
                                data?.data?.reviews?.length === 0 && <div>No Reviews Available.</div>
                            }
                            {
                                isLoading && <Loading />
                            }
                            {
                                isSuccess && data?.data?.reviews?.slice(0, 10)?.map((item: any, i: any) => (
                                    <div key={i} className="max-w-[320px] bg-white ml-[20px] rounded-[10px] shadow-[0px_1px_24px_0px_#0000001A] p-[15px_8px_20px_30px] font-poppins">
                                        <p className="text-[18px] text-grey mb-[34px]">{item?.review}</p>
                                        <div className="flex gap-x-[20px]">
                                            <Image src={item?.student?.avatar}
                                                className="rounded-full"
                                                width={60}
                                                height={60}
                                                alt="logo" />
                                            <div>
                                                <h4 className="text-[20px]">{item?.student?.firstName} {item?.student?.lastName} </h4>
                                                <span className="text-[16px] text-grey">{item?.title}</span>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialReview;