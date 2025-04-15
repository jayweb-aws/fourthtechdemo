/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Spinner } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../app/hooks";
import {
  useGetAllReviewPublishQuery,
  useReviewCreateMutation,
} from "../../../../../feature/api/dashboardApi";
import { isAuthorized } from "../../../../../utils/auth";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

const Review = ({ rating }: { rating: any }) => {
  const {
    user: { roles, studentType, email },
    refresh,
  } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const id = router.query.id as any;

  const [reviewCreate, { error, data, isLoading, isSuccess, isError }] =
    useReviewCreateMutation();
  const {
    error: reviewError,
    data: reviewData,
    isLoading: ReviewLoading,
    isSuccess: ReviewSucces,
    isError: ReviewError,
  } = useGetAllReviewPublishQuery(id);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const handleComment = (data: any) => {
    reviewCreate({
      review: data.question,
      rating: data.rating,
      course: id,
    });

    // toast.success("Thanks for your feedback!");
  };

  useEffect(() => {
    if (isError) {
      toast.error("Multiple reviews not allowed");
    }
    if (isSuccess) {
      toast.success("Review Created Successfully");
      reset();
    }
  }, [isError, isSuccess]);

  //console.log(reviewData);

  return (
    <div className="font-nunito ">
      <div>
        <h5 className="text-xl font-bold">Our Student Reviews</h5>
        <div className="mt-4 grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <div className="text-center flex justify-center flex-col mt-4">
              <h2 className="font-bold text-[27px]">{rating}</h2>
              <div className="text-center m-auto">
                <ReactStars size={18} value={rating} edit={false} half={true} />
              </div>
              <div>
                <span className="text-[#848589] font-normal font-nunito">
                  (Based on todays review)
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-6 md:col-span-8 mt-3">
                <div className="w-full bg-[#FEF6E0] rounded-full h-1.5 mb-5 dark:bg-gray-700">
                  <div
                    className="bg-[#F7C32E] h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="w-full bg-[#FEF6E0] rounded-full h-1.5 mb-5 dark:bg-gray-700">
                  <div
                    className="bg-[#F7C32E] h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="w-full bg-[#FEF6E0] rounded-full h-1.5 mb-5 dark:bg-gray-700">
                  <div
                    className="bg-[#F7C32E] h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="w-full bg-[#FEF6E0] rounded-full h-1.5 mb-5 dark:bg-gray-700">
                  <div
                    className="bg-[#F7C32E] h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <div className="w-full bg-[#FEF6E0] rounded-full h-1.5  dark:bg-gray-700">
                  <div
                    className="bg-[#F7C32E] h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 mt-[5px]">
                <ul className="leading-[25px]">
                  <li>
                    <ReactStars size={18} value={5} edit={false} half={true} />
                  </li>
                  <li>
                    <ReactStars size={18} value={4} edit={false} half={true} />
                  </li>
                  <li className="mb-[3px]">
                    <ReactStars size={18} value={3} edit={false} half={true} />
                  </li>
                  <li>
                    <ReactStars size={18} value={2} edit={false} half={true} />
                  </li>
                  <li>
                    <ReactStars size={18} value={1} edit={false} half={true} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div>
            {ReviewLoading ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : ReviewError ? (
              <div>Error...</div>
            ) : (
              ReviewSucces &&
              reviewData?.data?.reviews?.map((val: any) => (
                <div
                  key={val?._id}
                  className="flex gap-4 items-start mt-1 md:flex-row flex-col mb-4 border-b border-1 border-[#0000001a]"
                >
                  <div className="w-[75px] md:w-[86px]">
                    <Image
                      src={val?.student?.avatar}
                      alt=""
                      className="rounded-full"
                      width={"75px"}
                      height={"75px"}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-nunito font-bold mb-1 flex md:items-center gap-2 md:flex-row flex-col items-start ">
                      <div>
                        {`${val?.student?.firstName} ${val?.student?.lastName}`}
                      </div>
                      <div>
                        <ReactStars
                          size={18}
                          value={val?.rating}
                          edit={false}
                          half={true}
                        />
                      </div>
                    </h2>
                    <p className="text-[#848589] ">
                      {val?.review?.split(" ").length <= 50
                        ? val?.review + "..."
                        : val?.review}
                    </p>
                  </div>
                </div>
              ))
            )}
            <hr className="h-full w-[2px] my-[20px]" />
            {isAuthorized(email, refresh) && (
              <div>
                <h1 className="font-bold text-2xl mb-[5px]">Leave a Review</h1>
                <div>
                  <form onSubmit={handleSubmit(handleComment)}>
                    <div className="xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col flex">
                      <input
                        type="text"
                        placeholder="Name"
                        className="mr-[30px]"
                        style={{
                          background: " #FFFFFF",
                          boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                          borderRadius: "8px",
                          width: "100%",
                          border: "none",
                          padding: " 11px 17px",
                        }}
                        {...register("name", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        style={{
                          background: " #FFFFFF",
                          boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                          borderRadius: "8px",
                          width: "100%",
                          border: "none",
                          padding: " 11px 17px",
                        }}
                        className="xsm:mt-[10px] sm:mt-0 lg:mt-0 xl:mt-0 md:mt-0"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div>
                      <select
                        {...register("rating", { required: true })}
                        className="mt-3 text-[#8A92A6]"
                        style={{
                          boxShadow: "0px 1px   15px rgb(0 0 0 / 15%)",
                          borderRadius: "8px",
                          width: "100%",
                          border: "none",
                          padding: " 11px 17px",
                        }}
                        //   {...register("category", { required: true })}
                      >
                        <option className="flex w-full" value={5}>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p className="mr-[5px]">(5/5)</p>
                        </option>
                        <option className="flex w-full" value={4}>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p>☆</p>
                          <span className="mr-[5px]">(4/5)</span>
                        </option>
                        <option className="flex w-full" value={3}>
                          <p>★</p>
                          <p>★</p>
                          <p>★</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p className="mr-[5px]">(3/5)</p>
                        </option>
                        <option className="flex w-full" value={2}>
                          <p>★</p>
                          <p>★</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p className="mr-[5px]">(2/5)</p>
                        </option>
                        <option className="flex w-full" value={1}>
                          <p>★</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p>☆</p>
                          <p className="mr-[5px]">(1/5)</p>
                        </option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Your review"
                        className="mt-3"
                        style={{
                          background: " #FFFFFF",
                          boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                          borderRadius: "8px",
                          width: "100%",
                          border: "none",
                          padding: " 11px 17px",
                        }}
                        {...register("question", { required: true })}
                      ></textarea>
                    </div>
                    <Button
                      className="  bg-[#3A57E8] mt-[10px] font-bold cursor-pointer"
                      type="submit"
                    >
                      {isLoading ? <ButtonLoader /> : "Submit"}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
