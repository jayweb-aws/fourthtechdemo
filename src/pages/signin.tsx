import Head from "next/head";
import PublicRoute from "../components/common/PublicRoute";
import Signin from "../components/pages/signin";

const SigninPage = () => {
  return (
    <>
      <PublicRoute>
        <Head>
          <title> Sign In | Fourth IT Academy</title>
        </Head>
        <Signin />
      </PublicRoute>
    </>
  );
};

export default SigninPage;
