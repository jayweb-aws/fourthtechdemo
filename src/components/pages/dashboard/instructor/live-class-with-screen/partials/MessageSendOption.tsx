import React from "react";
import atherate from "../../../../../../assets/liveclass/attherate.svg";
import emoji from "../../../../../../assets/liveclass/emoji-smile.svg";
import attach from "../../../../../../assets/liveclass/attach.svg";
import Image from "next/image";

const MessageSendOption = () => {
  return (
    <div className="border-t mt-32 pt-5">
      <div className="image-box flex space-x-5">
        <div className="cursor-pointer">
          <Image alt="" src={atherate} width={20} />
        </div>
        <div className="cursor-pointer">
          <Image alt="" src={emoji} width={20} />
        </div>
        <div className="cursor-pointer">
          <Image alt="" src={attach} width={20} />
        </div>
      </div>
      <div className="mt-2">
        <input
          className="w-full outline-none border-none rounded"
          type="text"
          placeholder="Write Your Message..."
        />
      </div>
    </div>
  );
};

export default MessageSendOption;
