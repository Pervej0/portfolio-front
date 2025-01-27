import { sqlIconUrl } from "@/asset";
import { JavaIcon, JavaScriptIcon, PHPIcon, TypeScriptIcon } from "@/asset/svg";
import React from "react";
import SkillTech from "./SkillTech";
import SkillsCarousel from "./SkillsCarousel";
import CustomContainer from "@/shared/ui/CustomContainer";

const coreSkills = [
  {
    id: 0,
    name: "JavaScript/TypeScript",
    icon: <JavaScriptIcon />,
    percentage: 85,
    level: "Specialty",
  },
  {
    id: 1,
    name: "Java",
    icon: <JavaIcon />,
    percentage: 40,
    level: "Beginner",
  },
  {
    id: 1,
    name: "PHP",
    icon: <PHPIcon />,
    percentage: 45,
    level: "Beginner",
  },
  {
    id: 1,
    name: "SQL/NoSQL",
    iconUrl: sqlIconUrl,
    percentage: 76,
    level: "Intermediate",
  },
];

const SkillSet = () => {
  return (
    <section className="bg-[#363636]">
      <CustomContainer title="Digital Dexterity" className="py-14 pb-16">
        <div className="mt-10 mb-12 text-center">
          <h4 className="font-bold py-1 inline-block bg-white text-black px-6 rounded-md">
            --- Core Technologies ---
          </h4>
        </div>
        <div className="flex md:flex-row gap-5 flex-col items-center justify-between">
          {coreSkills.map((item) => (
            <>
              <SkillTech content={item} />
            </>
          ))}
        </div>
        <div className="mt-10 mb-12 text-center">
          <h4 className="font-bold py-1 inline-block bg-white text-black px-6 rounded-md">
            --- Most Used Technologies ---
          </h4>
        </div>
        <SkillsCarousel />
      </CustomContainer>
    </section>
  );
};

export default SkillSet;
