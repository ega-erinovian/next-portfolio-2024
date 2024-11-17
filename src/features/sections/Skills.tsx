import { skills } from "@/features/sections/constants";
import SectionTitle from "../../components/SectionTitle";
import { montserrat } from "@/utils/font";

const Skills = () => {
  return (
    <div className="container relative mx-auto mb-48 px-3 md:mb-56">
      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-8 pe-2 ps-6 pt-16 md:mx-auto md:w-11/12 md:pt-44 xl:mx-0 xl:gap-16 xl:ps-48">
        {skills.map((skill, idx) => (
          <h1
            key={idx}
            className={`${montserrat.className} outlined-letter text-5xl transition-all hover:text-[#aaeec3] md:text-7xl xl:text-8xl`}>
            {skill}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;
