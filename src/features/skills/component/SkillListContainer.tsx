"use client";

import DecryptedText from "@/components/blocks/TextAnimations/DecryptedText/DecryptedText";
import { skills } from "@/features/constants";

const SkillListContainer = () => {
  const textClassName =
    "font-montserrat text-4xl md:text-5xl lg:text-7xl xl:text-8xl";
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 xl:gap-8 xl:col-span-10">
      {skills.map((skill, idx) => (
        <DecryptedText
          key={idx}
          text={skill}
          speed={75}
          encryptedClassName={textClassName}
          parentClassName={`${textClassName} hover:underline`}
          sequential={true}
          animateOn="view"
          useOriginalCharsOnly={true}
        />
      ))}
    </div>
  );
};

export default SkillListContainer;
