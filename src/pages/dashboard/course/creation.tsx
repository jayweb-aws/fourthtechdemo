import React from "react";
import Head from "next/head";

//component
import CourseCreationMain from "../../../components/pages/dashboard/instructor/course/CourseCreationMain";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";

const creation = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor"]}>
        <Head>
          <title>Instructor File | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <CourseCreationMain />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default creation;
