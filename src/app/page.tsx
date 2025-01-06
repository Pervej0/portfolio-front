import AboutSection from "@/components/home/About";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import SkillSet from "@/components/home/SkillSet";
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
