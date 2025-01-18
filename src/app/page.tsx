import AboutSection from "@/components/home/About";
import ProjectShowcase from "@/components/home/projects/ProjectShowcase";
import SkillSet from "@/components/home/skills/SkillSet";
import Banner from "@/shared/ui/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutSection />
      <SkillSet />
      <ProjectShowcase />
    </main>
  );
}
