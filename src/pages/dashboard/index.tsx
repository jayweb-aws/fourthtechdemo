import type { NextPage } from "next";
import Head from "next/head";
import { useAppSelector } from "../../app/hooks";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import HomeComponent from "../../components/pages/dashboard/admin/home/Home";
import InstructorOverview from "../../components/pages/dashboard/instructor/overview-instructor";
import StudentDashboard from "../../components/pages/dashboard/stundent-self/my-courses/Student";
import AccessTemplate from "../../templates/AccessTemplate";
import PrivateTemplate from "../../templates/PrivateTemplate";

const DashboardPage: NextPage = () => {
  const { roles, firstName } = useAppSelector((state) => state.auth.user);

  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "student", "instructor"]}>
        <>
          <PrivateTemplate>
            {roles.includes("instructor") && (
              <PrivateTemplate>
                <AccessTemplate accessRole={["instructor"]}>
                  <Head>
                    <title>{firstName} | Fourth IT Academy</title>
                  </Head>

                  <DashboardLayout>
                    <InstructorOverview />
                  </DashboardLayout>
                </AccessTemplate>
              </PrivateTemplate>
            )}
            {roles.includes("admin") && (
              <PrivateTemplate>
                <AccessTemplate accessRole={["admin"]}>
                  <Head>
                    <title>{firstName} | Fourth IT Academy</title>
                  </Head>

                  <DashboardLayout>
                    <HomeComponent />
                  </DashboardLayout>
                </AccessTemplate>
              </PrivateTemplate>
            )}
            {roles.includes("student") && (
              <PrivateTemplate>
                <AccessTemplate accessRole={["student"]}>
                  <Head>
                    <title>{firstName} | Fourth IT Academy</title>
                  </Head>

                  <DashboardLayout>
                    <StudentDashboard />
                  </DashboardLayout>
                </AccessTemplate>
              </PrivateTemplate>
            )}
          </PrivateTemplate>
        </>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default DashboardPage;
