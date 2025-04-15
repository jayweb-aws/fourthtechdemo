import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import InterviewPrep from "../components/pages/interviewPrep/InterviewPrep";


const interview = () => {
  return (
    <>
      <Head>
        <title>Interview | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <InterviewPrep />
      </HomeLayout>
    </>
  );
};

export default interview;
