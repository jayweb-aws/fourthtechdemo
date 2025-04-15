import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Homev2 from '../components/pages/homev2/Homev2';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fourth IT Academy</title>
      </Head>

      <HomeLayout>
        <Homev2 />
      </HomeLayout>
    </>
  );
};

export default Home;
