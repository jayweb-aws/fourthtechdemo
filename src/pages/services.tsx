import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Service from "../components/pages/service/Services";

const services = () => {
  return (
    <>
      <Head>
        <title> Services | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Service />
      </HomeLayout>
    </>
  );
};

export default services;
