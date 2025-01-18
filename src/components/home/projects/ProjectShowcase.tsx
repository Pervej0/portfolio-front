import Project from "./Projects";
import ProjectData from "../../../asset/projectsData.json";

const ProjectShowcase = () => {
  return (
    <section className="bg-[#303030]">
      <div className="container h-screen py-14">
        <h2 className="text-2xl mb-8">Showcase</h2>
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
          {ProjectData?.map((item, index) => (
            <div key={index}>
              <Project project={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
