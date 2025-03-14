import SectionDescription from "@/components/SectionDescription";
import { FC } from "react";

interface TechstackDescProps {
  className?: string;
}

const TechstackDesc: FC<TechstackDescProps> = ({ className }) => {
  return (
    <div
      className={`h-full flex md:items-end xl:justify-end lg:col-span-2 ${className}`}>
      <div className="md:w-1/2 xl:w-full">
        <SectionDescription
          title="Techstack"
          description="I use these tools to build efficient, scalable web applications with seamless integration and optimal performance."
        />
      </div>
    </div>
  );
};

export default TechstackDesc;
