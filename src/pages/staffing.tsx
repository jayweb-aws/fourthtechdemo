import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Bootcamps from "../components/pages/bootcamps/Bootcamps";
import Staffing from "../components/pages/staffing/Staffing";

const bootcamps = () => {
  return (
    <>
      <Head>
        <title>Bootcamps | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Staffing />
      </HomeLayout>
    </>
  );
};

export default bootcamps;
