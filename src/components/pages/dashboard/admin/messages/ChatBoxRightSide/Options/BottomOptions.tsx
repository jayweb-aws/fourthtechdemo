import React,{useState,useEffect} from 'react';
import { MdKeyboardVoice, MdUploadFile } from 'react-icons/md';
import {usePostMessageMutation} from "../../../../../../../feature/api/dashboardApi";
import {useSingleFileUploadMutation} from "../../../../../../../feature/api/mediaUploadApi";
import {Spinner} from "flowbite-react";
import {toast} from "react-toastify";


const BottomOptions = (chatid:any) => {
    const [postMessage, { error, data, isLoading, isSuccess, isError }] = usePostMessageMutation();
    const [text, settext] = useState("")

    const [
        singleFileupload,
        {
          isLoading: uploadLoading,
          error: uploadError,
          data: uploadData,
          isSuccess: isUploadSuccess,
          isError: isUploadError,
        },
      ] = useSingleFileUploadMutation();


      const FileGet = (e: any) => {
        const file = e.target.files;
        if (file && file.length > 0 && file["0"]) {
          const formData = new FormData();
          formData.append("file", file["0"]);
          singleFileupload(formData);
        } else if (
          file &&
          file.length > 0 &&
          file["0"].type.substr(0, 5) !== "file"
        ) {
          toast.error("Select a valid file.");
        }
      };  

    const actionSubmit = () => {
       if(chatid.socket.current){
        chatid.setmsgLoadPost(true)
        chatid.setmsgLoadPost(isLoading)
        const obj = {
            chatId:chatid.chatid,
            content: {
                text:text
            }
        }
       
        postMessage(obj)
       settext("")
       if(data?.data) {
        chatid?.socket.current.emit("new_message",data.data)
       }
      
       } 
    }
    
   
   
    
    useEffect(() => {
        if(isSuccess) {
            chatid?.socket.current.emit("new_message",data?.data)
            chatid?.setmsgLoadPost(isLoading)
           }
    }, [isSuccess])
    
    useEffect(() => {
        if (isUploadError) {
          // console.log("upload error", uploadError);
          toast.error((uploadError as any).data.message);
        } else if (isUploadSuccess) {
          // toast.success("upload file success")
          const obj = {
            chatId:chatid.chatid,
            content: {
                files:uploadData?.data?.fileUrl
            }
        }
       
        postMessage(obj)
           
        }
      }, [isUploadError, isUploadSuccess]);
    

    /////////////////

    return (
        <div className="flex items-center mt-10 justify-between w-full p-3 border-t border-gray-300">
            <input
                type="text"
                placeholder="Type a message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-50 outline-none focus:text-gray-700 focus:outline-none rounded border-b focus:border-b focus:border-[#3A57E8]"
                name="message"
                onChange={(e) => settext(e.target.value)}
                value={text}
                required
            />
          
            <div className='flex space-x-4'>
              {
                /*
                <button>
                    <MdKeyboardVoice className='text-gray-500 text-xl' />
                </button>
                */
              }
                <button >
                    <label>
                        <MdUploadFile className='text-gray-500 text-xl cursor-pointer' />
                        <input disabled={isLoading || uploadLoading} type='file' className='hidden' onChange={FileGet} accept="image/png, image/gif, image/jpeg"/>
                    </label>
                </button>
                <button disabled={isLoading || uploadLoading} type="submit" onClick={actionSubmit}>
                    {
                        isLoading || uploadLoading ? <div><Spinner /></div> :

                        <svg
                        className="w-6 h-6 text-[#3A57E8] origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    }
                </button>
            </div>
        </div>
    );
};

export default BottomOptions;