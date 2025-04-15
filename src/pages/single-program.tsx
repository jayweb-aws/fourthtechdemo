import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from "../components/layouts/HomeLayout";
import SingleProgram from '../components/pages/singleProgram/SingleProgram';

const SingleProgramPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Single Program | Fourth IT Academy</title>
            </Head>

            <HomeLayout>
                <SingleProgram />
            </HomeLayout>
        </>
    );
};

export default SingleProgramPage;