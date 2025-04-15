// bootcamp
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Staffing from "../components/pages/staffing/Staffing";
import Bootcamps from "../components/pages/home/bootcamps/Bootcamps";

const bootcamps = () => {
  return (
    <>
      <Head>
        <title>Bootcamps | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Bootcamps />
      </HomeLayout>
    </>
  );
};

export default bootcamps;
