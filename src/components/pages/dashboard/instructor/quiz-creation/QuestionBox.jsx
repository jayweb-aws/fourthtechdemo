import { Disclosure } from "@headlessui/react";

export default function QuestionBox({ val }) {
  return (
    <div>
      <div className="mb-7 flex max-h-[100vh] flex-col overflow-y-auto rounded-md">
        <Disclosure as="div" className={`bg-white`}>
          {({ open }) => (
            <>
              <div
                className={`flex w-full items-center justify-between px-6 py-4 ${
                  !open ? "bg-transparent" : "bg-white"
                }  hover:bg-slate-50 text-left text-lg  font-bold  focus:bg-white focus:outline-none`}
              >
                <Disclosure.Button
                  className={"flex items-center justify-between"}
                >
                  <span
                    className="font-semibold text-black"
                    dangerouslySetInnerHTML={{
                      __html: val?.question,
                    }}
                  ></span>
                </Disclosure.Button>
                <div className="flex ">
                  <div className="mr-[10px]">
                    <Disclosure.Button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.7366 6.04606C19.4439 7.36388 20.8976 9.29455 21.9415 11.7091C22.0195 11.8924 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8924 2.05854 11.7091C4.14634 6.87903 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12Z"
                          fill="#3A57E8"
                        />
                        <path
                          d="M14.4308 11.997C14.4308 13.3255 13.3381 14.4115 12.0015 14.4115C10.6552 14.4115 9.5625 13.3255 9.5625 11.997C9.5625 11.8321 9.58201 11.678 9.61128 11.5228H9.66006C10.743 11.5228 11.621 10.6695 11.6601 9.60184C11.7674 9.58342 11.8845 9.57275 12.0015 9.57275C13.3381 9.57275 14.4308 10.6588 14.4308 11.997Z"
                          fill="#3A57E8"
                        />
                      </svg>
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-white px-5 py-5  ">
                {val?.url && (
                  <div className="h-24 w-28 py-2">
                    <img
                      src={val?.url}
                      className="h-full w-full bg-cover bg-center"
                    />
                  </div>
                )}
                <div className="flex flex-row items-start justify-between xsm:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                  <div className="xsm:w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] xl:w-[60%]">
                    <h1 className="font-normal text-[#8A92A6]">Options</h1>
                    <div className="grid grid-cols-2">
                      {val?.answers?.map((item) => (
                        <div key={"item._id"}>
                          <div className="flex ">
                            <p className="text-3xl font-bold !text-[#3A57E8]">
                              &#x2022;
                            </p>
                            <p className="pt-2 text-black"> {item?.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" m-l-[20px]">
                    <h1 className="font-normal text-[#8A92A6]">
                      Correct answers
                    </h1>
                    <div className="flex ">
                      <p className="text-3xl font-bold text-[#3A57E8]">
                        &#x2022;
                      </p>
                      <p className="pt-2 text-[#1AA053]">
                        {val?.answers
                          ?.filter((val) => val?.checked === true)
                          ?.map((val, id) => (
                            <p key={id}>{val?.value}</p>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="mt-7 font-poppins text-[16px] font-medium  text-black">
                  Explanation:
                </h2>
                <p
                  className=" text-sm font-normal"
                  dangerouslySetInnerHTML={{
                    __html: val?.explanation,
                  }}
                ></p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
