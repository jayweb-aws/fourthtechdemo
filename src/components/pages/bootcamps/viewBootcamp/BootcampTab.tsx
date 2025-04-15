import { Tabs } from "flowbite-react";
import React, { useRef, useState } from "react";
import OverView from "./Tab-option/Overview";
import Instructor from "./Tab-option/Instructor";
import Faqs from "./Tab-option/Faqs";
import Curriculum from "./Tab-option/Curriculum";
import Review from "./Tab-option/Review";

const BootcampTab = ({ course }: { course: any }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Create a ref that will be assigned to the wrapper element
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="p-1 font-nunito"
      style={{ boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.15)" }}
      ref={wrapperRef} // Assign the wrapper ref to the outermost element
    >
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        className="p-0 [&>*:nth-child(odd)]:py-2  [&>*:nth-child(even)]:py-0"
      >
        <Tabs.Item active title="Overview" className="pl-3!important">
          <OverView course={course} />
        </Tabs.Item>
        <Tabs.Item title="Curriculum" className="p-0">
          <Curriculum modules={course.modules} />
        </Tabs.Item>
        <Tabs.Item title="Instructor" className="p-0">
          <Instructor course={course} />
        </Tabs.Item>
        <Tabs.Item title="Reviews" className="p-0">
          <Review rating={course.ratingsAverage}/>
        </Tabs.Item>
        <Tabs.Item title="FAQs" className="p-0">
          <Faqs faqs={course.faqs} />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default BootcampTab;
