import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useUpdateVideoModuleMutation } from "../../../../../../../feature/api/dashboardApi";
import { useSingleVideoUploadMutation } from "../../../../../../../feature/api/mediaUploadApi";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

type FormData = {
  topicName: string;
  localVideo: string;
  youtubeVide: string;
  minutes: number;
  second: number;
  key: string;
};

const VideoCategory = ({
  id,
  setShowModal,
}: {
  id: string;
  setShowModal: any;
}) => {
  const [inputValue, setinputValue] = useState<FormData>({
    topicName: "",
    localVideo: "",
    youtubeVide: "",
    minutes: 0,
    second: 0,
    key: "",
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
  const [updateVideoModule, { isError, error, data, isLoading, isSuccess }] =
    useUpdateVideoModuleMutation();
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
      // console.log(file);
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
    }
    if (localVideoKey) {
      inputValue.key = localVideoKey;
    }
    if (youtubeUrl) {
      inputValue.key = inputValue.topicName;
    }

    if (
      !inputValue.topicName.trim() ||
      !inputValue.minutes ||
      !inputValue.second
    ) {
      toast.error("Invalid Input Field");
    } else {
      if (youtubeUrl.length > 0 || inputValue.localVideo.length > 0) {
        updateVideoModule({
          module: id,
          topicName: inputValue.topicName,
          localVideo: inputValue.localVideo,
          youtubeVideo: youtubeUrl,
          minutes: inputValue.minutes,
          second: inputValue.second,
          key: inputValue.key,
        });
      } else {
        toast.error("Invalid Input Field");
      }
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error("Video Moudle has added error");
      // console.log(error);
    } else if (isSuccess) {
      // console.log(data);
      setShowModal(false);
      toast.success("Video Module has Added Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <div>
      {/* Header */}
      

      {/* Content */}
      <div className="">
        <form>
          {/* Category Selection */}

          <p className="text-gray-600 text-sm">Select the video you want to associate with this module</p>

          {/* Lecture Form */}
          <div className="bg-white rounded-lg border border-gray-200 px-3 pt-3 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Add Lectures</h3>

            {/* Topic Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">Topic name</label>
              <input
                name="topicName"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter lecture title"
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {!inputValue.topicName.trim() && <p className="text-red-500 text-xs mt-1">Title is Required</p>}
            </div>

            {/* Video Upload */}
            {youtubeUrl.length === 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Video file</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center bg-gray-50">
                  <input type="file" id="file_input" onChange={videoFileGet} className="hidden" />
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-500 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <label
                      htmlFor="file_input"
                      className="cursor-pointer text-indigo-600 font-medium hover:text-indigo-800"
                    >
                      Click to upload <span className="text-sm text-gray-500 mt-1">or drag and drop</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-2">Supported format: MP4, WebM, OGG</p>
                  </div>
                </div>
                {uploadLoading && <p className="text-indigo-600 font-medium text-sm mt-2">Uploading...</p>}
                {isUploadSuccess && <p className="text-green-600 font-medium text-sm mt-2">Upload Success</p>}
              </div>
            )}

            {/* Video Link */}
            {!showVideoInputLocal && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Video Link</label>
                <input
                  name="youtubeVide"
                  onChange={(e) => handleYoutube(e.target.value)}
                  type="text"
                  placeholder="Enter video link"
                  className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {!inputValue.youtubeVide.trim() && (
                  <p className="text-gray-500 text-xs mt-1">Note: https://www.youtube-nocookie.com/embed/dFUYsbbf6U0</p>
                )}
              </div>
            )}

            {/* Duration */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Minutes</label>
                <input
                  name="minutes"
                  onChange={(e) => handleChange(e)}
                  type="number"
                  placeholder="Enter video minute"
                  className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  maxLength={4}
                />
                {!inputValue.minutes && <p className="text-red-500 text-xs mt-1">Minutes is Required</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Second</label>
                <div className="flex items-center">
                  <span className="text-xl mr-2">:</span>
                  <input
                    name="second"
                    onChange={(e) => handleChange(e)}
                    type="number"
                    placeholder="Enter video second"
                    className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    maxLength={2}
                  />
                </div>
                {!inputValue.second && <p className="text-red-500 text-xs mt-1">Seconds is Required</p>}
              </div>
            </div>
          </div>

          {/* Indentation */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Indentation</label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue="Don't Indent"
              >
                <option value="Don't Indent">Don't Indent</option>
                <option value="Indent">Indent</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center gap-4">
        <button
          onClick={() => setShowModal(false)}
          className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          onClick={videoSubmit}
          className="px-6 py-2.5 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center"
        >
          {isLoading ? <ButtonLoader /> : "Add Content"}
        </button>
      </div>
    </div>
  );
};

export default VideoCategory;
