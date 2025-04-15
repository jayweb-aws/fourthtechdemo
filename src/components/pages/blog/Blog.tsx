import React from "react";
import HeroCover from "../../common/utils/HeroCover";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <HeroCover
        title="MTBF Blog"
        desc={
          "The official blog for MyTechBestfriend's announcements, publications, blogs, and updates."
        }
      />

      <div className="container mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <BlogCard
              key={idx}
              title={"Why are Scrum Masters So paid??"}
              desc={
                "In this week's Tech role of the week, we are going to talk about the role of a Scrum Master! Soo.... What exactly is a Scrum Master?"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
