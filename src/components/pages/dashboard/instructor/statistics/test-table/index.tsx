import responsiveStyle from "../../../../../../styles/ContactStyle.module.css";
import Table from "./table/index";
import avatar from "../../../../../../assets/user.png";
import { Dropdown } from "flowbite-react";

// fake data
let courses = [
  {
    id: 1,
    mail: "dummy@gmail.com",
    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Active",
  },
  {
    id: 2,
    mail: "dummy@gmail.com",

    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Complete",
  },
  {
    id: 3,
    mail: "dummy@gmail.com",

    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Pending",
  },
  {
    id: 4,
    mail: "dummy@gmail.com",

    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Hold",
  },
  {
    id: 5,
    mail: "dummy@gmail.com",

    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Inactive",
  },
  {
    id: 6,
    mail: "dummy@gmail.com",

    tutor: {
      name: "Floyd Miles",
      avatar: avatar,
    },
    courseTitle: "UI/UX Design",
    date: "14 Jan",
    status: "Active",
  },
];

const TestTable = () => {
  return (
    <div className="w-full mt-5 bg-white px-6 py-4 rounded-lg md:overflow-scroll xl:overflow-hidden lg:overflow-hidden xsm:overflow-scroll sm:overflow-x-visible">
      <div className="w-full flex justify-between items-center ">
        <div>
          <p className="font-bold text-lg">Submitted Tests</p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-small-text-color text-xs">Short By:</p>
            <div>
              <Dropdown label="Days" dismissOnClick={false}>
                <Dropdown.Item>Days</Dropdown.Item>
                <Dropdown.Item>Weeks</Dropdown.Item>
                <Dropdown.Item>Months</Dropdown.Item>
                <Dropdown.Item>Year</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 mt-2 bg-gray-100"></div>
      <div
        className={`  ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:overflow-x-scroll sm:overflow-x-auto xsm:overflow-x-scroll shadow-md sm:rounded-lg mt-12`}
      >
        <table className={`w-full text-[16px] md:text-[18px] text-left`}>
          <thead className="text-slate-900 font-normal bg-gray-200">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>

              <th scope="col" className="py-3 px-6 text-center">
                Date of Submission
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#232D42]">
            {courses?.map((course, idx) => (
              <Table key={idx} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestTable;
