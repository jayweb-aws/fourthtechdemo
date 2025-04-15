import Image from "next/image";

import cardImg from "../../../../assets/instructors.png";
import { useGetAllPublishedReviewQuery } from "../../../../feature/api/dashboardApi";
// import "../../../../styles/testimonialsSwiperStyles.module.css";
// import "./styles.css";

// import required modules
import Marquee from "react-fast-marquee";

const Highlights = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllPublishedReviewQuery(
    {}
  );

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-[#C1DCF9] xsm:px-[0rem] sm:px-[3rem] lg:px-[4rem] xl:px-[4rem] py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-nunito mb-10">
            Student Highlights
          </h2>

          <div className="mt-10">
            {data != null && data?.data && data?.data?.reviews ? (
              <Marquee
                gradientWidth={100}
                pauseOnHover={true}
                gradientColor={[201, 222, 246]}
                delay={1}
                className="max-h-[430px] overflow-hidden xsm:w-full"
              >
                {data?.data?.reviews
                  .slice(0, 8)
                  .map((option: any, index: any) => (
                    <div
                      key={index}
                      className="px-[1.75rem] py-[2rem] rounded-xl bg-white   w-[300px] max-h-[390px] ml-5"
                    >
                      <div className="min-h-[180px]">
                        <p className="font-nunito">
                          {option.review.split(" ").length <= 50
                            ? option.review
                            : option.review.split(" ").length > 50 &&
                            option.review.split(" ").slice(0, 50).join(" ") +
                            "..."}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-[10px] min-h-[130px]">
                        <div className="min-w-[60px] min-h-[60px]">
                          <Image
                            width={60}
                            height={60}
                            className="rounded-full"
                            src={option?.student?.avatar}
                            alt=""
                          />
                        </div>
                        <div className="font-medium dark:text-white">
                          <div className="font-bold font-nunito">
                            {option?.student?.firstName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-nunito">
                            {option?.student?.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Marquee>
            ) : (
              ""
            )}

            {data != null && data?.data && data?.data?.review ? (
              <div className="mt-10">
                <Marquee
                  gradientWidth={100}
                  pauseOnHover={true}
                  gradientColor={[201, 222, 246]}
                  className="max-h-[430px] overflow-hidden xsm:w-full"
                >
                  {data?.data?.reviews
                    .slice(0, 8)
                    .map((option: any, index: any) => (
                      <div
                        key={index}
                        className="px-[1.75rem] py-[2rem] rounded-xl bg-white   w-[300px] max-h-[390px] ml-5"
                      >
                        <div className="min-h-[180px]">
                          <p className="font-nunito">
                            {option?.review.split(" ").length <= 50
                              ? option?.review + "..."
                              : option?.review}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 mt-[10px] min-h-[130px]">
                          <div className="min-w-[60px] min-h-[60px]">
                            <Image
                              width={60}
                              height={60}
                              className="rounded-full"
                              src={option?.student?.avatar}
                              alt=""
                            />
                          </div>
                          <div className="font-medium dark:text-white">
                            <div className="font-bold font-nunito">
                              {option?.student?.firstName}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-nunito">
                              {option?.student?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Marquee>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Highlights;
