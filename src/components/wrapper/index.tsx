import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetUserQuery } from "../../feature/api/authApi";
import { refresher, signin } from "../../feature/auth/authSlice";
import BrandLoader from "../utils/loaders/BrandLoader";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props;
  const { refresh } = useAppSelector((state) => state.auth);
  const { data, isSuccess, isError } = useGetUserQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!refresh) {
      if (isSuccess) {
        const {
          _id,
          id,
          title,
          firstName,
          lastName,
          gender,
          email,
          phone,
          state,
          country,
          currentJob,
          studentType,
          status,
          highestStudy,
          avatar,
          roles = [],
          expertise = "",
          houseOrFlat = "",
          landMark = "",
          streetAddress = "",
          townOrCity = "",
          stateOrCountry = "",
          postalOrZip = "",
          userName = "",
        } = data.data.user;

        setTimeout(() => {
          dispatch(
            signin({
              _id,
              id,
              title,
              firstName,
              lastName,
              gender,
              email,
              phone,
              state,
              country,
              currentJob,
              studentType,
              status,
              highestStudy,
              avatar,
              roles,
              expertise,
              houseOrFlat,
              landMark,
              streetAddress,
              townOrCity,
              stateOrCountry,
              postalOrZip,
              userName,
            })
          );
        }, 500);
      } else if (isError) {
        // SET REFRESH TRUE AFTER 2 SEC
        setTimeout(() => {
          dispatch(refresher());
        }, 500);
      }
    }
  });
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {!refresh && <BrandLoader />}

      {children}
    </>
  );
};

export default PageWrapper;
