import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
type Course = {
  description: string;
  courseImageg: string;
  title: string;
  id: string;
  _id: string;
};

type PopularCourseCardProps = {
  course: Course;
};

const CoursesCard = (props: PopularCourseCardProps) => {
  const {
    course: { description, courseImageg, title, _id, id },
  } = props;
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 items-start justify-between">
        <div className="min-w-[40px] min-h-[40px] text-white font-semibold bg-[#8A92A6] rounded flex items-center justify-center">
          <p>{title[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col max-w-[80px] min-w-[80px]">
          <h3 className="text-[#3A57E8] font-medium">{title}</h3>
        </div>
      </div>
      <div className="flex items-center gap-x-[3px]">
        <Link href={`/bootcamp-view/[id]`} as={`/bootcamp-view/${id}`}>
          <button className="bg-[#3A57E8] rounded text-white px-3 lg:px-5 py-1 self-center">
            View
          </button>
        </Link>
        <button className="text-[#130F26] text-[25px]">
          <BiDotsVerticalRounded />
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
