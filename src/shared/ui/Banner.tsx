import { images } from "@/asset";
import { Button } from "@/components/ui/button";
import "@/styles/Banner.css";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="container">
        <div className="flex items-center justify-between min-h-[90vh]">
          <div>
            <h1 className="text-3xl font-mono">Hello, I am</h1>
            <h2 className="text-4xl mt-2">
              Md Pervej Hossain,{" "}
              <span className="text-2xl">From Dhaka Bangladesh</span>
            </h2>
            <h2 className="text-4xl tracking-wide font-openSans font-bold mt-2 bg-gradient-to-r from-indigo-600 to-fuchsia-700 bg-clip-text text-transparent">
              Fullstack Web Developer
            </h2>
            <button>
              <Image
                src={images.downArray}
                alt="down-array"
                height={50}
                width={50}
              />
            </button>
            <button className="border-4 rounded-md px-4 py-2 border-gray-100">
              Hire Me
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
