import React from "react";

export default function ExamResult() {
  return (
    <div className="bg-white px-4 flex  my-5 flex-col justify-start  py-3 rounded-lg">
      <div className="flex items-center">
        <div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M36.6673 19.9997C36.6673 29.2063 29.2057 36.6663 20.0007 36.6663C10.7957 36.6663 3.33398 29.2063 3.33398 19.9997C3.33398 10.7963 10.7957 3.33301 20.0007 3.33301C29.2057 3.33301 36.6673 10.7963 36.6673 19.9997Z"
              fill="#1AA053"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.4499 21.0511C21.4499 21.8544 20.7949 22.5094 19.9915 22.5094C19.1882 22.5094 18.5332 21.8544 18.5332 21.0511V13.6844C18.5332 12.8811 19.1882 12.2261 19.9915 12.2261C20.7949 12.2261 21.4499 12.8811 21.4499 13.6844V21.0511ZM18.5415 26.3391C18.5415 25.5357 19.1932 24.8807 19.9915 24.8807C20.8132 24.8807 21.4665 25.5357 21.4665 26.3391C21.4665 27.1424 20.8132 27.7974 20.0082 27.7974C19.1999 27.7974 18.5415 27.1424 18.5415 26.3391Z"
              fill="#1AA053"
            />
          </svg>
        </div>
        <div className="ml-1">
          <h1 className="text-[#1AA053]">Exam Result</h1>
        </div>
      </div>
      <div className="my-4">
        <p className="text-sm text-small-text-color">
          Exam results are not published yet. What do you want to do?
        </p>
      </div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {" "}
            Publish Results
          </button>
        </div>
        <div className="col-span-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {" "}
            Publish Results
          </button>
        </div>
      </div>
    </div>
  );
}
