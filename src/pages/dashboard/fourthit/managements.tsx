import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import ManagementComponent from "../../../components/pages/dashboard/fourthit/management/Mangement";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

export default function managements() {
  return (
    <>
      <PrivateTemplate>
        <AccessTemplate accessRole={["instructor", "admin"]}>
          <Head>
            <title>FourthIT Resource | Fourth IT Academy</title>
          </Head>

          <DashboardLayout>
            <ManagementComponent />
          </DashboardLayout>
        </AccessTemplate>
      </PrivateTemplate>
    </>
  );
}
