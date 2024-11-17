import Navbar from "../../components/Navbar";
import { RiScrollToBottomLine } from "react-icons/ri";
import WordFadeIn from "@/components/ui/word-fade-in";
import { playfairDisplay } from "@/utils/font";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-56">
        <div className="text-container flex h-[80vh] flex-col justify-center px-4 text-center">
          <h1
            className={`text-6xl font-bold md:text-9xl ${playfairDisplay.className} mb-3 md:mb-7`}>
            Ega Erinovian
          </h1>
          <div className="px-7">
            <WordFadeIn
              words="Crafting seamless, responsive web solutions from front to back."
              delay={0.35}
              className="text-[#999999] text-sm md:text-xl"
            />
          </div>
        </div>
        <div>
          <RiScrollToBottomLine className="scroll-icon mx-auto text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Header;
