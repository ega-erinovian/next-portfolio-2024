import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import WordRotate from "@/components/ui/word-rotate";
import { montserrat } from "@/utils/font";

const About = () => {
  return (
    <div className="container relative mx-auto mb-56 px-3" id="about">
      <SectionTitle title="Who" />
      <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
        <h1
          className={`${montserrat.className} mb-2 text-6xl md:mb-6 md:text-7xl md:flex md:items-center gap-5`}>
          <WordRotate
            className={`${montserrat.className} inline`}
            words={["Full-Stack", "Front-End", "Back-End"]}
          />{" "}
          Web Developer
        </h1>
        <div className="md:text-xl text-">
          <p className="mb-6 text-[#999999]">
            Hi, I’m Ega – a passionate full-stack web developer with a knack for
            creating smooth, responsive, and dynamic web experiences. Whether
            it's crafting engaging user interfaces on the front end or building
            solid, efficient back-end systems, I’m dedicated to delivering
            solutions that not only look great but work flawlessly. With a
            foundation in both front-end and back-end technologies, I thrive on
            tackling complex challenges and continuously learning new tools to
            enhance my skill set. Let’s bring your vision to life with clean,
            robust code and creativity!
          </p>
          <p className="mb-6 text-[#999999]">
            Thank you for considering me for your project. I’m excited to bring
            my skills and passion to help you achieve outstanding results. Let’s
            build something amazing together!
          </p>
          <div className="mx-auto mt-24 w-full text-center">
            <Link
              href="https://drive.google.com/file/d/1j3W0P5qPe6cvVcdETU9MzpttJR-Oa9wH/view?usp=sharing"
              target="_blank"
              className="delay-50 mx-auto rounded-full bg-white p-4 px-10 font-semibold text-black transition-all ease-out hover:bg-[#aaeec3]">
              Download CV{" "}
              <FaExternalLinkAlt className="inline fill-black ms-3 text-md" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
