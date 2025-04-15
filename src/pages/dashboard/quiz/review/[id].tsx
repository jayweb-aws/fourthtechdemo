import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import QuizResult from "../../../../components/pages/dashboard/stundent-self/review_quiz/review_quiz";
import AccessTemplate from "../../../../templates/AccessTemplate";
import PrivateTemplate from "../../../../templates/PrivateTemplate";

export default function review() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <QuizResult />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
