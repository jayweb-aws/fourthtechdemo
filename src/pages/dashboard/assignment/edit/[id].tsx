import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import AssignmentEditComponent from "../../../../components/pages/dashboard/instructor/Assignment/edit/index";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const AssignmentEdit = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor"]}>
        <Head>
          <title>Edit Assignments | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
          <AssignmentEditComponent />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default AssignmentEdit;
