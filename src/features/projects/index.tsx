"use client";

import useGetProjects from "@/hooks/api/useGetProjects";
import { montserrat, playfairDisplay } from "@/utils/font";
import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";
import useFormatDate from "@/hooks/formatter/useDateFormatter";
import ProjectSkeleton from "@/components/skeleton/ProjectSkeleton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const ProjectsComponent = () => {
  const { projects } = useGetProjects();

  if (projects.length <= 0) {
    return <ProjectSkeleton />;
  }

  return (
    <div
      className="container relative mx-auto overflow-hidden px-3 h-full w-full max-w-screen flex justify-center items-center py-20"
      id="projects">
      <div className="relative w-full">
        <SectionTitle title="Projects" />
        <div className="px-2 md:pt-64">
          {projects.map((project, index) => (
            <div className="container mt-36 md:mt-20" key={index}>
              <hr />
              <div className="mt-20 md:mt-24 container md:px-8">
                <h1 className={`${playfairDisplay.className} mb-6 text-5xl`}>
                  {index + 1}/{projects.length}
                </h1>
                <div className="flex items-baseline gap-4">
                  <Link href={`/projects/${project.id}`} className="w-fit">
                    <h1
                      className={`${montserrat.className} mb-2 text-4xl text-[#aaeec3] transition-all md:mb-6 md:text-7xl overflow-visible`}>
                      {project.title}
                    </h1>
                  </Link>
                  <ExternalLink color="#474e5a" />
                </div>
                <p className="text-md mb-6 text-[#999999] md:text-xl">
                  {useFormatDate(project.date)}
                </p>
                <p className="text-md mb-10 md:text-xl">
                  {project.description}
                </p>
                <div className="relative w-full h-[200px] md:h-[420px] lg:h-[600px] xl:h-[800px]">
                  <Image
                    className="rounded-xl md:rounded-2xl object-cover"
                    src={project.thumbnail}
                    alt="project1"
                    fill
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
