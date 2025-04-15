import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import Staffing from "../components/pages/staffing/Staffing";


const staff = () => {
  return (
    <>
      <Head>
        <title>Staffing | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Staffing/>
      </HomeLayout>
    </>
  );
};

export default staff;
