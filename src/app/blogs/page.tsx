import { images } from "@/asset";
import { headers } from "next/headers";
import Blog from "@/components/home/blogs/blog";
import PageTitle from "@/shared/ui/PageTitle";
import React from "react";

const myBlogs = async () => {
  const headerList = headers();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const data = await fetch(`${protocol}://${host}/api/blogs`, {
    cache: "no-store",
  });
  const blogs = await data?.json();

  return (
    <>
      <PageTitle pageName="Articles" imgSrc={images.MyStory} />
      <section style={{ margin: "4rem 0" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {blogs?.map((item: any) => (
              <div key={item._id} className="col-span-12 md:col-span-6">
                <Blog blog={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default myBlogs;
