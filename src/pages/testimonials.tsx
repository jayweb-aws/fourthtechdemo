import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from "../components/layouts/HomeLayout";
import TestimonialsV2 from '../components/pages/testimonialsV2/TestimonialV2';

const TestimonialsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Testimonials | Fourth IT Academy</title>
            </Head>

            <HomeLayout>
                <TestimonialsV2 />
            </HomeLayout>
        </>
    );
};

export default TestimonialsPage;