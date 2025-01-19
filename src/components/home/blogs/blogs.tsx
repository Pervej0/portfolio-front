"use client";

import Image from "next/image";
import React, { useState } from "react";
import blogsData from "../../../asset/blogs.json";
import { ThumbsUp } from "lucide-react";
import SingleBlog from "./SingleBlog";
import Link from "next/link";

const Blogs = () => {
  const { img, title, name, description, like, id } = blogsData[0];
  const [likeCount, setLikeCount] = useState({
    blog_1: like,
    blog_2: 2,
    blog_3: 9,
  });
  console.log(likeCount, "xxx");
  return (
    <div className="py-16">
      <div className="container min-h-screen pt-10">
        <div>
          <h2 className="text-2xl mb-8">Blogs & Articles</h2>
        </div>
        <div className="flex gap-6 justify-between items-center">
          <div className="md:w-3/4 w-full flex flex-col items-center">
            {blogsData?.slice(1, 3).map((item, index) => (
              <SingleBlog
                likeCount={likeCount}
                setLikeCount={setLikeCount}
                key={index}
                data={item}
              />
            ))}
          </div>
          <div className="md:w-1/4 w-full">
            <div className="bg-[#303030] rounded-xl">
              <div>
                <Image src={img} alt={title} height={500} width={500} />
              </div>
              <div className="p-4 pb-6">
                <h5 className="text-white text-lg mt-3">{title}</h5>
                <div className="flex items-center gap-2">
                  <small className="pr-5">posted by: {name} </small>
                  <button
                    onClick={() =>
                      setLikeCount((prev: any) => {
                        return {
                          ...prev,
                          [`blog_${id}`]: prev[`blog_${id}`] + 1,
                        };
                      })
                    }
                    type="button"
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <h5 className="text-md">
                    : {likeCount.blog_1} || {like}
                  </h5>
                </div>
                <p className="text-light my-3" style={{ fontSize: "15px" }}>
                  {description.slice(0, 200)} ...
                </p>
                <Link href={`blog/${id}`}>
                  <button className="border border-white px-3 py-1 text-sm rounded-md">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            className="px-4 py-2 border border-white rounded text-sm"
            href="/blogs"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
