import React, { useState, useEffect } from "react";
import Upload from "../../../../../../Icon/Upload";
import { useSingleFileUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { toast } from 'react-toastify';
import { InputErrorMessage } from '../../../../../utils/error';

type typefun = {
  setValue: any;
  errors: any;
  register: any
}

const AssignmentFile = (props: typefun) => {
  const { setValue, errors, register } = props
  const [Filename, setFilename] = useState();
  const [filePreview, setFilePreview] = useState("");
  const [singleFileupload, { isLoading: uploadLoading, error: uploadError, data: uploadData, isSuccess: isUploadSuccess, isError: isUploadError }] = useSingleFileUploadMutation();

  const FileGet = (e: any) => {
    const file = e.target.files;
    if (file && file.length > 0 && file['0']) {
      const formData = new FormData();
      formData.append("file", file['0']);
      setFilename(e.target.files[0].name)
      singleFileupload(formData);

    } else if (file && file.length > 0 && file['0'].type.substr(0, 5) !== "file") {
      toast.error("Select a valid file.");

    }
  };


  useEffect(() => {
    if (isUploadError) {
      // console.log("upload error", uploadError);
      toast.error("file upload failed");
    } else if (isUploadSuccess) {
      // console.log("upload success", uploadData);
      setFilePreview(uploadData.data.fileUrl);
      setValue("fileUrl", uploadData.data.fileUrl)
      setValue("key", uploadData.data.key)
      toast.success("upload file success")

    }
  }, [isUploadError, isUploadSuccess]);



  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-xl mt-[20px]">Assignment File</h1>
        <div className="bg-white lg:p-0 mt-1 p-0 ">
          <div className="w-full">
            <div
              // htmlFor="dropzone-file"
              className=" h-28 w-full lg:w-4/5 border-2 px-4 py-2 border-gray-300 border-dashed rounded-lg  bg-white"
            >
              <p>Assignment file</p>
              <div className="flex justify-center mt-1 items-center">
                <label className="text-white xsm:w-[7.5rem] lg:w-[9.5rem] justify-center items-center flex gap-3 bg-[#3A57E8] rounded-lg shadow-lg tracking-wide  cursor-pointer" style={{ padding: '10px 0px' }}>
                  <svg className="h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="text-base leading-normal">Upload</span>
                  <input onChange={FileGet} type='file' className="hidden" />
                </label>
                <span className="ml-2">{Filename ? Filename : "No file choosen"}</span>
              </div>

              {/* <div className="flex  items-center justify-between pt-5 pb-6">
                <Upload size={30} className="text-red-500" />
                <input
                  // htmlFor="dropzone-file"
                  // type="button"

                  placeholder="Upload"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 flex justify-between mr-2 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                />
                {/* <p className="mx-4">Upload</p> */}
              {/* <input id="dropzone-file" type="file" className="hidden" /> */}
              {/* </input> */}
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p> */}
              {/* </div> */}
            </div>
            <div>
              {errors.fileUrl && <InputErrorMessage message="Enter file" />}
            </div>
            <div className='mt-5'>
              <p className='text-[#3A57E8] font-medium'>{uploadLoading && "uploading..."}{isUploadSuccess && "Upload Completed"}</p>
            </div>
            <div className="w-full lg:w-4/5 lg:px-3 px-1 py-1 mt-5 flex justify-between items-center bg-[#CDEBEC]">
              <p className="text-[#056C71]">file types</p>
              <p className="text-xs">Zip, rar, txt, doc, ppt, xlsx, png, jpg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentFile;
