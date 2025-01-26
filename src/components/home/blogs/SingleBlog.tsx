import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog = ({ data, setLikeCount, likeCount }: any) => {
  return (
    <div className="bg-[#303030] rounded-xl mb-5">
      <div className="flex justify-between items-center gap-5 gap-y-10">
        <div className="w-[600px] h-full">
          <Image src={data.img} alt={data.title} height={500} width={500} />
        </div>
        <div className="p-2">
          <h5 className="text-white text-xl mt-3">{data.title}</h5>
          <div className="flex items-center gap-2 text-white my-2">
            <small className="pr-5">posted by: {data.name} </small>
            <button
              onClick={() =>
                setLikeCount((prev: any) => {
                  return {
                    ...prev,
                    [`blog_${data.id}`]: prev[`blog_${data.id}`] + 1,
                  };
                })
              }
              type="button"
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
            <h5 className="text-md">
              : {likeCount[`blog_${data.id}`]} || {data.like}
            </h5>
          </div>
          <p className="text-light my-3" style={{ fontSize: "15px" }}>
            {data.description.slice(0, 250)} ...
          </p>
          <Link href={`blog/${data.id}`}>
            <button className="border border-white px-3 py-1 text-sm rounded-md">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
