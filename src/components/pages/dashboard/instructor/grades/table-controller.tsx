function TableController() {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 mb-5 justify-between">
        <div className="col-span-6 space-x-4 md:space-x-6 ">
          <div className="">
            <form>
              <div className="relative md:w-[200px] lg:w-[250px]">
                <input
                  type="search"
                  className="w-full py-2.5 pl-2 text-sm text-gray-900 border border-[#F9F9F9] rounded-lg bg-white focus:border-[#F9F9F9]"
                  placeholder="Search"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-6 flex justify-end items-center">
          <div className="sm:flex-row  lg:flex-row xl:flex flex">
            <p className="text-small-text-color capitalize">sort: </p>
            <button className="flex ml-2">
              <span className="text-indigo-600">All</span>
              <span className="ml-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22 12C22 17.515 17.514 22 12 22C6.486 22 2 17.515 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12Z"
                    fill="#8A92A6"
                  />
                  <path
                    d="M16.2201 10.5575C16.2201 10.7485 16.1471 10.9405 16.0011 11.0865L12.5311 14.5735C12.3901 14.7145 12.1991 14.7935 11.9991 14.7935C11.8001 14.7935 11.6091 14.7145 11.4681 14.5735L7.99609 11.0865C7.70409 10.7935 7.70409 10.3195 7.99809 10.0265C8.29209 9.73448 8.76709 9.73548 9.05909 10.0285L11.9991 12.9815L14.9391 10.0285C15.2311 9.73548 15.7051 9.73448 15.9991 10.0265C16.1471 10.1725 16.2201 10.3655 16.2201 10.5575Z"
                    fill="#8A92A6"
                  />
                </svg>
              </span>
            </button>
            <div className="flex md:ml-8 sm:ml-8 xsm:ml-2 lg:ml-8 xl:ml-8">
              <button className="flex">
                <span className="text-indigo-600">filter</span>
                <span className="ml-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5715 13.5941L20.4266 7.72014C20.7929 7.35183 21 6.84877 21 6.32376V4.60099C21 3.52002 20.1423 3 19.0844 3H4.91556C3.85765 3 3 3.52002 3 4.60099V6.3547C3 6.85177 3.18462 7.33087 3.51772 7.69419L8.89711 13.5632C8.9987 13.674 9.14034 13.7368 9.28979 13.7378L14.1915 13.7518C14.3332 13.7528 14.4699 13.6969 14.5715 13.5941Z"
                      fill="#8A92A6"
                    />
                    <path
                      opacity="0.4"
                      d="M9.05664 13.6855V20.2901C9.05664 20.5307 9.17777 20.7573 9.37606 20.887C9.48938 20.9619 9.62027 20.9998 9.75116 20.9998C9.84982 20.9998 9.94848 20.9789 10.0403 20.9369L14.0062 19.0884C14.2543 18.9736 14.4136 18.7211 14.4136 18.4426V13.6855H9.05664Z"
                      fill="#8A92A6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableController;
