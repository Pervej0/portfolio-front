import CustomContainer from "@/shared/ui/CustomContainer";
import Project from "./Projects";
import ProjectData from "@/asset/projectsData.json";

const ProjectShowcase = () => {
  return (
    <section className="bg-[#303030] py-16">
      <CustomContainer title="Showcase" className="px-4 md:px-auto">
        <div className="grid mt-10 gap-x-12 gap-y-6 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
          {ProjectData?.map((item, index) => (
            <div key={index}>
              <Project project={item} />
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ProjectShowcase;
