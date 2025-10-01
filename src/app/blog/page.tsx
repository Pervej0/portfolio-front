import { images } from "@/asset";
import PageTitle from "@/shared/ui/PageTitle";
import React from "react";

const myBlogs = () => {
  return (
    <>
      <PageTitle pageName="Articles" imgSrc={images.MyStory} />
    </>
  );
};

export default myBlogs;
