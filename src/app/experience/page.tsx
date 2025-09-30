import {
  BritishCouncilIcon,
  CubixTechnologyIcon,
  GenexIcon,
  TunicaIcon,
} from "@/asset";
import GalleryContent from "@/shared/ui/GalleryContent";
import PageTitle from "@/shared/ui/PageTitle";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 0,
      company: "Cubix Technology",
      icon: CubixTechnologyIcon,
      year: "2025",
      lists: [
        "Enhanced CubixSMB ERP web apps",
        "Fixed UI bugs, built responsive layouts",
        "Integrated APIs, built custom admin panels",
      ],
      desc: `Worked in a software development team, collaborating with senior developers and receiving feedback that helped me improve my strategies. Among them, Shoriful Vai (Senior Developer) was an exceptional mentor—always helpful and open to questions from juniors.`,
    },
    {
      id: 1,
      company: "Genex Infosys Limited",
      icon: GenexIcon,
      year: "2024",
      lists: [
        "Managed NBR VAT project with EFDMs & SDC devices",
        "Handled SQLite database for device apps",
        "Built Excel converter tool to streamline NBR data",
      ],
      desc: `At Genex Infosys, worked with the software team and managed sales data via EFD/SDC devices in Dhaka. Gained valuable guidance from Project Manager Zakir Ahmed and Project Lead Kamruzzaman Sir.`,
    },
    {
      id: 2,
      company: "TunicaLabs Media Pvt Ltd",
      icon: TunicaIcon,
      year: "2022",
      lists: [
        "Contributed to James Hardie project with Next.js",
        "Built components, integrated APIs, fixed bugs",
        "Managed tasks efficiently using Jira",
      ],
      desc: `Worked with multicultural development team that enhance my communication skills in diverse language. There I practiced industry-standard workflow and gain real world experience.`,
    },
    {
      id: 3,
      company: "British Council Bangladesh",
      icon: BritishCouncilIcon,
      year: "Running",
      lists: [
        "Working with a UK-based organization offering flexible freelance jobs",
        "Conducted exams for Cambridge, Pearson Edexcel, Oxford AQA, and IELTS",
        "Followed the British Council Code of Conduct strictly",
      ],
      desc: `Invigilating exams and taking appropriate actions have strengthened my analytical and observational abilities. Moreover, this experience has enhancing my attention to detail, decision-making skills, and ability to manage responsibilities under pressure.`,
    },
  ];

  const experienceGallery = [
    {
      id: 0,
      title: "Tunicalabs Media Pvt Ltd - Internship Completion Letter",
      src: "https://i.ibb.co.com/T5b77QM/Md-Pervej-Internship-Completion-Letter-docx.jpg",
    },
    {
      id: 1,
      title: "Genex - Internship Completion Certificate",
      src: "https://i.ibb.co.com/s9hn2m5n/Genex-Internship-Completion-Certificate.jpg",
    },
    {
      id: 2,
      title: "Genex Infosys - A Normal Day",
      src: "https://i.ibb.co.com/6JpJ4nDH/Md-Pervej-Hossain-Genex-Infosys.jpg",
    },
    {
      id: 3,
      title: "Venue Staff Training Session",
      src: "https://i.ibb.co.com/VWvxxp8q/Md-Pervej-Hossain-Venue-Staff-Training.jpg",
    },
  ];

  return (
    <>
      <PageTitle pageName="Industrial Experiences" />
      <section className="relative my-16 py-16 overflow-hidden">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#3f3f3f] -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex w-full items-center justify-center ${
                idx % 2 === 0 ? "md:-ml-56 ml-auto" : "md:ml-56 mr-auto"
              }`}
            >
              <div
                className="bg-gradient-to-r from-[#3f3f3f] via-[#616161] to-[#5f5f5f] 
  text-white max-w-md p-6 rounded-[50px] shadow-lg relative"
              >
                <div className="flex items-center justify-between gap-4">
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="rounded-full bg-white p-2"
                  />
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <h5
                    className={`px-2 inline-block text-xs font-bold rounded-xl ${
                      exp.year == "Running"
                        ? "bg-green-600 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {exp.year}
                  </h5>
                </div>

                <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-100">
                  {exp.lists.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-1 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-16">
        <div className="container">
          <h1 className="text-2xl mt-20">Gallery</h1>
        </div>
        <GalleryContent images={experienceGallery} />
      </section>
    </>
  );
};

export default ExperiencePage;
