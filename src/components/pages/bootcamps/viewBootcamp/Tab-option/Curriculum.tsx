import React from "react";
import { Accordion } from "flowbite-react";
import play from "../../../../../assets/lessonplay.png";
import Image from "next/image";

const Curriculum = ({ modules }: { modules: any }) => {
  //console.log(modules);
  return (
    <div className="font-nunito">
      {modules.map((item: any) => (
        <Accordion
          alwaysOpen={true}
          className="bg-white !border-none mb-3 font-nunito"
          key={item}
        >
          <Accordion.Panel className="!bg-white !border-none">
            <Accordion.Title className="!bg-[#F5F7F9] focus:!ring-0 focus:!shadow-none hover:!bg-[#F5F7F9] !border-none">
              {item.name}
            </Accordion.Title>
            <Accordion.Content className="border-none">
              {item.videos.map((val: any) => (
                <div className="border-b  border-[#9a9ea469]" key={val}>
                  <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-1">
                      <Image src={play} alt="" />
                      <h3 className="font-nunito">{val.topicName}</h3>
                    </div>
                    <div>
                      <p className="text-[#747579]">
                        {val.minutes}m {val.second}s
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </div>
  );
};

export default Curriculum;
