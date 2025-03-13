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
      <p className="text-xl">{title}</p>
      <p className="text-sm font-light text-[#999999] text-justify">
        {description}
      </p>
    </>
  );
};

export default SectionDescription;
