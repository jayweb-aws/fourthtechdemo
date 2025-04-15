import type { NextPage } from "next";
import Head from "next/head";
import Review from "../../components/pages/dashboard/admin/review/review";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PrivateTemplate from "../../templates/PrivateTemplate";
import AccessTemplate from "../../templates/AccessTemplate";

const DashboardPage: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor"]}>
        <Head>
          <title>Home | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
          <Review />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default DashboardPage;
