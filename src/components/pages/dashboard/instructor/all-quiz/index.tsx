import { Menu, Transition } from "@headlessui/react";
import { Spinner } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import toast from 'react-hot-toast';
import rocket from "../../../../../assets/dashboard/Mask group.png";
import {
  useAllQuizInstructorQuery,
  useDeleteQuizMutation,
} from "../../../../../feature/api/dashboardApi";

export default function AllQuizes() {
  const { data, isSuccess, isError, isLoading } = useAllQuizInstructorQuery({});
  const [
    DeleteQuiz,
    {
      isLoading: DeleteQuizLoading,
      error: quizdeleteError,
      data: quizdata,
      isSuccess: quizSuccess,
      isError: quizError,
    },
  ] = useDeleteQuizMutation();

  const DeleteQuizs = (id: any) => {
    DeleteQuiz(id);
  };

  useEffect(() => {
    if (quizError) {
      toast.error("Quiz has Deleted error");
    } else if (quizSuccess) {
      toast.success("Quiz has Deleted Successfully!");
    }
  }, [quizError, quizSuccess]);
  return (
    <div className="xsm:p-1 sm:p-1 lg:p-4 md:p-3 xl:p-5 font-nunito">
      <div className="flex justify-between items-center mb-[20px] xsm:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        <div>
          <h1 className="font-bold text-lg">Quizes</h1>
        </div>

        <div className="flex justify-between items-center">
          <div className="p-[5px] border-[1px] rounded-l-full rounded-r-full border-gray-300  flex justify-between items-center">
            <div className="border-r-[3px] border-gray-300 mx-[3px]">
              <h1 className="mr-[3px]"> 40% of total </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1>1 Rule</h1>
              <span>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9781 0.722605C11.2417 0.986209 11.2417 1.4136 10.9781 1.6772L6.00078 6.6545L1.02348 1.6772C0.75988 1.4136 0.75988 0.986209 1.02348 0.722605C1.28709 0.459001 1.71447 0.459001 1.97808 0.722605L6.00078 4.74531L10.0235 0.722605C10.2871 0.459001 10.7145 0.459001 10.9781 0.722605Z"
                    fill="#3F434A"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="xsm:mx-[5px] sm:mx-[5px] md:mx-[10] lg:mx-[30px] xl:mx-[30px] cursor-pointer">
            <Link
              href={"/dashboard/quiz/quiz-creation"}
              as={`/dashboard/quiz/quiz-creation`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 16.5C33 20.8761 31.2616 25.0729 28.1673 28.1673C25.0729 31.2616 20.8761 33 16.5 33C12.1239 33 7.92709 31.2616 4.83274 28.1673C1.73839 25.0729 0 20.8761 0 16.5C0 12.1239 1.73839 7.92709 4.83274 4.83274C7.92709 1.73839 12.1239 0 16.5 0C20.8761 0 25.0729 1.73839 28.1673 4.83274C31.2616 7.92709 33 12.1239 33 16.5ZM17.5312 9.28125C17.5312 9.00775 17.4226 8.74544 17.2292 8.55205C17.0358 8.35865 16.7735 8.25 16.5 8.25C16.2265 8.25 15.9642 8.35865 15.7708 8.55205C15.5774 8.74544 15.4688 9.00775 15.4688 9.28125V15.4688H9.28125C9.00775 15.4688 8.74544 15.5774 8.55205 15.7708C8.35865 15.9642 8.25 16.2265 8.25 16.5C8.25 16.7735 8.35865 17.0358 8.55205 17.2292C8.74544 17.4226 9.00775 17.5312 9.28125 17.5312H15.4688V23.7188C15.4688 23.9923 15.5774 24.2546 15.7708 24.448C15.9642 24.6414 16.2265 24.75 16.5 24.75C16.7735 24.75 17.0358 24.6414 17.2292 24.448C17.4226 24.2546 17.5312 23.9923 17.5312 23.7188V17.5312H23.7188C23.9923 17.5312 24.2546 17.4226 24.448 17.2292C24.6414 17.0358 24.75 16.7735 24.75 16.5C24.75 16.2265 24.6414 15.9642 24.448 15.7708C24.2546 15.5774 23.9923 15.4688 23.7188 15.4688H17.5312V9.28125Z"
                  fill="#3A57E8"
                />
              </svg>
            </Link>
          </div>
          <div>
            <span>
              <svg
                width="8"
                height="20"
                viewBox="0 0 8 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.61539 29.1923C7.61539 30.2022 7.21422 31.1707 6.50014 31.8848C5.78606 32.5988 4.81756 33 3.80769 33C2.79783 33 1.82933 32.5988 1.11525 31.8848C0.401166 31.1707 0 30.2022 0 29.1923C0 28.1824 0.401166 27.2139 1.11525 26.4999C1.82933 25.7858 2.79783 25.3846 3.80769 25.3846C4.81756 25.3846 5.78606 25.7858 6.50014 26.4999C7.21422 27.2139 7.61539 28.1824 7.61539 29.1923ZM7.61539 16.5C7.61539 17.5099 7.21422 18.4784 6.50014 19.1924C5.78606 19.9065 4.81756 20.3077 3.80769 20.3077C2.79783 20.3077 1.82933 19.9065 1.11525 19.1924C0.401166 18.4784 0 17.5099 0 16.5C0 15.4901 0.401166 14.5216 1.11525 13.8076C1.82933 13.0935 2.79783 12.6923 3.80769 12.6923C4.81756 12.6923 5.78606 13.0935 6.50014 13.8076C7.21422 14.5216 7.61539 15.4901 7.61539 16.5ZM7.61539 3.80769C7.61539 4.81755 7.21422 5.78606 6.50014 6.50014C5.78606 7.21422 4.81756 7.61538 3.80769 7.61538C2.79783 7.61538 1.82933 7.21422 1.11525 6.50014C0.401166 5.78606 0 4.81755 0 3.80769C0 2.79783 0.401166 1.82933 1.11525 1.11525C1.82933 0.401167 2.79783 0 3.80769 0C4.81756 0 5.78606 0.401167 6.50014 1.11525C7.21422 1.82933 7.61539 2.79783 7.61539 3.80769Z"
                  fill="#707070"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        isSuccess && (
          <div className="w-full flex flex-col max-w-[100vw] max-h-[100vh] overflow-y-scroll">
            <div className="">
              {data.data.quazes.map((item: any) => (
                <div
                  key={item._id}
                  className="p-3 bg-white flex justify-between items-center w-full border-l-green-400 border-l-[8px] border-b-slate-400 border-b-[2px] "
                >
                  <div className="w-full flex xsm:items-start sm:items-start md:items-start lg:items-center xl:items-center ">
                    <div>
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 59 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.4375 11.0625H25.8125V18.4375H18.4375V11.0625Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M33.1875 11.0625H40.5625V18.4375H33.1875V11.0625Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M18.4375 25.8125H25.8125V33.1875H18.4375V25.8125Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M33.1875 25.8125H40.5625V33.1875H33.1875V25.8125Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M18.4375 40.5625H25.8125V47.9375H18.4375V40.5625Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M33.1875 40.5625H40.5625V47.9375H33.1875V40.5625Z"
                            fill="#6B6B6B"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="xl:mx-[15px] md:mx-[5px] xsm:[mx-5px] lg:[mx-5px] sm:[mx-5px] ">
                      <span>
                        <Image src={rocket} alt="" width={25} height={25} />
                      </span>
                    </div>
                    <div className="">
                      <h1 className="font-bold text-2xl">{item.title}</h1>
                      <div className="flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between xsm:items-start sm:items-start md:items-start lg:items-center xl:items-center md:text-sm sm:text-sm xsm:text-sm xl:text-sm lg:text-xs ">
                        <p>Week 1</p>
                        <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                          |
                        </p>
                        <p>March 29-32</p>
                        <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                          |
                        </p>
                        <p>Course Overview & Module 1 Module</p>
                        <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                          |
                        </p>
                        <p>Due Apr 1 at 11:59pm</p>
                        <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                          |
                        </p>
                        <p>20 pts</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[10px] flex justify-end ">
                    <div className="flex justify-between items-center">
                      <div className="mr-[20px]">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.9141"
                              cy="16.917"
                              r="15.75"
                              fill="white"
                            />
                            <path
                              d="M35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5ZM26.3156 10.8719C26.1594 10.7162 25.9733 10.5936 25.7686 10.5114C25.5639 10.4293 25.3447 10.3892 25.1241 10.3937C24.9036 10.3982 24.6862 10.4471 24.485 10.5376C24.2838 10.628 24.1029 10.7581 23.9531 10.92L16.3559 20.5997L11.7775 16.0191C11.4665 15.7293 11.0551 15.5715 10.6301 15.579C10.2051 15.5865 9.79954 15.7587 9.49895 16.0593C9.19836 16.3599 9.02618 16.7654 9.01868 17.1904C9.01118 17.6155 9.16895 18.0268 9.45875 18.3378L15.2469 24.1281C15.4028 24.2838 15.5885 24.4064 15.7928 24.4887C15.9972 24.5711 16.216 24.6114 16.4363 24.6073C16.6566 24.6032 16.8738 24.5548 17.075 24.465C17.2761 24.3751 17.4571 24.2457 17.6072 24.0844L26.3397 13.1687C26.6374 12.8592 26.8019 12.4453 26.7978 12.0158C26.7937 11.5864 26.6214 11.1757 26.3178 10.8719H26.3156Z"
                              fill="#1F8E61"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <Menu as="div" className="relative ">
                          <div>
                            <Menu.Button className="rounded-full  p-3 text-white hover:text-white focus:outline-none ">
                              <span className="sr-only">Open chat menu</span>
                              <svg
                                width="15"
                                height="20"
                                viewBox="0 0 9 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 34.5C9 35.6935 8.5259 36.8381 7.68198 37.682C6.83807 38.5259 5.69347 39 4.5 39C3.30653 39 2.16193 38.5259 1.31802 37.682C0.474105 36.8381 0 35.6935 0 34.5C0 33.3065 0.474105 32.1619 1.31802 31.318C2.16193 30.4741 3.30653 30 4.5 30C5.69347 30 6.83807 30.4741 7.68198 31.318C8.5259 32.1619 9 33.3065 9 34.5ZM9 19.5C9 20.6935 8.5259 21.8381 7.68198 22.682C6.83807 23.5259 5.69347 24 4.5 24C3.30653 24 2.16193 23.5259 1.31802 22.682C0.474105 21.8381 0 20.6935 0 19.5C0 18.3065 0.474105 17.1619 1.31802 16.318C2.16193 15.4741 3.30653 15 4.5 15C5.69347 15 6.83807 15.4741 7.68198 16.318C8.5259 17.1619 9 18.3065 9 19.5ZM9 4.5C9 5.69347 8.5259 6.83807 7.68198 7.68198C6.83807 8.52589 5.69347 9 4.5 9C3.30653 9 2.16193 8.52589 1.31802 7.68198C0.474105 6.83807 0 5.69347 0 4.5C0 3.30653 0.474105 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0C5.69347 0 6.83807 0.474106 7.68198 1.31802C8.5259 2.16193 9 3.30653 9 4.5Z"
                                  fill="#707070"
                                />
                              </svg>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item key={item.name}>
                                <a
                                  onClick={() => DeleteQuizs(item._id)}
                                  className={`bg-gray-100  cursor-pointer block px-4 py-2 text-sm text-gray-700`}
                                >
                                  <div className="flex gap-1 items-center">
                                    <AiOutlineDelete /> Delete
                                  </div>
                                </a>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
