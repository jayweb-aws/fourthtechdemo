import type { NextPage } from "next";
import Head from "next/head";

import LiveClass from "../components/pages/liveClass/LiveClass";

const Students: NextPage = () => {
  return (
    <>
      <Head>
        <title>LIve Class | Fourth IT Academy</title>
      </Head>

      <LiveClass />
    </>
  );
};

export default Students;
