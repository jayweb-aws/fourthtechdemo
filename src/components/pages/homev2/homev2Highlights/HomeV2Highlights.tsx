import React from "react";
import { Star, Users, Quote, CheckCircle, X, BarChart3 } from "lucide-react";
import Image from 'next/image';
import serviceImg1 from '../../../../assets/homev2/serviceImg1.png';
import serviceImg2 from '../../../../assets/homev2/serviceImg2.png';
import serviceImg3 from '../../../../assets/homev2/serviceImg3.png';
import serviceImg4 from '../../../../assets/homev2/serviceImg4.png';
import serviceImg5 from '../../../../assets/homev2/serviceImg5.png';
import serviceImg6 from '../../../../assets/homev2/serviceImg6.png';
import serviceImg7 from '../../../../assets/homev2/serviceImg7.png';

const HomeV2Highlights = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:py-16 md:px-12 lg:py-20 lg:px-16 rounded-3xl mx-5 my-10">
      <div className="text-center mb-12">
        <p className="uppercase text-xs tracking-wider mb-2">SERVICES</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Dive Into Fourth IT Services
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-[100%] gap-9 container">
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          {/* Card 1: Resources */}
          <div className="bg-white text-black rounded-r-3xl rounded-bl-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[272px] flex flex-col">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={serviceImg7}
                alt="Arrow Right"
                width={25}
                height={25}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-auto">Resources</h3>
            <p className="text-sm text-gray-700 mb-4">
              Manage the complete vendor lifecycle - from onboarding, ongoing
              management, to offboarding
            </p>
            <div className="flex items-center text-xs text-gray-500 space-x-4">
              <div className="flex items-center">
                <Star
                  className="w-3 h-3 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>5,000+</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Card 2: Software Platform */}
            <div className="bg-[#E33E4E] text-white rounded-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[272px] flex flex-col">
              <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
              <div className="absolute top-5 right-5 bg-white text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                    src={serviceImg5}
                     alt="Arrow Right"
                     width={25}
                      height={25}
                   />
              </div>
              <h3 className="text-xl font-bold mb-2 mt-auto">Software Platform</h3>
              <p className="text-sm mb-4">
                Manage the complete vendor lifecycle - from onboarding, ongoing
                management, to offboarding
              </p>
              <div className="flex items-center text-xs text-white/80 space-x-4">
                <div className="flex items-center">
                  <Star
                    className="w-3 h-3 text-yellow-300 mr-1"
                    fill="currentColor"
                  />
                  <span>4.7</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  <span>5,000+</span>
                </div>
              </div>
            </div>

            {/* Card 3: Managed Services */}
            <div className="bg-[#FECA5C] text-black rounded-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[272px] flex flex-col">
              <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
              <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                    src={serviceImg4}
                     alt="Arrow Right"
                     width={25}
                      height={25}
                   />
              </div>
              <h3 className="text-xl font-bold mb-2 mt-auto">Managed Services</h3>
              <p className="text-sm text-gray-700 mb-4">
                Order due diligence assessments on your vendors that include
                qualified risk ratings.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Star
                    className="w-3 h-3 text-yellow-500 mr-1"
                    fill="currentColor"
                  />
                  <span>4.7</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  <span>5,000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Free Sample Assessments */}
          <div className="bg-white text-black rounded-tr-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[550px] flex flex-col">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <Image
                    src={serviceImg2}
                     alt="Arrow Right"
                     width={50}
                      height={50}
                   />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-auto">Free Sample Assessments</h3>
            <p className="text-sm text-gray-700 mb-4">
              Manage the complete vendor lifecycle - from onboarding, ongoing
              management, to offboarding
            </p>
            <div className="flex items-center text-xs text-gray-500 space-x-4">
              <div className="flex items-center">
                <Star
                  className="w-3 h-3 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>5,000+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          {/* Card 5: Live Webinars */}
          <div className="bg-[#FECA5C] text-black rounded-l-3xl rounded-tr-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[272px] flex flex-col">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <Image
                    src={serviceImg6}
                     alt="Arrow Right"
                     width={25}
                      height={25}
                   />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-auto">Live Webinars</h3>
            <p className="text-sm text-gray-700 mb-4">
              Order due diligence assessments on your vendors that include
              qualified risk ratings and reviews.
            </p>
            <div className="flex items-center text-xs text-gray-500 space-x-4">
              <div className="flex items-center">
                <Star
                  className="w-3 h-3 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>5,000+</span>
              </div>
            </div>
          </div>

          {/* Card 6: Control Assessments */}
          <div className="bg-[#E33E4E] text-white rounded-br-3xl p-5 col-span-1 md:col-span-1 lg:row-span-2 relative h-[290px] lg:h-[550px] flex flex-col">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-white text-white rounded-full w-12 h-12 flex items-center justify-center">
            <Image
                    src={serviceImg3}
                     alt="Arrow Right"
                     width={50}
                      height={50}
                   />
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-auto">Control Assessments</h3>
            <p className="text-sm mb-4">
              Order due diligence assessments on your vendors that include
              qualified risk ratings and reviews.
            </p>
            <div className="flex items-center text-xs text-white/80 space-x-4">
              <div className="flex items-center">
                <Star
                  className="w-3 h-3 text-yellow-300 mr-1"
                  fill="currentColor"
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>5,000+</span>
              </div>
            </div>
          </div>

          {/* Card 7: Why Fourth IT */}
          <div className="bg-white text-black rounded-r-3xl p-5 col-span-1 md:col-span-1 relative h-[290px] lg:h-[272px] flex flex-col">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <Image
                    src={serviceImg1}
                     alt="Arrow Right"
                     width={25}
                      height={25}
                   />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-auto">Why Fourth IT</h3>
            <p className="text-sm text-gray-700 mb-4">
              Fourth IT is your trusted partner for optimizing cybersecurity and
              risk management strategies, ensuring...
            </p>
            <div className="flex items-center text-xs text-gray-500 space-x-4">
              <div className="flex items-center">
                <Star
                  className="w-3 h-3 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>5,000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeV2Highlights;