import EmptyIcon from "@/asset/icons/EmptyIcon";
import FillStar from "@/asset/icons/fillStar";
import HalfFillStar from "@/asset/icons/HalfFillStar";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MousePointer2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="container h-screen">
      <div className="flex md:flex-row gap-5 flex-col items-center justify-between h-screen">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl mb-3">Meet Me</h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            pellentesque dolor. Nullam elementum urna vel imperdiet scelerisque.
            Donec nec erat in urna lacinia ultrices. Nullam nec fermentum
            libero. Nullam nec fermentum libero. Nullam nec fermentum libero.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            pellentesque dolor. Nullam elementum urna vel imperdiet scelerisque.
            Donec nec erat in urna lacinia ultrices. Nullam nec fermentum
            libero. Nullam nec fermentum libero. Nullam nec fermentum libero.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            pellentesque dolor. Nullam elementum urna vel imperdiet scelerisque.
            Donec nec erat in urna lacinia ultrices. Nullam nec fermentum
            libero. Nullam nec fermentum libero. Nullam nec fermentum libero.
          </p>
          <button className="border-4 flex gap-x-2 rounded-md px-4 py-2 border-gray-100">
            View More{" "}
            <span className="animate-bounce">
              <MousePointer2 />
            </span>
          </button>
        </div>
        <div className="md:w-1/2 w-full border">
          <div
            className="text-center mx-auto"
            style={{
              height: "300px",
              width: "300px",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "translateY(0px)",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <Image
              src="https://i.ibb.co.com/84WsC3N/Md-Pervej-Hossain.jpg"
              alt="profile"
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
          <div className="flex justify-between flex-wrap gap-5 md:px-2 px-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Joint Efforts</h3>
              <p className="text-sm mb-2">
                I collaborated with a diverse
                <br /> multicultural development team.
              </p>
              <div className="flex gap-x-2">
                <FillStar />
                <FillStar />
                <FillStar />
                <FillStar />
                <FillStar />
                <div>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Adaptability</h3>
              <p className="text-sm mb-2">
                I have excelled in diverse roles, <br /> successfully fulfilling
                my responsibilities.
              </p>
              <div className="flex gap-x-2">
                <FillStar />
                <FillStar />
                <FillStar />
                <FillStar />
                <HalfFillStar />
                <div>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.5
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expressive Skills</h3>
              <p className="text-sm mb-2">
                As a Venue Staff Member in invigilator role,
                <br /> I complete successful duties for British Council.
              </p>
              <div className="flex justify-start gap-x-2">
                <FillStar />
                <FillStar />
                <FillStar />
                <FillStar />
                <HalfFillStar />
                <div>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.5
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
