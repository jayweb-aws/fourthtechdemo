import React from 'react';
import {Avatar} from "flowbite-react"

const Message = ({justify,data}:{justify:string,data:any}) => {
   // console.log(data)
    return (
        <li className={`flex justify-${justify}`}>
         <div className="chat-message">
             <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                   {
                     data?.content?.files &&   data?.content?.files[0] && <div className='py-4'>
                          <img src={data?.content?.files?.[0]}/>
                     </div>
                   } 
                  
                   {
                       data?.content?.text && 
                       <div><span className={`px-4 py-2 rounded-lg inline-block rounded-bl-none ${justify === "end" ? " bg-blue-600 text-white": "bg-gray-300 text-gray-600"}`}>{data?.content?.text}</span></div>  
                   }
                </div>
                {justify === "start" && <img src={data?.sender?.avatar} className="w-6 h-6 rounded-full order-1"/>}
             </div>
         </div>
        </li>
    );
};

export default Message;