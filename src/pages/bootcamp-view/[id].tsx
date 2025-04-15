import Head from "next/head";
import HomeLayout from "../../components/layouts/HomeLayout";
import ViewBootcamps from "../../components/pages/bootcamps/viewBootcamp/ViewBootcamp"

const ViewBootcamp = () => {
  return (
    <>
      <Head>
        <title>Bootcamps | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <ViewBootcamps />
      </HomeLayout>
    </>
  );
};

export default ViewBootcamp;
