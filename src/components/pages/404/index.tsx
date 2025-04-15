import { Button } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Head>
                <title>Not Found Page | Fourth IT Academy</title>
            </Head>
            <div className="flex flex-col items-center gap-2">
                <h3>404</h3>
                <h5>Oops! This page is Not Found.</h5>
                <p>The requested page dose not exist</p>
                <Link href="/dashboard">
                    <a>
                        <Button>Back to Home</Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;