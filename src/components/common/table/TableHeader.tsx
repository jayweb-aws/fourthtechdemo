const TableHeader = ({ searchFunction = () => {}, searchValue = "" }: any) => {
  return (
    <div className="font-nunito flex  justify-between">
      <div className="flex items-center space-x-3 text-[#8A92A6]">
        <span className="font-nunito">Showing</span>
        <select
          id="countries"
          className="border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 font-nunito rounded-lg border bg-[#EBEEFD] text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option defaultValue={"10"}>10</option>
          <option defaultValue={"15"}>15</option>
          <option defaultValue={"20"}>20</option>
        </select>
        <span className="font-nunito hidden md:inline">Entries</span>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="hidden md:block">
          <form>
            <div className="relative md:w-[200px] lg:w-[250px]">
              <input
                type="search"
                value={searchValue}
                className="text-gray-900 w-full rounded-lg border border-[#F9F9F9] bg-[#F9F9F9] py-2.5 pl-2 text-sm focus:border-[#F9F9F9]"
                placeholder="Search"
                onChange={(e: any) => searchFunction(e)}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  aria-hidden="true"
                  className="text-gray-500 dark:text-gray-400 h-5 w-5"
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
    </div>
  );
};

export default TableHeader;
