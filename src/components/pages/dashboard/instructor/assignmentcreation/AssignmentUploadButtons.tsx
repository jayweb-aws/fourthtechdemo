import React from "react";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";


type typeProp = {
  isLoading: any
}

const AssignmentUploadButtons = (props: typeProp) => {
  const { isLoading } = props;
  return (
    <div className="w-full lg:flex flex justify-end items-center gap-x-1 lg:gap-x-3 mt-5">
      <button
        type="button"
        className="text-blue-700 duration-300 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2 py-2.5 text-center mr-2 mb-2"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="flex text-blue-700 duration-300 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 text-center mr-2 mb-2"
      >
        {isLoading ? <ButtonLoader /> : "Save and Publish"}
      </button>
      {/*
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2"
      >
        Save
      </button>
   */ }
    </div>
  );
};

export default AssignmentUploadButtons;
