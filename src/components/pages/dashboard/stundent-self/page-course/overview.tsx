import React, { useState } from "react";
import { useGetOnePageQuery } from "../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import { useAppSelector } from "../../../../../app/hooks";
import DeletePage from "./deletePage";
import Link from "next/link";

const overview = () => {
  const router = useRouter();
  const [showPage, setshowPage] = useState(false);
  const { roles } = useAppSelector((state) => state.auth.user);
  const id = router.query.id as any;
  const { isError, data, error, isLoading, isSuccess } = useGetOnePageQuery(id);
  // console.log(data)
  const handleCloseRejectPageModal = () => {
    setshowPage(false);
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        isSuccess && (
          <div className=" font-nunito">
            <DeletePage
              id={id}
              show={showPage}
              handleClose={handleCloseRejectPageModal}
              title="Are you sure you want to Delete this page?"
              successMessage="Delete page Successfully!"
            />
            {roles.includes("instructor") && (
              <div className="flex gap-3 justify-end">
                <button className="bg-blue-700 px-6 py-1 text-white rounded">
                  <Link
                    href={`/dashboard/page/edit/[id]`}
                    as={`/dashboard/page/edit/${id}`}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="bg-red-700 px-6 py-1 text-white rounded"
                  onClick={() => setshowPage(true)}
                >
                  Delete
                </button>
              </div>
            )}
            <div className="bg-white p-5">
              <h1 className="font-bold text-lg">{data?.data?.page?.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data?.page?.description,
                }}
              ></div>
            </div>
            <div className="w-full flex justify-end mt-[30px]"></div>
          </div>
        )
      )}
    </>
  );
};

export default overview;
