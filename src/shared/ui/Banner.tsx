import { images } from "@/asset";
import {
  DownloadIcon,
  GitHubIcon,
  SuitCaseIcon,
  GitHubIcon2,
  HackerRankIcon,
} from "@/asset/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container" id="home_section">
        <div className="flex gap-y-4 items-center justify-center min-h-[90vh]">
          <div className="text-center">
            <h1 className="md:text-4xl sm:text-3xl text-xl font-mono">
              Hello, I am
            </h1>
            <h2 className="md:text-5xl sm:text-3xl text-2xl mt-2 font-mono">
              Md Pervej Hossain,
              <span className="md:text-3xl text-xl">From Dhaka Bangladesh</span>
            </h2>
            <div className="flex items-center my-2 justify-center gap-x-6">
              <SuitCaseIcon />
              <div className="my-4">
                <h6 className="text-left">Working as</h6>
                <h2 className="text-3xl text-left tracking-wide font-mono font-bold my-2 bg-gradient-to-r from-cyan-400 to-fuchsia-700 bg-clip-text text-transparent">
                  Software Developer
                </h2>
                <h6 className="text-left text-xl">
                  Cubix Technology <small>(Banasree Dhaka, Bangladesh)</small>
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 gap-x-3">
              <div className="flex gap-x-4">
                <Link
                  href="https://www.hackerrank.com/profile/Pervej0"
                  target="_blank"
                >
                  <HackerRankIcon />
                </Link>
                <Link href="https://github.com/pervej0" target="_blank">
                  <GitHubIcon2 />
                </Link>
              </div>
              <Link
                href="https://drive.google.com/file/d/1ZjYo3i175q_N9pYxKPs_yXDDdzaPQdTP/view"
                target="_blank"
              >
                <Button className="border-2 flex items-center gap-x-2 rounded-md px-4 py-2 border-gray-100">
                  <DownloadIcon />
                  RESUME
                </Button>
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
