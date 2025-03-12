import { FC } from "react";

interface TechstackDescProps {
  className?: string;
}

const TechstackDesc: FC<TechstackDescProps> = ({ className }) => {
  return (
    <div
      className={`h-full flex md:items-end md:justify-end lg:col-span-2 ${className}`}>
      <div className="md:w-1/2 xl:w-full">
        <p className="text-xl">TechStack</p>
        <p className="text-xs font-light text-[#999999] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto
          iure sapiente, et blanditiis aliquam exercitationem quis laboriosam
          repellendus autem doloribus sed at. Fuga, possimus.
        </p>
      </div>
    </div>
  );
};

export default TechstackDesc;
