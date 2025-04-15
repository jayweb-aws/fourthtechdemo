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
      }]  text-sm inline-block ${active ? "border-[#3A57E8]" : ""}`}
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
    if (value === "Student" || value === "Absentees(15)") {
      setActiveTab(value);
    }
  };
  return (
    <nav className="flex items-center gap-6">
      <div className="relative border-b-2 h-[30px] w-full  md:inline-block">
        <div className="flex absolute bottom-[-2px] gap-4">
          <TabLink
            btnText="Student"
            active={activeTab === "Student"}
            tabLink="Student"
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
