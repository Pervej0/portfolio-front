import { images } from "@/asset";
import { DownloadIcon, GitHubIcon, GitHubIcon2 } from "@/asset/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-y-4 items-center justify-center min-h-[90vh]">
          <div className="text-center">
            <h1 className="text-4xl font-mono">Hello, I am</h1>
            <h2 className="text-5xl mt-2 font-mono">
              Md Pervej Hossain,{" "}
              <span className="text-3xl">From Dhaka Bangladesh</span>
            </h2>
            <h2 className="text-4xl tracking-wide font-mono font-bold mt-2 bg-gradient-to-r from-cyan-400 to-fuchsia-700 bg-clip-text text-transparent">
              Fullstack Web Developer
            </h2>
            <div className="flex items-center justify-center mt-6 gap-x-3">
              <div className="flex gap-x-3">
                <Link href="https://github.com/pervej0" target="_blank">
                  <GitHubIcon2 />
                </Link>
              </div>
              <Link
                href="https://drive.google.com/file/d/1ZjYo3i175q_N9pYxKPs_yXDDdzaPQdTP/view"
                target="_blank"
              >
                <button className="border-4 flex gap-x-2 rounded-md px-4 py-2 border-gray-100">
                  <DownloadIcon />
                  Resume
                </button>
              </Link>
            </div>
            <div className="mt-8">
              <button>
                <Image
                  src={images.downArray}
                  alt="down-array"
                  height={50}
                  width={50}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
