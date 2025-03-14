import { FC } from "react";

interface SectionDescriptionProps {
  title: string;
  description: string;
}

const SectionDescription: FC<SectionDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <p className="text-4xl mb-3">{title}</p>
      <p className="text-sm font-light text-[#999999]">{description}</p>
    </>
  );
};

export default SectionDescription;
