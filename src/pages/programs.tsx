import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Programs from '../components/pages/programs/Programs';

const ProgramsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Programs | Fourth IT Academy</title>
            </Head>

            <HomeLayout>
                <Programs />
            </HomeLayout>
        </>
    );
};

export default ProgramsPage;
