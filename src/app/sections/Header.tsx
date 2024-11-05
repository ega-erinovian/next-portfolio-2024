import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Navbar from "../../components/Navbar";
import { RiScrollToBottomLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-56">
        <div className="text-container flex h-[80vh] flex-col justify-center px-4 text-center">
          <h1 className="text-6xl font-bold md:text-9xl playfair-display-700 mb-3">
            Ega Erinovian
          </h1>
          <TextGenerateEffect
            words={
              "Crafting seamless, responsive web solutions from front to back."
            }
            duration={1}
          />
        </div>
        <div>
          <RiScrollToBottomLine className="scroll-icon mx-auto text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Header;
