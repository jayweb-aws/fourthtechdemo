import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import InstructorsComponent from "../../components/pages/dashboard/admin/instructors/Instructors";
import PrivateTemplate from "../../templates/PrivateTemplate";
import AccessTemplate from "../../templates/AccessTemplate";

const Instructors: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin"]}>
        <>
          <Head>
            <title>Instructor | Fourth IT Academy</title>
          </Head>

          <DashboardLayout>
            <InstructorsComponent />
          </DashboardLayout>
        </>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default Instructors;
