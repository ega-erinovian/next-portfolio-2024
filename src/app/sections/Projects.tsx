import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import { projects } from "@/lib/constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { montserrat, playfairDisplay } from "@/utils/font";

const Projects = () => {
  return (
    <div
      className="container relative mx-auto mb-20 xl:mb-60 max-w-screen-xl overflow-hidden px-3"
      id="projects">
      <SectionTitle title="Projects" />
      <div className="px-2 md:pt-64">
        {projects.map((project, index) => (
          <div className="container mt-32" key={index}>
            <hr />
            <div className="mt-20 md:mt-24 container">
              <h1 className={`${playfairDisplay.className} mb-6 text-5xl`}>
                {index + 1}/{projects.length}
              </h1>

              <h1
                className={`${montserrat.className} mb-2 text-4xl text-[#aaeec3] transition-all md:mb-6 md:text-7xl overflow-visible`}>
                {project.title}
              </h1>
              <p className="text-md mb-6 text-[#777777] md:text-xl">
                {project.date}
              </p>
              <p className="text-md mb-10 md:text-xl">{project.description}</p>
              <div className="relative w-full h-[200px] md:h-[420px] lg:h-[600px] xl:h-[800px]">
                <Image
                  className="rounded-xl md:rounded-2xl object-cover"
                  src={project.img}
                  alt="project1"
                  fill
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
