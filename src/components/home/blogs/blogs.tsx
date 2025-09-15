"use client";

import Image from "next/image";
import React, { useState } from "react";
import blogsData from "../../../asset/blogs.json";
import { ThumbsUp } from "lucide-react";
import SingleBlog from "./SingleBlog";
import Link from "next/link";
import CustomContainer from "@/shared/ui/CustomContainer";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const { img, title, name, description, like, id } = blogsData[0];
  const [likeCount, setLikeCount] = useState({
    blog_1: like,
    blog_2: 2,
    blog_3: 9,
  });

  return (
    <div className="py-6">
      <CustomContainer
        title="Blogs & Articles"
        className="min-h-screen pt-10 px-4 md:px-auto"
      >
        <div className="flex md:flex-row flex-col gap-6 gap-x-8 justify-between items-center md:mt-10">
          <div className="md:w-8/12 w-full flex flex-col items-center">
            {blogsData?.slice(1, 3).map((item, index) => (
              <SingleBlog
                likeCount={likeCount}
                setLikeCount={setLikeCount}
                key={index}
                data={item}
              />
            ))}
          </div>
          <div className="md:w-4/12 w-full">
            <div className="bg-[#303030] rounded-xl">
              <div className="md:w-full md:h-full sm:h-3/5 sm:w-3/5 h-full w-full mx-auto">
                <Image
                  className="rounded-md w-full"
                  src={img}
                  alt={title}
                  height={500}
                  width={500}
                />
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
                  <h5 className="text-md">: {like}</h5>
                </div>
                <p className="text-light my-3" style={{ fontSize: "15px" }}>
                  {description.slice(0, 200)} ...
                </p>
                <Link href={`blog/${id}`}>
                  <Button className="px-3 text-sm rounded-md">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
      <div className="text-center md:mt-8 mt-5 mb-2">
        <Link className="px-4 text-sm" href="/blogs">
          <Button>See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
