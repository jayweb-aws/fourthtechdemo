import Image from "next/image";
import { useState } from "react";
import Button from "../../../../../../../../assets/Button.png";
import ArrowIcon from "../../../../../../../../assets/arrowdown.png";
import TextEditor from "../../../../../../../common/textEditor/TextEditor";

export default function index() {
  const [open, setopen] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div>
            <div className="w-full">
              <label className="font-normal text-sm">Create a new note</label>
              <div className="relative flex items-center mt-2">
                <input
                  type="text"
                  className="w-full pr-[50px] border border-[#8A92A6] rounded-md"
                />
                <div className="fd relative left-[-36px] top-[3px]">
                  <button
                    onClick={(e) => {
                      setopen(open ? false : true);
                    }}
                  >
                    <Image src={Button} width="26px" height="26px" />
                  </button>
                </div>
              </div>
              {open && <TextEditor />}
            </div>
            <div className="flex gap-6 mt-8 mb-5 flex-col lg:flex-row">
              <button className="bg-[#FFFFFF] border rounded px-4 py-2 gap-2 border-black flex items-center justify-center border-none">
                All Lectures <Image src={ArrowIcon} />{" "}
              </button>
              <button className="bg-[#FFFFFF] border gap-2 px-4 py-2 border-black  flex items-center justify-center border-none">
                Sort by most recent <Image src={ArrowIcon} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
