import { useRouter } from "next/router";
import { ActiveTab } from ".";
import { useAppSelector } from "../../../../../app/hooks";
import Link from "next/link";

//@ts-ignore
type TabLinkProps = {
  btnText: string;
  active: any;
  tabLink: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

type NavProps = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  Modal: boolean;
  setShowModal: any;
};

const TabLink = (props: TabLinkProps) => {
  const { btnText, active, tabLink, setActiveTab } = props;
  return (
    <button
      className={` pb-2 mb-1 text-[${active ? "#232D42" : "#8A92A6"
        }] font-semibold text-lg inline-block ${active ? "border-[#3A57E8] border-b-[3px] rounded-t-sm" : "border-b-[3px] border-transparent"
        }`}
      onClick={() => setActiveTab(tabLink)}
    >
      {btnText}
    </button>
  );
};

const Nav = (props: NavProps) => {
  const { activeTab, setActiveTab, Modal, setShowModal } = props;
  const router = useRouter();
  const {
    user: { roles },
  } = useAppSelector((state) => state.auth);
  const handleSelectTab = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (
      value === "courses-list" ||
      value === "courses-request" ||
      value === "courses-categories"
    ) {
      setActiveTab(value);
    }
  };
  return (
    <nav className="pl-9 flex flex-col sm:flex-row sm:items-center gap-6 font-nunito overflow-x-auto">
      <div className="relative h-[35px] w-[470px]">
        <div className="flex absolute bottom-[-2px] gap-8">
          <TabLink
            btnText="Courses List"
            active={activeTab === "courses-list"}
            tabLink="courses-list"
            setActiveTab={setActiveTab}
          />
          {roles.includes("admin") && (
            <>
              
              <TabLink
                btnText="Courses Request"
                active={activeTab === "courses-request"}
                tabLink="courses-request"
                setActiveTab={setActiveTab}
              />
              
              <TabLink
                btnText="Courses Categories"
                active={activeTab === "courses-categories"}
                tabLink="courses-categories"
                setActiveTab={setActiveTab}
              />
            </>
          )}
        </div>
      </div>
{/* 
      {activeTab === "courses-list" && (
        <Link href="/dashboard/course/creation">
          <button className="bg-[#3A57E8] rounded text-white p-[8px_20px] md:mb-[20px] font-nunito sm:ml-auto">
            Create New Course
          </button>
        </Link>
      )}

      {activeTab === "courses-categories" && (
        <button
          onClick={() => setShowModal(!Modal)}
          className="bg-[#3A57E8] rounded text-white p-[8px_20px] md:mb-[20px] font-nunito sm:ml-auto"
        >
          Create Category
        </button>
      )} */}
    </nav>
  );
};

export default Nav;
