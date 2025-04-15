// new design
import Link from "next/link";
import { useGetAllPopularCourseQuery } from "../../../../../feature/api/dashboardApi";
import style from "../../../../../styles/GeneralStyles.module.css";

import {
  UserIcon,
  ClipboardDocumentListIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import Image from "next/image";
import clipboard from '../../../../../assets/dashboard/ClipboardCheck.svg'
import peopel from '../../../../../assets/dashboard/Icons.svg'
import star from '../../../../../assets/dashboard/Star.svg'
import person from '../../../../../assets/dashboard/person.svg'
const creators = [
  {
    name: 'Darrell Steward',
    image: person,
    users: 493,
    courses: 38,
    rating: 5.0,
    earnings: '+$1452.00',
  },
  {
    name: 'Ralph Edwards',
    image: person,
    users: 343,
    courses: 12,
    rating: 4.9,
    earnings: '+$1181.21',
  },
  {
    name: 'Leslie Alexander',
    image: person,
    users: 422,
    courses: 1,
    rating: 4.9,
    earnings: '+$988.82',
  },
  {
    name: 'Albert Flores',
    image: person,
    users: 355,
    courses: 28,
    rating: 4.8,
    earnings: '+$837.99',
  },
];
const CompletedLesson = () => {
 
  return (
    <>
   <div className="flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4">
  <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">
    Best Instructors
  </p>
  <button className="text-sm   hover:underline transition-all text-[#4849E8] font-[Poppins] text-[14px] font-medium">
    View All
  </button>
</div>

<div className="bg-white rounded-2xl p-4 text-white w-full border border-[#E8ECEE] divide-y divide-[#E8ECEE]">
  {creators.map((creator, idx) => (
    <div key={idx} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3">
        <Image
          src={creator.image}
          alt={creator.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[#293642] font-[Poppins] text-[16px] font-medium leading-[16px]">
            {creator.name}
          </p>
          <div className="flex items-center gap-1 mt-1 text-[#293642] font-[Poppins] text-[14px] font-medium leading-[16px]">
            <Image src={peopel} alt="person" width={16} height={16} />
            <span>{creator.users}</span>
            <span>•</span>
            <Image src={clipboard} alt="clipboard" width={16} height={16} />
            <span>{creator.courses}</span>
            <span>•</span>
            <Image src={star} alt="star" width={16} height={16} />
            <span>{creator.rating}</span>
          </div>
        </div>
      </div>
      <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-[#80CA8F] font-[Poppins] text-[16px] font-medium leading-[16px]">
        {creator.earnings}
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default CompletedLesson;

// import Link from "next/link";
// import { useGetAllPopularCourseQuery } from "../../../../../feature/api/dashboardApi";
// import style from "../../../../../styles/GeneralStyles.module.css";

// const CompletedLesson = () => {
//   const { data, isLoading } = useGetAllPopularCourseQuery({ limit: 5000 });
//   return (
//     <div className="bg-white rounded-xl py-4 px-3 flex flex-col mb-4">
//       <h1 className="text-xl text-title-clr mb-3 font-bold">Popular Courses</h1>

//       <div className="flex flex-col custom_scroll h-[20rem] overflow-y-auto">
//         {data?.data?.courses?.map((item: any, i: any) => (
//           <Link
//             as={`/dashboard/coruse/[id]`}
//             href={`/dashboard/course/${item?._id}`}
//             key={i}
//           >
//             <div
//               key={i}
//               className="flex items-center py-3 px-1 bg-transparent md:max-w-xl hover:bg-gray-100"
//             >
//               <div>
//                 <p className="text-small-text-color font-bold text-xl">
//                   {i + 1}
//                 </p>
//               </div>
//               <div className="w-full">
//                 <div
//                   style={{
//                     backgroundImage: `url(${item?.courseImage})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                   }}
//                   className={`p-2 h-[80px] mx-3 rounded-xl ${style.CompletedLesBg}`}
//                 ></div>

//                 <p className=" text-small-text-color text-base mt-[10px] ml-[20px] font-medium">
//                   {item?.title}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompletedLesson;