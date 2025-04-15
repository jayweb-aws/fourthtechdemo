import Head from "next/head";
import PublicRoute from "../components/common/PublicRoute";
import HomeLayout from "../components/layouts/HomeLayout";
import Registration from "../components/pages/registration/register";
const registration = () => {
  return (
    <>
      {/* <PublicRoute> */}
        <Head>
          <title> Registration | Fourth IT Academy</title>
        </Head>
        {/* <HomeLayout> */}
          <Registration />
        {/* </HomeLayout> */}
      {/* </PublicRoute> */}
    </>
  );
};

export default registration;
