import { useRouter } from "next/router";
import { ActiveTab } from ".";

type TabLinkProps = {
  btnText: string;
  active: boolean;
  tabLink: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

type NavProps = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

const TabLink = (props: TabLinkProps) => {
  const { btnText, active, tabLink, setActiveTab } = props;
  return (
    <button
      className={`border-b-2 pb-2 text-[${
        active ? "#232D42" : "#8A92A6"
      }] font-semibold text-lg inline-block ${
        active ? "border-[#3A57E8]" : ""
      }`}
      onClick={() => setActiveTab(tabLink)}
    >
      {btnText}
    </button>
  );
};

const Nav = (props: NavProps) => {
  const { activeTab, setActiveTab } = props;
  const router = useRouter();

  const handleSelectTab = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "students-list" || value === "admission-request") {
      setActiveTab(value);
    }
  };
  return (
    <nav className="pb-[40px] flex items-center justify-between gap-6">
      <div className="relative border-b-2 h-[30px] w-[470px] hidden md:inline-block">
        <div className="flex absolute bottom-[-2px] gap-4">
          <TabLink
            btnText="Courses List"
            active={activeTab === "students-list"}
            tabLink="students-list"
            setActiveTab={setActiveTab}
          />
          <div>
            <p className="text-white bg-[#F16A1B] text-sm rounded-full  py-1 px-3 text-center ">
              5
            </p>
          </div>
          <span className="text-[#8A92A6] font-bold text-[20px] pb-3">|</span>
          <TabLink
            btnText="Courses Request"
            active={activeTab === "admission-request"}
            tabLink="admission-request"
            setActiveTab={setActiveTab}
          />
          <div>
            <p className="text-white bg-[#F16A1B] text-sm rounded-full  py-1 px-3 text-center ">
              5
            </p>
          </div>
        </div>
      </div>
      <select
        className="bg-[#EBEEFD] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:hidden"
        onChange={handleSelectTab}
      >
        <option value="students-list" selected={activeTab === "students-list"}>
          Students List
        </option>
        <option
          value="admission-request"
          selected={activeTab === "admission-request"}
        >
          Admission Request
        </option>
      </select>
      <button className="bg-[#3A57E8] rounded text-white px-3 lg:px-5 py-1.5 lg:py-2 md:mb-[20px]">
        Create New Course
      </button>
    </nav>
  );
};

export default Nav;
