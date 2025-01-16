"use client";

import ExperiencesSkeleton from "@/components/skeleton/ExperiencesSkeleton";
import useGetExperiences from "@/hooks/api/useGetExperiences";
import { montserrat } from "@/utils/font";
import SectionTitle from "../../components/SectionTitle";

const ExperienceComponent = () => {
  const { experiences } = useGetExperiences();

  if (experiences.length === 0) {
    return <ExperiencesSkeleton />;
  }

  return (
    <div
      className="container relative mx-auto overflow-hidden px-3 h-screen flex justify-center items-center"
      id="experiences">
      <div className="relative">
        <SectionTitle title="Experiences" />
        <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
          {experiences &&
            experiences.map((experience, idx) => (
              <div className="mb-20" key={idx}>
                <h1
                  className={`${montserrat.className} mb-2 text-4xl transition-all hover:text-[#aaeec3] md:mb-6 md:text-6xl lg:text-7xl`}>
                  {experience.title}
                </h1>
                <div className="text-[#999999] md:text-xl">
                  <p className="mb-6">
                    <span className="font-bold text-[#aaeec3]">
                      {experience.company}
                    </span>{" "}
                    • {experience.duration}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
