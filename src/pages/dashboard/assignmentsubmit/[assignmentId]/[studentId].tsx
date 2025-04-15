import Head from "next/head";
import React from "react";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import AssignmentSubmitted from "../../../../components/pages/dashboard/instructor/others/student/AssignmentSubmit";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const assignmentsubmit = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>Assignment | Fourth IT Academy</Head>
        <DashboardLayout>
          <AssignmentSubmitted />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default assignmentsubmit;
