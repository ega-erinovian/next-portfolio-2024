import SectionTitle from "../../components/SectionTitle";
import { montserrat } from "@/utils/font";
import { skills } from "../constants";

const SkillsCompoenent = () => {
  return (
    <div className="container relative mx-auto px-3 h-[calc(100%-68px)] my-28 flex justify-center items-center">
      <div className="relative">
        <SectionTitle title="Skills" />
        <div className="flex flex-wrap gap-8 pe-2 ps-6 pt-16 md:mx-auto md:w-11/12 md:pt-44 xl:mx-0 xl:gap-16 xl:ps-48">
          {skills.map((skill, idx) => (
            <h1
              key={idx}
              className={`font-montserrat text-5xl md:text-7xl xl:text-8xl font-bold text-transparent stroke-2 stroke-gray-700 transition-all duration-300 hover:text-[#aaeec3] hover:no-stroke`}>
              {skill}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCompoenent;
