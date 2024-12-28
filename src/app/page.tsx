import AboutSection from "@/components/home/About";
import SkillSet from "@/components/home/SkillSet";
import Banner from "@/shared/ui/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutSection />
      <SkillSet />
    </main>
  );
}
