import { images } from "@/asset";
import GalleryContent from "@/shared/ui/GalleryContent";
import PageTitle from "@/shared/ui/PageTitle";
import {
  BookOpen,
  GraduationCapIcon,
  LucideUniversity,
  MedalIcon,
  School2Icon,
} from "lucide-react";
import React from "react";

const AboutPage = () => {
  const academics = [
    {
      id: 0,
      degree: "Bachelor of Science",
      course: "Computer Science & Engineering (CSE)",
      institute: "Dhaka International University (DIU)",
      desc: `I achieved a CGPA of 3.69 in my last semester and am now a 3rd-year student, actively enhancing my skills through HackerRank, LeetCode, and Full-Stack Web Development bootcamps. I continue to pursue my passion while staying up-to-date with the latest software industry developments. Skills: C, C++, Data Structures & Algorithms, OOP, Full-Stack Development.`,
    },
    {
      id: 1,
      degree: "Diploma Engineering",
      course: "Mechanical Technology",
      institute: "National Professional Institute (NPI)",
      desc: `I completed my Diploma in Engineering in 2023 with a CGPA of 3.78, earning the highest grade in my department. I received two merit scholarships, a Talentpull scholarship, and actively led my department by connecting students and participating in college programs. I also achieved 6th place in the 7th March Speech Competition and am an active member of Zinnat Non-Profit Foundation. Skills include attention to detail, leadership development, and KIZEN.`,
    },
    {
      id: 2,
      degree: "Secondary School Certificate",
      course: "Science",
      institute: "Badda High School (BHS)",
      desc: `Completed SSC in Science with a GPA of 4.50, developing a strong foundation in science and mathematics, enhancing analytical and problem-solving skills, and actively participating in academic and extracurricular activities.`,
    },
  ];

  const trainings = [
    {
      id: 1,
      title: "CSE Fundamental",
      institute: "Phitron",
      year: 2025,
    },
    {
      id: 1,
      title: "Fullstack Web Development (Level-2)",
      institute: "Programming Hero",
      year: 2024,
    },
    {
      id: 2,
      title: "Web Development (Level-1)",
      institute: "Programming Hero",
      year: 2022,
    },
    {
      id: 3,
      title: "Responsive Web Design",
      institute: "Coder Trust Bangladesh",
      year: 2021,
    },
  ];

  const aboutMeImages = [
    {
      id: 0,
      title: "Full Stack Web Development (Level-2) Certificate",
      src: "https://i.ibb.co.com/KzzWkgVq/image.png",
    },
    {
      id: 1,
      title: "Web Development (Level-1)",
      src: "https://i.ibb.co.com/2YR89X5F/level-1-certificate.jpg",
    },
    {
      id: 2,
      title: "Member of Programming-hero alumni",
      src: "https://i.ibb.co.com/DDjBHxwR/image.png",
    },
    {
      id: 3,
      title: "A beautiful alumni session",
      src: "https://i.ibb.co.com/1t96jpMF/image.png",
    },
  ];

  return (
    <>
      <PageTitle pageName="My Story" imgSrc={images.MyStory.src} />
      <section className="relative my-16 py-16 overflow-hidden">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#3f3f3f] -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col gap-8">
          {academics.map(({ institute, degree, course, id, desc }) => (
            <div
              key={id}
              className={`flex w-full items-center justify-center ${
                id % 2 === 0 ? "md:-ml-56 ml-auto" : "md:ml-56 mr-auto"
              }`}
            >
              <div
                className="bg-gradient-to-r from-[#3f3f3f] via-[#616161] to-[#5f5f5f] 
  text-white max-w-md p-6 rounded-[50px] shadow-lg relative"
              >
                <div className="flex items-center mb-4 font-extrabold justify-start gap-2">
                  <LucideUniversity size={50} />
                  <h2 className="text-lg font-semibold">{institute}</h2>
                </div>
                {/* course and degree */}
                <div className="flex items-center mb-2 font-extrabold justify-between gap-4">
                  <div className="flex items-center gap-4 w-1/2">
                    <BookOpen size={30} />
                    <h4 className="text-sm font-semibold">{course}</h4>
                  </div>
                  <div className="flex items-center gap-2 w-1/2">
                    {id == 0 ? (
                      <GraduationCapIcon size={30} />
                    ) : (
                      <MedalIcon size={30} />
                    )}
                    <h4 className="text-sm font-semibold">{degree}</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-24">
        <div className="container mb-12">
          <h1 className="text-2xl">Bootcamps</h1>
        </div>
        <div className="container ">
          <div className="grid md:grid-cols-2 gap-4">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="flex items-center border border-gray-500 p-4 rounded-xl"
              >
                {/* Icon on the left */}
                <div
                  style={{
                    background: "white",
                    padding: "15px",
                    borderRadius: "50px",
                    color: "black",
                  }}
                >
                  <School2Icon size={30} color="black" />
                </div>

                {/* Content on the right */}
                <div className="ml-4 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="font-semibold text-lg">{training.title}</h3>

                  {/* Institute and Year */}
                  <div className="flex justify-between text-gray-300 mt-1">
                    <span>{training.institute}</span>
                    <span>{training.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container">
          <h1 className="text-2xl mt-20">Gallery</h1>
        </div>
        <GalleryContent images={aboutMeImages} />
      </section>
    </>
  );
};

export default AboutPage;
