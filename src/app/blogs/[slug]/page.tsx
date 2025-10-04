import { images } from "@/asset";
import ThumbsUpBox from "@/components/blog/ThumbsUpBox";
import PageTitle from "@/shared/ui/PageTitle";
import { ThumbsUp } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const headerList = headers();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const data = await fetch(`${protocol}://${host}/api/blogs/${params.slug}`, {
    cache: "no-store",
  });
  const blog = await data.json();
  const { title, like, author, desc, img, tags, _id } = blog;
  return (
    <>
      <PageTitle pageName={title} imgSrc={images.MyStory} />
      <div className="container py-20">
        <div className="flex items-center gap-5">
          <h4>
            Posted by: <b className="capitalize">{author}</b>
          </h4>
          <div className="flex gap-2">
            <ThumbsUpBox like={like} blogId={_id} />
          </div>
        </div>
        <p className="py-2 mb-4">{desc}</p>
        <Image src={img} alt="" width={100} height={100} />
        <div className="flex items-center mt-6">
          <h5>Tags: &nbsp;</h5>
          {tags.map((item: string, idx: number) => (
            <span key={idx}>{item} |&nbsp;</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
