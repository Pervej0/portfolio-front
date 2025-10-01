import ThumbsUpBox from "@/components/blog/ThumbsUpBox";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog = ({ blog }: any) => {
  return (
    <div className="bg-[#303030] rounded-xl mb-5">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-5 md:gap-y-10 gap-y-5">
        <div className="md:h-full md:w-full sm:h-3/5 sm:w-3/5 h-full w-full">
          <Image
            className="rounded-md w-full"
            src={blog.img}
            alt={blog.title}
            height={500}
            width={500}
          />
        </div>
        <div className="p-4 md:pt-4 pt-0">
          <h5 className="text-white text-xl md:mt-3 mt-0">{blog.title}</h5>
          <div className="flex items-center gap-2 text-white my-2">
            <small className="pr-5">Posted by: {blog.author} </small>
            <ThumbsUpBox like={blog.like} blogId={blog._id} />
          </div>
          <p className="text-light my-3" style={{ fontSize: "15px" }}>
            {blog.desc.slice(0, 250)} ...
          </p>
          <Link href={`blog/${blog._id}`}>
            <Button className="px-3 text-sm rounded-md">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
