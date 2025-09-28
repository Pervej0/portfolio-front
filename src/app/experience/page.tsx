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
      desc: `Each place where I worked I met some people those name always will
      be remembered. I am lucky & enough competitive that I had chance to
      meet those guys. From Cubix Technology Shoriful Vai (Senior
      Developer) such a nice person I met. Always so much helpful and open
      to take any questions from juniors.`,
    },
    {
      id: 1,
      company: "Genex Infosys Limited",
      icon: GenexIcon,
      desc: `In Genex Infosys, I was ready to explore diverse experience working
      closely with software development team. Visited field to maintain
      sales data flow through EFD and SDC device restaurants in Dhaka. I met
      closely with Zakir Ahmed (Project Manager) and Kamruzzaman Sir
      (Project Lead) who gave me acknowledgement.`,
    },
    {
      id: 2,
      company: "TunicaLabs Media Pvt Ltd",
      icon: TunicaIcon,
      desc: `Worked with Tunica team on multiple software solutions where I gained
      insight into project collaboration and industry-standard workflow.`,
    },
    {
      id: 3,
      company: "British Council Bangladesh",
      icon: BritishCouncilIcon,
      desc: `Worked with Tunica team on multiple software solutions where I gained
      insight into project collaboration and industry-standard workflow.`,
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
                <div className="flex items-center gap-4">
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="rounded-full bg-white p-2"
                  />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed">{exp.desc}</p>
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
