import { sqlIconUrl } from "@/asset";
import { JavaIcon, JavaScriptIcon, PHPIcon, TypeScriptIcon } from "@/asset/svg";
import React from "react";
import SkillTech from "./SkillTech";
import SkillsCarousel from "./SkillsCarousel";

const SkillSet = () => {
  return (
    <div className="h-screen container">
      <h2 className="text-2xl mb-10">Digital Dexterity</h2>
      <div className="flex md:flex-row gap-5 flex-col items-center justify-between">
        <SkillTech icon={<JavaScriptIcon />} name="JavaScript" />
        <SkillTech icon={<TypeScriptIcon />} name="TypeScript" />
        <SkillTech icon={<JavaIcon />} name="Java" />
        <SkillTech icon={<PHPIcon />} name="PHP" />
        <SkillTech iconUrl={sqlIconUrl} name="SQL" />
      </div>
      <SkillsCarousel />
    </div>
  );
};

export default SkillSet;
