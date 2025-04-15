import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import MentoringCoaching from "../components/pages/mentoringCoaching/MentoringCoaching";

const mentoringandcoaching = () => {
  return (
    <>
      <Head>
        <title>Mentoring-and-Coaching | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <MentoringCoaching />
      </HomeLayout>
    </>
  );
};

export default mentoringandcoaching;
