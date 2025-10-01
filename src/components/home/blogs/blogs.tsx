import Image from "next/image";
import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";
import Blog from "./blog";
import Link from "next/link";
import CustomContainer from "@/shared/ui/CustomContainer";
import { Button } from "@/components/ui/button";
import ThumbsUpBox from "@/components/blog/ThumbsUpBox";

const Blogs = async () => {
  const data = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const blogs = await data.json();

  const { img, title, author, desc, like, _id } = blogs[0];

  return (
    <div className="py-6">
      <CustomContainer
        title="Blogs & Articles"
        className="min-h-screen pt-10 px-4 md:px-auto"
      >
        <div className="flex md:flex-row flex-col gap-6 gap-x-8 justify-between items-center md:mt-10">
          <div className="md:w-8/12 w-full flex flex-col items-center">
            {blogs?.slice(1, 3).map((item: any) => (
              <Blog key={item._id} blog={item} />
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
                  <small className="pr-5">Posted by: {author} </small>
                  <ThumbsUpBox like={like} blogId={_id} />
                </div>
                <p className="text-light my-3" style={{ fontSize: "15px" }}>
                  {desc.slice(0, 200)} ...
                </p>
                <Link href={`blog/${_id}`}>
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
