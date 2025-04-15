import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import { AiTwotoneStar } from "react-icons/ai";
import Marquee from "react-fast-marquee";
const index = () => {
  return (
    <>
      <Head>
        <title>privacy-policy | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div className="flex items-center justify-center py-10 font-nunito leading-relaxed text-lg">
          <div className="max-w-[80%] xsm:flex-col sm:flex-row md:flex-row  lg:flex-row xl:flex-row flex justify-between">
            <div className="mr-[50px]xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[50%] xsm:w-[100%]">
              <h1 className="font-extrabold text-4xl ">Privacy Policy</h1>
              <div className="flex justify-start items-center">
                <div className="flex justify-center items-center text-[#C91820] font-bold my-5">
                  <div className="">
                    <div className=" w-[30px] h-[1px] font-extrabold   border-solid border-2 border-[#C91820]"></div>
                  </div>
                  <div className="mx-[3px]">
                    <AiTwotoneStar className="w-[20px] text-3xl" />
                  </div>
                  <div>
                    <div className=" w-[30px] h-[1px] font-extrabold   border-solid border-2 border-[#C91820]"></div>
                  </div>
                </div>
              </div>
              <div className="max-w-[300px]">
                <Marquee
                  gradientWidth={100}
                  pauseOnHover={true}
                  className="overflow-hidden "
                >
                  {[1, 2, 3, 4, 5, 6, 8].map((i) => (
                    <h1 key={i} className="font-extrabold text-2xl mx-[20px]">
                      We respect you privacy
                    </h1>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[50%] xsm:w-[100%]">
              <h1 className="font-extrabold text-xl">OUR POLICY</h1>
              <p className="my-[50px]">
                We care about data privacy and security. By using the Site, you
                agree to be bound by our Privacy Policy posted on the Site,
                which is incorporated into these Terms of Use. Please be advised
                the Site is hosted in the United States. If you access the Site
                from any other region of the world with laws or other
                requirements governing personal data collection, use, or
                disclosure that differ from applicable laws in the United
                States, then through your continued use of the Site, you are
                transferring your data to the United States, and you agree to
                have your data transferred to and processed in the United States
                by Square Space.
              </p>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default index;
