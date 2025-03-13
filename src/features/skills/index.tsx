import SkillListContainer from "./component/SkillListContainer";
import TechstackDesc from "./component/TechstackDesc";

const SkillsCompoenent = () => {
  return (
    <div className="px-8 xl:h-[70vh] py-10 lg:py-16 xl:py-52 grid xl:grid-cols-12 gap-8">
      <TechstackDesc className="xl:hidden" />
      <SkillListContainer />
      <TechstackDesc className="hidden xl:flex" />
    </div>
  );
};

export default SkillsCompoenent;
