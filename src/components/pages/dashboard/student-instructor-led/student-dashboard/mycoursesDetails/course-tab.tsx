/* eslint-disable react/no-unescaped-entities */
import { Tabs } from "flowbite-react";
import { useRef, useState } from "react";
import Review from "../../../../../../components/pages/bootcamps/viewBootcamp/Tab-option/Review";
import Coursecontent from "./tab-options/course-conetent/index";
import Notes from "./tab-options/notes/index";
import Overview from "./tab-options/overview/index";
import QuestionAndAnswer from "./tab-options/q&a/index";

export default function CourseTab({ enrollmentData }: { enrollmentData: any }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef(null);

  return (
    <>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        ref={tabsRef}
        className="p-0 [&>*:nth-child(odd)]:py-2  [&>*:nth-child(even)]:py-0"
      >
        <Tabs.Item active title="Course Content" className="p-0">
          <div className="p-0">
            <Coursecontent enrollmentData={enrollmentData} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Overview" className="p-0">
          <Overview enrollmentData={enrollmentData} />
        </Tabs.Item>
        <Tabs.Item title="Q&A" className="p-0">
          <QuestionAndAnswer enrollmentData={enrollmentData} />
        </Tabs.Item>
        <Tabs.Item title="Notes" className="p-0">
          <Notes />
        </Tabs.Item>
        <Tabs.Item title="Reviews" className="p-0">
          <Review rating={enrollmentData?.course?.ratingsAverage} />
        </Tabs.Item>
      </Tabs.Group>
      {/* <div>Active tab: {activeTab}</div> */}
      {/* <Button.Group>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
          Profile
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
          Dashboard
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
          Settings
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
          Contacts
        </Button>
      </Button.Group> */}
    </>
  );
}
