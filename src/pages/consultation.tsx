import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Consultation from '../components/pages/consultation/Consultation';

const ConsultationPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Consultation | Fourth IT Academy</title>
            </Head>

            <HomeLayout>
                <Consultation />
            </HomeLayout>
        </>
    );
};

export default ConsultationPage;
