import { experiences } from "@/features/sections/constants";
import SectionTitle from "../../components/SectionTitle";
import { montserrat } from "@/utils/font";

const Experience = () => {
  return (
    <div
      className="container relative mx-auto mb-56 w-full overflow-hidden px-3"
      id="experiences">
      <SectionTitle title="Experiences" />
      <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
        {experiences.map((experience, idx) => (
          <div className="mb-20" key={idx}>
            <h1
              className={`${montserrat.className} mb-2 text-4xl transition-all hover:text-[#aaeec3] md:mb-6 md:text-6xl lg:text-7xl`}>
              {experience.title}
            </h1>
            <div className="text-[#999999] md:text-xl">
              <p className="mb-6 text-[#999999]">{experience.description}</p>
              <p className="mb-6">
                <span className="font-bold text-[#aaeec3]">
                  {experience.place}
                </span>{" "}
                • {experience.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
