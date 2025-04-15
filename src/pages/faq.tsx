import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import FaqPage from "../components/pages/resources/faq/FaqPage";

const faq = () => {
  return (
    <>
      <Head>
        <title>Faq | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <FaqPage></FaqPage>
      </HomeLayout>
    </>
  );
};

export default faq;
