function TableController({
  generatePDF,
  searchFunction = () => {
    // console.log("search");
  },
  searchValue,
}: any) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between  font-nunito">
        <div className="flex items-center space-x-3 text-[#8A92A6] mb-[10px] md:mb-0">
          <span className="font-nunito">Showing</span>
          <select
            id="countries"
            className="bg-[#EBEEFD] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito"
          >
            <option defaultValue={"10"}>10</option>
            <option defaultValue={"15"}>15</option>
            <option defaultValue={"20"}>20</option>
          </select>
          <span className="hidden md:inline font-nunito">Entries</span>
        </div>
        <div className="flex gap-x-[10px] md:space-x-6 items-center">
          <div className="hidden md:block">
            <form>
              <div className="relative md:w-[200px] lg:w-[250px]">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e: any) => searchFunction(e)}
                  className="w-full py-2.5 pl-2 text-sm text-gray-900 border border-[#F9F9F9] rounded-lg bg-[#F9F9F9] focus:border-[#F9F9F9]"
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
          <button className="bg-[#3A57E8] uppercase rounded text-white px-3 lg:px-5 py-1 lg:py-2  font-nunito">
            PDF
          </button>

          <button
            onClick={generatePDF}
            className="bg-[#3A57E8] uppercase rounded text-white px-3 lg:px-5 py-1 lg:py-2 font-nunito "
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
}

export default TableController;
