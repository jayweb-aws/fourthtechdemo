import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import SingleAssignmentForInstructor from "../../../components/pages/dashboard/instructor/one-page-assignment/SingleAssignmentForInstructor";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor", "student"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <SingleAssignmentForInstructor />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
