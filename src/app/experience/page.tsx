import { CubixTechnologyIcon, GenexIcon, TunicaIcon } from "@/asset";
import GalleryContent from "@/shared/ui/GalleryContent";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Cubix Technology",
      icon: CubixTechnologyIcon,
      desc: `Each place where I worked I met some people those name always will
      be remembered. I am lucky & enough competitive that I had chance to
      meet those guys. From Cubix Technology Shoriful Vai (Senior
      Developer) such a nice person I met. Always so much helpful and open
      to take any questions from juniors.`,
    },
    {
      company: "Genex Infosys Limited",
      icon: GenexIcon,
      desc: `In Genex Infosys, I was ready to explore diverse experience working
      closely with software development team. Visited field to maintain
      sales data flow through EFD and SDC device restaurants in Dhaka. I met
      closely with Zakir Ahmed (Project Manager) and Kamruzzaman Sir
      (Project Lead) who gave me acknowledgement.`,
    },
    {
      company: "TunicaLabs Media Pvt Ltd",
      icon: TunicaIcon,
      desc: `Worked with Tunica team on multiple software solutions where I gained
      insight into project collaboration and industry-standard workflow.`,
    },
  ];

  return (
    <>
      <section className="relative py-16 overflow-hidden">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#009463] -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex w-full items-center justify-center ${
                idx % 2 === 0 ? "md:-ml-56 ml-auto" : "md:ml-56 mr-auto"
              }`}
            >
              <div
                className="bg-gradient-to-r from-[#012E1F] via-[#025939] to-[#038C3E] 
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
      <section>
        <div className="container">
          <h1 className="text-2xl mt-20">Gallery</h1>
        </div>
        <GalleryContent />
      </section>
    </>
  );
};

export default ExperiencePage;
