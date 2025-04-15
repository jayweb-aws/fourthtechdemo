import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/pages/contact/Contact"));

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <Contact></Contact>
      </HomeLayout>
    </>
  );
};

export default contact;
