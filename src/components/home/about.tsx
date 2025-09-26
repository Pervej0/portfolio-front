import EmptyIcon from "@/asset/icons/EmptyIcon";
// import FillStar from "@/asset/icons/fillStar";
import HalfFillStar from "@/asset/icons/HalfFillStar";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MousePointer2 } from "lucide-react";
import FillStar from "@/asset/icons/FillStar";
import CustomContainer from "@/shared/ui/CustomContainer";

const AboutSection = () => {
  return (
    <section className="py-14" id="about_section">
      <div className="min-h-screen container pt-8">
        <div className="flex md:flex-row gap-5 flex-col items-center justify-between">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl mb-8">Meet Me</h2>
            <p className="mb-3">
              I am Pervej, originally from Noakhali and raised in Dhaka. I
              completed my Diploma in Engineering with two merit scholarships
              and strong academic results in the final examination. Currently, I
              am pursuing a Bachelor of Science in Computer Science and
              Engineering at Dhaka International University (DIU).
            </p>
            <p className="mb-2">
              My career objective is to become a successful developer in the
              software industry. I have gained valuable industry experience
              through roles as an Intern and Junior Developer, which have shaped
              my problem-solving mindset and strengthened my ability to plan and
              execute projects effectively.
            </p>
            <p className="mb-5">
              In my opinion, my passion for continuous learning, combined with
              my practical industry experience, defines who I am as a developer.
              I am eager to embrace new challenges, contribute to impactful
              projects, and grow into a professional who adds real value to the
              software industry
            </p>
            <Button className="border-2 flex gap-x-2 rounded-md px-4 border-gray-100">
              View More{" "}
              <span className="animate-bounce">
                <MousePointer2 />
              </span>
            </Button>
          </div>
          <div className="md:w-1/2 w-full">
            <div
              className="text-center mx-auto relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                transform: "translateY(0px)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <Image
                src="https://i.ibb.co.com/JRkTSzQC/Md-Pervej-Hossain-3.jpg"
                alt="profile"
                className="object-cover w-full h-full"
                width={500}
                height={500}
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
                  I have excelled in diverse roles, <br /> successfully
                  fulfilling my responsibilities.
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
            <div className="flex justify-start md:justify-center mt-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Expressive Skills
                </h3>
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
      </div>
    </section>
  );
};

export default AboutSection;
