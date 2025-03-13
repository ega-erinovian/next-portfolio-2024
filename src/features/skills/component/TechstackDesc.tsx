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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto
        iure sapiente, et blanditiis aliquam"
        />
      </div>
    </div>
  );
};

export default TechstackDesc;
