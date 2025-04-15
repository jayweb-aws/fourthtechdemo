/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import notice1 from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import { Dropdown, Spinner } from "flowbite-react";
import { useLatestStudentQuery } from "../../../../../../feature/api/dashboardApi";

const LatestStudent = () => {
  const { data, isSuccess, isError, isLoading } = useLatestStudentQuery({});

  const showOpt = 100;
  //console.log(data);
  return (
    <div>
      <div className="block py-2 px-2 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-semibold text-xl">Latest Students</h3>
          <div className="flex gap-2 items-center">
            <p className="text-small-text-color text-xs">Short By:</p>
            <div>
              <Dropdown label="Days" dismissOnClick={false}>
                <Dropdown.Item>Days</Dropdown.Item>
                <Dropdown.Item>Weeks</Dropdown.Item>
                <Dropdown.Item>Months</Dropdown.Item>
                <Dropdown.Item>Year</Dropdown.Item>
              </Dropdown>
              {/* <Shortby /> */}
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div className="h-[20rem] overflow-y-auto overflow-x-auto custom_scroll relative ">
            <div className="">
              {isLoading ? (
                <div className="flex justify-start items-center">
                  <Spinner />
                </div>
              ) : isSuccess && data.data.users.length > 0 ? (
                data.data.users.map((val: any) => (
                  <div key={val.id} className="grid grid-cols-12 my-3 px-1">
                    <div className="col-span-5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200">
                          <Image
                            width={70}
                            height={70}
                            className=" rounded-xl"
                            src={val.avatar}
                            alt=""
                          />
                        </div>

                        <p className="ml-2">{`${val.firstName} ${val.lastName}`}</p>
                      </div>
                    </div>

                    <div className="col-span-5 flex items-center">
                      <div className="w-full bg-gray-200 h-2.5 mr-1">
                        <div
                          className={`bg-green-400  h-2.5 rounded-full ${"w-full"}`}
                        ></div>
                      </div>
                      <p>{100}%</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-[50vh] flex justify-center items-center">
                  <p>No data available!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStudent;
