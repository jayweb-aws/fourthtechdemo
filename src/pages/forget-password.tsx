import Head from "next/head";
import ForgetPassword from "../components/pages/forget-password"

const ForgetPasswordPage = () => {
    return (
        <>
            <Head>
                <title> forget-password | Fourth IT Academy</title>
            </Head>
            <ForgetPassword />
        </>
    );
};

export default ForgetPasswordPage;