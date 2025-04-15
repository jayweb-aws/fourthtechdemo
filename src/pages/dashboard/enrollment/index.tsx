import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import ManagementComponent from "../../../components/pages/dashboard/instructor/enrollment/Enrollment";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

export default function enrollment() {
  return (
    <>
      <PrivateTemplate>
        <AccessTemplate accessRole={["instructor", "admin"]}>
          <Head>
            <title>FourthIT Enrollment | Fourth IT Academy</title>
          </Head>

          <DashboardLayout>
            <ManagementComponent />
          </DashboardLayout>
        </AccessTemplate>
      </PrivateTemplate>
    </>
  );
}
