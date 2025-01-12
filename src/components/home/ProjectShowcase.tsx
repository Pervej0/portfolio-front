import Project from "./Projects";
import ProjectData from "../../asset/projectsData.json";

const ProjectShowcase = () => {
  return (
    <section className="bg-[#303030]">
      <div className="container h-screen py-14">
        <h2 className="text-2xl mb-8">Showcase</h2>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1">
          {ProjectData?.map((item, index) => (
            <div key={index}>
              <Project project={item} />
            </div>
          ))}

          {/* <Project
            projectImg="https://images.unsplash.com/photo-1592771385918-90eeffa48baf"
            projectTitle="Glass Shop"
            projectDesc="An air ticket booking application built on MERN stack."
            front="https://github.com/Pervej0/hello-sky-client"
            back="https://github.com/Pervej0/hello-sky-server"
            live="https://hello-sky-96ac5.web.app/"
          /> */}
          {/* <Project
            projectImg="https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0"
            projectTitle="KKSC"
            projectDesc="An air ticket booking application built on MERN stack."
            front="https://github.com/Pervej0/hello-sky-client"
            back="https://github.com/Pervej0/hello-sky-server"
            live="https://hello-sky-96ac5.web.app/"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
