import { images } from "@/asset";
import Image from "next/image";
import React from "react";
import Professional from "./Professional";
import Link from "next/link";
import CustomContainer from "@/shared/ui/CustomContainer";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    name: "Cubix",
    categories: ["PHP/Laravel", "ERP System", "Frontend"],
    imageUrl: images.SoftwareIcon,
    position: "Junior Software Developer",
    year: 2025,
    company: "Cubix Technology",
    location: "Banasree, Dhaka",
    desc: [
      "Developed and upgraded web applications for CubixSMB, an ERP-based Hotel Management System, and fix uprising bugs",
      "Resolved UI-related bugs and designed responsive, user-friendly pages and layouts.",
      "Integrating APIs to display dynamic data and building custom admin panels for clients.",
    ],
  },
  {
    name: "Genex",
    categories: ["SQLite", "NodeJs", "Software Integration", "Device"],
    imageUrl: images.SoftwareIntegration,
    position: "Software Integration Engineer (Intern)",
    year: 2024,
    company: "Genex Infosys Limited",
    location: "Gulshan, Dhaka, Bangladesh",
    desc: [
      "Managed the NBR VAT collection project using EFDMs and SDC devices.",
      "Demonstrated database management skills with SQLite for device applications.",
      "Developed a tool to convert NBR data to Excel, streamlining processes and reducing workload.",
    ],
  },
  {
    name: "Tunicalabs",
    categories: ["React/NextJs", "Agile Methodology", "Frontend"],
    imageUrl: images.FrontEndIcon,
    position: "Software Developer (Intern)",
    year: 2022,
    company: "TunicaLabs Media Pvt Ltd",
    location: "Mumbai, India",
    desc: [
      "Worked on the James Hardie project using Next.js, gaining industry-standard experience.",
      "Focused on component development, API integration, and bug resolution.",
      "Managed daily tasks efficiently via Jira.",
    ],
  },
];

const ProfessionalExperiences = () => {
  return (
    <div className="bg-[#363636] pb-16" id="experiences_section">
      <CustomContainer title="Professional Experience" className="py-14 px-4">
        <div className="grid gap-10 items-center md:grid-cols-3 sm:grid-cols-2 grid-col mt-10">
          {experiences.map((item: any) => (
            <Professional key={item._id} experience={item} />
          ))}
        </div>
      </CustomContainer>
      <div className="text-center md:mt-14 mt-5 mb-2">
        <Link className="px-4 text-sm" href="/experience">
          <Button>See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalExperiences;
