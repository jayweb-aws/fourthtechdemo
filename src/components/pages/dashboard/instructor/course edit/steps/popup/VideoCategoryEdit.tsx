import React, { useState, useEffect } from "react";
import { useUpdateVideoMutation } from "../../../../../../../feature/api/dashboardApi";
import { useSingleVideoUploadMutation } from "../../../../../../../feature/api/mediaUploadApi";
import toast from 'react-hot-toast';
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

type FormData = {
  topicName: string;
  localVideo: string;
  youtubeVideo: string;
  minutes: number;
  second: number;
  key: string;
};

const VideoCategoryEdit = ({
  item,
  setShowModal,
}: {
  item: any;
  setShowModal: any;
}) => {
  const [inputValue, setinputValue] = useState<FormData>({
    topicName: item.topicName,
    localVideo: item.localVideo,
    youtubeVideo: item.youtubeVideo,
    minutes: item.minutes,
    second: item.second,
    key: item.key,
  });
  const [validation, setValidation] = useState({
    topicName: "",
    localVideo: "",
    youtubeVide: "",
    minutes: 0,
    second: 0,
    key: "",
  });
  const [localVideo, setlocalVideo] = useState("");
  const [localVideoKey, setlocalVideoKey] = useState("");
  const [updateVideo, { isError, error, data, isLoading, isSuccess }] =
    useUpdateVideoMutation();
  const [
    singleVideoUpload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSingleVideoUploadMutation();
  const [showVideoInputLocal, setshowVideoInputLocal] = useState(false);
  const [youtubeUrl, setyoutubeUrl] = useState("");

  //video file get
  const videoFileGet = async (e: any) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "video") {
      const formData = new FormData();
      setshowVideoInputLocal(true);
      formData.append("video", file["0"]);
      //  console.log(file);
      singleVideoUpload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "video"
    ) {
      toast.error("Enter valid video file");
    }
  };

  useEffect(() => {
    if (isUploadError) {
      // console.log("upload error", uploadError);
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      setlocalVideo(uploadData.data.video);
      setlocalVideoKey(uploadData.data.key);
      toast.success("success");
    }
  }, [isUploadError, isUploadSuccess]);

  //handle submit updates
  function handleChange(e: any) {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value });
  }

  const handleYoutube = (e: any) => {
    setyoutubeUrl(e);
  };

  const videoSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (localVideo) {
      inputValue.localVideo = localVideo;
      inputValue.youtubeVideo = "";
    }
    if (localVideoKey) {
      inputValue.key = localVideoKey;
    }
    if (youtubeUrl) {
      inputValue.youtubeVideo = youtubeUrl;
      inputValue.key = inputValue.topicName;
      inputValue.localVideo = "";
    }

    // console.log(inputValue.topicName.trim())
    if (
      !inputValue.topicName.trim() ||
      !inputValue.minutes ||
      !inputValue.second
    ) {
      toast.error("Invalid Input Field");
    } else {
      if (youtubeUrl.length > 0 || inputValue.localVideo.length > 0) {
        updateVideo({
          id: item.id,
          topicName: inputValue.topicName,
          localVideo: inputValue.localVideo,
          youtubeVideo: inputValue.youtubeVideo,
          minutes: inputValue.minutes,
          second: inputValue.second,
          key: localVideoKey,
        });
      } else {
        toast.error("Invalid input field");
      }
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error("Video Moudle has added error");
      //console.log(error);
    } else if (isSuccess) {
      //console.log(data);
      setShowModal(false);
      toast.success("Video Module has Added Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <>
      <form>
        <div>
          <p className="text-[#8A92A6] text-[16px] mb-3 leading-[19px]">
            Select the video you want to associate with this module{" "}
          </p>
        </div>
        <div
          className="p-5"
          style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
        >
          <div className="flex flex-col mb-2">
            <label className="font-medium text-base mb-2">Topic name</label>
            <input
              name="topicName"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Enter Title"
              style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
              className="border-none mb-2"
              value={inputValue.topicName}
            />
            {!inputValue.topicName.trim() && (
              <p className="text-[red] text-[13px]">Title is Required</p>
            )}
          </div>

          {youtubeUrl.length == 0 && (
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Video file
              </label>
              <input
                onChange={videoFileGet}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <div>
                {uploadLoading && (
                  <p className="text-[#3A57E8] font-medium">uploading...</p>
                )}
                {isUploadSuccess && (
                  <p className="text-[#3A57E8] font-medium">Upload Success</p>
                )}
              </div>
            </div>
          )}
          {!showVideoInputLocal && (
            <div className="flex flex-col mb-2">
              <label className="font-medium text-base mb-2">Video Link</label>
              <input
                name="youtubeVide"
                onChange={(e) => handleYoutube(e.target.value)}
                type="text"
                placeholder="Enter youtube video embed url"
                style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                className="border-none mb-2"
                value={youtubeUrl || item.youtubeVideo}
                required
              />
              {!inputValue.youtubeVideo.trim() && (
                <p className="text-[red]  text-[13px] ">
                  Note: https://www.youtube-nocookie.com/embed/dFUYsbbf6U0
                </p>
              )}
            </div>
          )}

          <div className="flex flex-row gap-5">
            <div className="flex flex-col">
              <label className="font-medium text-base mb-2">Minute</label>
              <input
                name="minutes"
                onChange={(e) => handleChange(e)}
                type="number"
                placeholder="Enter Minute"
                style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                className="border-none mb-2"
                maxLength={3}
                value={inputValue.minutes}
                required
              />
              {!inputValue.minutes && (
                <p className="text-[red] text-[13px]">Minutes is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-base mb-2">Seconds</label>
              <input
                name="second"
                onChange={(e) => handleChange(e)}
                type="number"
                placeholder="Enter Second"
                style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                className="border-none mb-2"
                maxLength={2}
                value={inputValue.second}
                required
              />
              {!inputValue.second && (
                <p className="text-[red] text-[13px]">Seconds is Required</p>
              )}
            </div>
          </div>
          {/*
               <div className='flex flex-row justify-end gap-5 mt-4'>
                    <button type="button" className='bg-[#F2D6D3] text-[#C03221] py-2 px-5 rounded'>Close</button>
                    <button type="button" className='bg-[#1AA053] text-[#FFFFFF] px-6 rounded'>Save Lecture</button>
               </div> 
               */}
        </div>
        <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={() => setShowModal(false)}
            data-modal-hide="staticModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
          <button
            disabled={isLoading || uploadLoading}
            onClick={videoSubmit}
            data-modal-hide="staticModal"
            className="flex items-center justify-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {isLoading ? <ButtonLoader /> : "Update Item"}
          </button>
        </div>
      </form>
    </>
  );
};

export default VideoCategoryEdit;
