import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import ResourceComponent from "../../../components/pages/dashboard/fourthit/types/Types";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

export default function Types() {
  return (
    <>
      <PrivateTemplate>
        <AccessTemplate accessRole={["instructor", "admin"]}>
          <Head>
            <title>FourthIT Resource | Fourth IT Academy</title>
          </Head>

          <DashboardLayout>
            <ResourceComponent />
          </DashboardLayout>
        </AccessTemplate>
      </PrivateTemplate>
    </>
  );
}
