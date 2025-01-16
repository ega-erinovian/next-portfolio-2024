import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const socials = [
  {
    link: "https://www.instagram.com/egaerinovian",
    component: <FaInstagram className="fill-black" />,
  },
  {
    link: "https://github.com/ega-erinovian",
    component: <FaGithub className="fill-black" />,
  },
  {
    link: "https://wa.me/6285155114016",
    component: <FaWhatsapp className="fill-black" />,
  },
  {
    link: "https://www.linkedin.com/in/ega-erinovian/",
    component: <FaLinkedin className="fill-black" />,
  },
];

export const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.JS",
  "Express.JS",
];

export const experiences = [
  {
    title: "Full-Stack Web Developer",
    description:
      "The role involves planning and developing end-to-end web projects, leading a team as a Full Stack Web Developer, and contributing innovative solutions to achieve team goals. Key projects include agitandco.com, architeknikconsultant.com, and sef.feb.ugm.ac.id.",
    place: "Sirius Creative",
    date: "Juli 2022 - September 2023",
  },
  {
    title: "Lab Assistance",
    description:
      "The role involves delivering practical courses, creating quizzes and assignments, and assessing student work. The subjects taught include Algorithms and Programming, Advanced Algorithms and Programming, Data Structures, Object-Oriented Programming, Data Science, Computer Networks, Internet of Things (IoT), Mobile Technology and Programming with Flutter, and Cloud Computing.",
    place: "UPN Veteran Yogyakarta",
    date: "March 2021 – December 2023",
  },
  {
    title: "Full-Stack Web Developer Intern",
    description:
      "The role involves developing internal websites using HTML, CSS, JavaScript, Bootstrap, and PHP to enhance operations, creating a secure SQL database for efficient data management, and improving productivity through innovative web solutions.",
    place: "Rumahweb",
    date: "March 2022 - May 2022",
  },
];

export const projects = [
  {
    title: "agitandco.com",
    date: "September 2023",
    description:
      "Developed a stylish portfolio website for a photography company specializing in weddings and events. The site showcases their work through elegant galleries and an easy-to-navigate design, giving clients a quick, seamless way to explore services and connect with the team.",
    img: "/project1.webp",
  },
  {
    title: "Twitter Clone",
    date: "October 2024",
    description:
      "Twitter Clone web app that allows users to post, edit, and delete tweets. This project replicates core Twitter functions, providing a smooth, interactive experience for users to share and manage their thoughts in real-time.",
    img: "/project2.webp",
  },
  {
    title: "Archi Teknik Company Profile",
    date: "November 2024",
    description:
      "Designed and developed a professional company profile website for an international engineering consultancy, showcasing their services, values, and global presence. Built using Next.js and Tailwind CSS for a modern, responsive, and visually engaging experience.",
    img: "/project3.webp",
  },
];
