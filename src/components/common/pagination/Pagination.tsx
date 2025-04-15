import { DOTS, usePagination } from "./usePagination";
const Pagination = (props: any) => {
  const {
    onPageChange,
    itemsCount,
    siblingCount = 1,
    currentPage,
    limit,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    itemsCount,
    siblingCount,
    limit,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange?.length - 1]
    : 0;
  return (
    <ul className="inline-flex items-center shadow  text-[#3A57E8]">
      <li className={`cursor-pointer`} onClick={onPrevious} key={"previous"}>
        <button
          disabled={currentPage == 1}
          className="block cursor-pointer px-3 py-2 ml-0 leading-tight text-[#3A57E8] bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key="dots" className="pagination-item dots px-3 py-2">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={`px-3 mx-1 cursor-pointer rounded-full py-2 leading-tight text-[#3A57E8] bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              pageNumber === currentPage ? "!bg-[#3A57E8] !text-white" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li key={"next"}>
        <button
          disabled={currentPage === lastPage}
          onClick={onNext}
          className="block cursor-pointer px-3 py-2 leading-tight text-[#3A57E8] bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
