import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import { projects } from "@/lib/constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="container relative mx-auto mb-24 xl:mb-60 max-w-screen-xl overflow-hidden px-3"
      id="projects">
      <SectionTitle title="Projects" />
      <div className="px-2 pt-36 md:pt-64">
        {projects.map((project, index) => (
          <div className="container mt-32" key={index}>
            <hr />
            <div className="mt-20 md:mt-24 container">
              <h1 className="playfair-display-700 mb-6 text-5xl">
                {index + 1}/{projects.length}
              </h1>

              <h1 className="montserrat-700 mb-2 text-5xl text-[#aaeec3] transition-all md:mb-6 md:text-7xl">
                {project.title}
              </h1>
              <p className="text-md mb-6 text-[#777777] md:text-xl">
                {project.date}
              </p>
              <p className="text-md mb-10 md:text-xl">{project.description}</p>
              <div className="relative w-full h-[800px]">
                <Image
                  className="rounded-2xl"
                  src={project.img}
                  alt="project1"
                  fill
                  objectFit="cover"
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
