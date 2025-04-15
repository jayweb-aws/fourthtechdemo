/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import CardImage1 from "../../../../assets/bootCampImages/ImagesBootcamps/Bootcamp_banner.png";
import CardImage4 from "../../../../assets/bootCampImages/ImagesBootcamps/Interview Prep.jpg";
import CardImage3 from "../../../../assets/bootCampImages/ImagesBootcamps/Professional_Profile.jpg";
import CardImage2 from "../../../../assets/bootCampImages/ImagesBootcamps/Staffing.jpg";

const ServicesCards = () => {
  return (
    <div className="container mx-auto py-6 font-nunito">
      <div className="grid lg:grid-cols-2 lg:justify-items-center gap-y-8 lg:gap-y-10 lg:gap-x-5 lg:px-6">
        <div className="max-w-lg bg-white rounded-lg shadow-md md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage1}
            className="rounded-tr-xl rounded-tl-xl"
            alt=""
          />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Bootcamps
            </h5>
            <p className="min-h-[210px] my-5 font-normal text-gray-700 ">
              Our curriculum is created and taught by Professionals with years
              of real-world industry experience. Our curriculum is a unique spin
              on what has been traditionally expected of a four-year degree but
              compressed into a few weeks on intensive studies. Our curriculum
              is designed to support career-oriented individuals and allows for
              students to begin working in tech positions. It is rigorous and
              requires dedication and consistency.
            </p>
            <Link href="/bootcamps">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-lg bg-white rounded-lg shadow-md md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage2}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Staffing
            </h5>
            <p className="min-h-[210px] my-5 font-normal text-gray-700 ">
              Are you skilled in a specific field in Information Technology and
              interested in teaching and impacting lives with your professional
              experiences? Come join our team!
            </p>
            <Link href="/staff">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage4}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6 font-nunito">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Mentoring And Coaching
            </h5>
            <p className="min-h-[210px] my-5 font-normal text-gray-700 dark:text-gray-400">
              If you have a passion for mentoring, are you looking for a mentor,
              are you searching for a unique career path, or want to give
              something back to the community, becoming a Mentor is the way to
              go. We have built a strong community of mentors, aspirants,
              coaches, and educator. Becoming a mentoring in our community help
              you learn, earn, network, and grow. Mentorship open new doors for
              you and help you refine what you know and provide you with new
              growth opportunities.
            </p>
            <Link href="/mentoring-and-coaching">
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

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional Profile Optimization
            </h5>
            <p className="min-h-[210px] my-5 font-normal text-gray-700 ">
              Land your dream job by optimizing your professional Profile.
              Studies shows that you are 40 times more likely to get found and
              receive opportunities when you have a complete and optimized
              profile. Learn how levaraging keywords and key phrases to be found
              by your perspective employers extends to Linked profiles,job sites
              and social media.
            </p>
            <Link href="professional-profile-optimization">
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

export default ServicesCards;
