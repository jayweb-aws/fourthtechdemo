import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Consulting from "../components/pages/consulting/consulting";
const consulting = () => {
  return (
    <>
      <Head>
        <title> Consulting | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Consulting />
      </HomeLayout>
    </>
  );
};

export default consulting;
