"use client";

import SectionDescription from "@/components/SectionDescription";
import ProjectSkeleton from "@/components/skeleton/ProjectSkeleton";
import useGetProjects from "@/hooks/api/useGetProjects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsComponent = () => {
  const router = useRouter();
  const { projects } = useGetProjects();

  return (
    <div
      className="container mx-auto px-8 py-10 w-full max-w-screen"
      id="projects">
      <div className="md:w-1/2 xl:w-1/4 mb-8 xl:mb-12">
        <SectionDescription
          title="Projects"
          description="I create impactful web solutions with a focus on innovation and problem-solving, continuously learning to meet user needs and business goals."
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 xl:gap-12 w-full">
        {projects.length === 0 ? (
          <ProjectSkeleton />
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="group hover:cursor-pointer"
              onClick={() => {
                if (project.url) {
                  window.open(project.url, "_blank");
                } else {
                  router.push(`/projects/${project.id}`);
                }
              }}>
              <div className=" relative w-full h-[200px] md:h-[280px] lg:h-[380px] xl:h-[560px] overflow-hidden rounded-xl ">
                <Image
                  className="md:rounded-2xl object-cover group-hover:scale-110 transition-all duration-500"
                  src={project.thumbnail}
                  alt="project1"
                  fill
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <Link href={`/projects/${project.id}`}>
                  <h1 className="mt-4 mb-1 lg:mb-2 transition-all text-lg lg:text-2xl">
                    {project.title}
                  </h1>
                </Link>
                <FaExternalLinkAlt className="text-sm group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-xl lg:text-2xl font-light text-[#999999]">
                {project.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsComponent;
