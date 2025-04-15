import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import Quiz from "../../../../components/pages/dashboard/student-instructor-led/quiz/index";
import dynamic from "next/dynamic";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const quiz: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>
          <title>Students | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
            <Quiz />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default dynamic(() => Promise.resolve(quiz), { ssr: false });
