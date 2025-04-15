/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import CardImage1 from "../../../../assets/Consulting/1.jpg";
import CardImage2 from "../../../../assets/Consulting/2.jpg";
import CardImage3 from "../../../../assets/Consulting/3.jpg";
import CardImage4 from "../../../../assets/Consulting/4.jpg";

const consultingCards = () => {
  return (
    <div className="container mx-auto py-6 md:py-12 font-nunito">
      <div className="grid lg:grid-cols-2 lg:justify-center gap-y-8 lg:gap-y-10 lg:gap-5 lg:px-6">
        <div className=" max-w-lg bg-white rounded-lg shadow-md md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage1}
            className="rounded-tr-xl rounded-tl-xl"
            alt=""
          />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Strategy & Governance
            </h5>
            <p className="min-h-[240px] my-5 font-normal text-gray-700 ">
              Fourth IT Academy helps its clients develop IT strategies aligning
              with their mission and business objectives. A strong and complete
              IT strategy shows how technology and skilled resources support and
              shape the business strategy of an organization as a whole. Our
              team of experienced advisors has helped our customers develop and
              implement IT strategies, compliance architectures, and risk
              frameworks based on industry best practices and methodologies to
              transform their organizations and build innovative and
              future-focused IT capabilities.
            </p>
            <Link href="/strategy-&-governance">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage2}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Cybersecurity and Services
            </h5>
            <p className="min-h-[240px] my-5 font-normal text-gray-700 ">
              Fourth IT Academy enables its clients to strengthen their
              enterprise security and risk posture by leveraging FITA’s
              strategic and tactical expertise, along with deploying
              cutting-edge cyber tools and solutions across the entire
              organizational landscape. FITA engages its talented pool of
              subject matter experts to deliver the tactical and strategic
              solutions that work in this dynamic cyber threat environment. Our
              deep industry knowledge and responsiveness ensure that we continue
              to exceed our clients' expectations by delivering superior
              solutions and support to meet their mission-critical needs.
            </p>
            <Link href="/cybersecurity-and-services">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage3}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6 font-nunito">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Risk Management Services
            </h5>
            <p className="min-h-[240px] my-5 font-normal text-gray-700 ">
              Fourth IT Academy recognizes that improving an organization's
              overall cybersecurity posture is an organization-wide risk
              management challenge. That is why FITA leverages its understanding
              of organizational, operational, technological, IT security, and
              supply chain risks to help customers determine their enterprise
              tolerance for risk, develop a risk framework, and provide a
              risk-based approach toward the effective use of limited resources.
            </p>
            <Link href="/risk-management-services">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage4}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Digital Transformation
            </h5>
            <p className="min-h-[240px] my-5 font-normal text-gray-700 ">
              Fourth IT Academy creates business value for our customers by
              enabling organizations to increase efficiencies and productivity
              through technology modernization, realize cost savings, and reduce
              risks. FITA has also helped its clients transform existing
              business models by leveraging SaaS and managed services to
              minimize the cost of ownership and increase operational gains. We
              believe that digital transformation is a journey, and zero trust
              is a critical component of that transformation. Engage and find
              out how we can help drive transformation in your organization.
            </p>
            <Link href="/digital-transformation">
              <button className="w-full  p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default consultingCards;
