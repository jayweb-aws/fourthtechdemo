import Image from "next/image";
import React from "react";
import image from "../../../assets/hero.jpg";

const BlogCard = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <Image src={image} alt="" />
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        <p className="text-xs">{desc}</p>
        <button className="btn-black px-16">Read Article</button>
      </div>
    </div>
  );
};

export default BlogCard;
