import AboutSection from "@/components/home/About";
import ProfessionalExperiences from "@/components/home/professionalExperiences/ProfessionalExperiences";
import ProjectShowcase from "@/components/home/projects/ProjectShowcase";
import SkillSet from "@/components/home/skills/SkillSet";
import Banner from "@/shared/ui/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProfessionalExperiences />
      <AboutSection />
      <SkillSet />
      <ProjectShowcase />
    </main>
  );
}
