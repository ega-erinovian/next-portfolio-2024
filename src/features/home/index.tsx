import ContactComponent from "../contact";
import ExperienceComponent from "../expriences";
import ProjectsComponent from "../projects";
import SkillsCompoenent from "../skills";
import Header from "./components/Header";

const HomeComponent = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <SkillsCompoenent />
        <ExperienceComponent />
        <ProjectsComponent />
      </div>
      <ContactComponent />
    </>
  );
};

export default HomeComponent;
