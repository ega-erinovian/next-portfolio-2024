import SkillListContainer from "./component/SkillListContainer";
import TechstackDesc from "./component/TechstackDesc";

const SkillsCompoenent = () => {
  return (
    <div className="container relative mx-auto px-8 xl:h-[70vh] py-10 xl:py-48 grid xl:grid-cols-12 gap-8">
      <TechstackDesc className="md:hidden" />
      <SkillListContainer />
      <TechstackDesc className="hidden md:flex" />
    </div>
  );
};

export default SkillsCompoenent;
