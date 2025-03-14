"use client";

import SectionDescription from "@/components/SectionDescription";
import ExperiencesSkeleton from "@/components/skeleton/ExperiencesSkeleton";
import useGetExperiences from "@/hooks/api/useGetExperiences";

const ExperienceComponent = () => {
  const { experiences } = useGetExperiences();

  return (
    <div
      className="w-full px-8 py-10 lg:py-16 xl:pt-52 h-full"
      id="experiences">
      <div className="md:w-1/2 xl:w-1/4 mb-8 xl:mb-12">
        <SectionDescription
          title="Experiences"
          description="I’m driven by innovation and problem-solving, continuously learning to deliver impactful web solutions that meet user needs and business goals."
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 xl:gap-x-20 lg:gap-y-4 xl:gap-y-0">
        {experiences.length === 0 ? (
          <ExperiencesSkeleton />
        ) : (
          experiences &&
          experiences.map((experience, idx) => (
            <div
              className="mb-8 xl:mb-20 border-s-4 ps-4 md:ps-6 transition-all hover:border-s-[24px] group lg:w-full w-full md:w-10/12"
              key={idx}>
              <h1
                className={`mb-2 text-xl md:text-3xl lg:text-3xl group-hover:text-[#aaeec3]`}>
                {experience.title}
              </h1>
              <div className="flex flex-wrap gap-1 mb-2 text-xs md:text-sm xl:text-base">
                <span className=" text-[#aaeec3] font-bold ">
                  {experience.company}
                </span>{" "}
                <span className="text-[#999999]">• </span>
                <span className="text-[#999999]">{experience.duration}</span>
              </div>
              <p className="font-light text-xs md:text-sm xl:text-base text-[#999999]">
                {experience.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExperienceComponent;
