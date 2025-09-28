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
      desc: `Each place where I worked I met some people those name always will
      be remembered. I am lucky & enough competitive that I had chance to
      meet those guys. From Cubix Technology Shoriful Vai (Senior
      Developer) such a nice person I met. Always so much helpful and open
      to take any questions from juniors.`,
    },
    {
      id: 1,
      degree: "Diploma Engineering",
      course: "Mechanical Technology",
      institute: "National Professional Institute (NPI)",
      desc: `In Genex Infosys, I was ready to explore diverse experience working
      closely with software development team. Visited field to maintain
      sales data flow through EFD and SDC device restaurants in Dhaka. I met
      closely with Zakir Ahmed (Project Manager) and Kamruzzaman Sir
      (Project Lead) who gave me acknowledgement.`,
    },
    {
      id: 2,
      degree: "Secondary School Certificate",
      course: "Science",
      institute: "Badda High School (BHS)",
      desc: `Worked with Tunica team on multiple software solutions where I gained
      insight into project collaboration and industry-standard workflow.`,
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
      <PageTitle
        pageName="My Story"
        imgSrc="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a"
      />
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
