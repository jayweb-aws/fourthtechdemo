import React from "react";
import { Star, Users, Quote, CheckCircle, X, BarChart3 } from "lucide-react";

const HomeV2ServicePage = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:py-16 md:px-12 lg:py-20 lg:px-16 rounded-3xl mx-4 md:mx-12 lg:mx-52 my-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-wider mb-2">SERVICES</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Dive Into Fourth IT Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Resources Card */}
          <div className="bg-white text-black rounded-r-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full p-2">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Resources</h3>
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

          {/* Live Webinars Card */}
          <div className="bg-[#FECA5C] text-black rounded-l-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full p-2">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Webinars</h3>
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

          {/* Software Platform Card */}
          <div className="bg-[#E33E4E] text-white rounded-b-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-white text-red-500 rounded-full p-2">
              <X className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Software Platform</h3>
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

          {/* Managed Services Card */}
          <div className="bg-[#FECA5C] text-black rounded-t-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full p-2">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Managed Services</h3>
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

          {/* Control Assessments Card */}
          <div className="bg-[#E33E4E] text-white rounded-b-xl p-5 col-span-1 md:col-span-1 lg:row-span-2 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-white text-red-500 rounded-full p-2">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Control Assessments</h3>
            <p className="text-sm mb-4">
              Order due diligence assessments on your vendors that include
              qualified risk ratings and reviews.
            </p>
            <div className="flex items-center text-xs text-white/80 space-x-4 mt-auto">
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

          {/* Free Sample Assessments Card */}
          <div className="bg-white text-black rounded-tl-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full p-2">
              <Quote className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Sample Assessments</h3>
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

          {/* Why Fourth IT Card */}
          <div className="bg-white text-black rounded-bl-xl p-5 col-span-1 md:col-span-1 relative">
            <div className="uppercase text-xs font-medium mb-4">PRODUCT</div>
            <div className="absolute top-5 right-5 bg-gray-900 text-white rounded-full p-2">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Why Fourth IT</h3>
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

export default HomeV2ServicePage;
