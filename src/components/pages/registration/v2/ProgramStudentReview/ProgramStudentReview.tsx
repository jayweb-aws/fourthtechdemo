import classNames from "classnames";
import Image from "next/image";
import { sProgramStudentReviewImages, sProgramStudentReviews } from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";
import SingleStudentReview from "../../../singleProgram/ProgramStudentReview/SingleStudentReview";

const ProgramStudentReview = () => {
  return (
    <div className="pt-[85px]">
      <Title title="See What Our Students Say" />

      <div className="container px-[50px] grid grid-cols-1 md:grid-cols-3 pt-[40px] md:pt-[66px]">
        <div className="col-span-2 relative">
          <SingleStudentReview item={sProgramStudentReviews[0]} />

          <div className="grid lg:block grid-cols-2 sm:grid-cols-3 mt-[30px]">
            {sProgramStudentReviewImages?.map((item, i) => (
              <div
                key={i}
                className={classNames(
                  "lg:absolute w-[100px] lg:w-auto mb-[10px] sm:mb-[20px] lg:mb-0",
                  item.id === 1 && "right-[50px] xl:right-[130px] top-0",
                  item.id === 2 && "left-0 top-[230px]",
                  item.id === 3 && "left-[180px] xl:left-[240px] top-[210px]",
                  item.id === 4 && "right-[80px] xl:right-[100px] top-[200px]",
                  item.id === 5 && "left-[120px] top-[380px]",
                  item.id === 6 &&
                  "right-[100px] xl:right-[200px] bottom-[-100px]"
                )}
              >
                <Image src={item?.img} alt="student" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SingleStudentReview item={sProgramStudentReviews[1]} className="mb-[30px] md:mb-[50px] lg:mb-[95px]" />
          <SingleStudentReview item={sProgramStudentReviews[2]} />
        </div>
      </div>
    </div>
  );
};

export default ProgramStudentReview;
