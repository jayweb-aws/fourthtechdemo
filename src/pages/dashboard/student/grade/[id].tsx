import Head from "next/head";
import React from "react";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import OneStudentAllGrades from "../../../../components/pages/dashboard/instructor/one-single-student-all-gardes/index";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const index = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>Student Grade</title>
        </Head>
        <DashboardLayout>
          <OneStudentAllGrades />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default index;
