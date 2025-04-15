import Head from "next/head";

//component
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Certificates from "../../../components/pages/dashboard/student-instructor-led/certificates/Certificates";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

const index = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor", "student"]}>
        <Head>
          <title>Instructor File | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <Certificates />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default index;
