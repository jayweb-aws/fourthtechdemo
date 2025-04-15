import React from "react";

const Overview = ({ course }: { course: any }) => {
  //console.log(course);
  return (
    <div className="font-nunito">
      <div>
        <h5 className="text-xl font-bold">Course Description</h5>
        <div className="mt-4">
          <div
            dangerouslySetInnerHTML={{
              __html: course.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
