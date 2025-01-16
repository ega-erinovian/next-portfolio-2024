import AboutComponent from "../about";
import ContactComponent from "../contact";
import ExperienceComponent from "../expriences";
import ProjectsComponent from "../projects";
import SkillsCompoenent from "../skills";
import Header from "./components/Header";

const HomeComponent = () => {
  return (
    <>
      <Header />
      <AboutComponent />
      <SkillsCompoenent />
      <ExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
};

export default HomeComponent;
