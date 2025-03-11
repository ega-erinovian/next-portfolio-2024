import { RiScrollToBottomLine } from "react-icons/ri";
import WordFadeIn from "@/components/ui/word-fade-in";

const Header = () => {
  return (
    <>
      <div className="container mx-auto xl:h-[calc(100vh-54px)]">
        <div className="text-container flex xl:h-[90vh] flex-col p-12 justify-center gap-8 xl:gap-28">
          <h1 className="text-[54px] md:text-[120px] font-medium xl:text-[284px] leading-none -tracking-[2px] md:-tracking-[4px] xl:-tracking-[20px] mb-3 md:mb-7">
            Websites & Web Apps
          </h1>
          <div className="flex justify-between flex-col md:flex-row gap-4">
            <div>
              <h4 className="text-lg xl:text-xl">Let's Talk!</h4>
              <p className="text-[#999999] text-sm xl:text-xl text-justify ">
                erinovian69@gmail.com
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#999999] text-xs xl:text-xl text-justify">
                Hi, I’m Ega, a full-stack web developer passionate about
                creating responsive, dynamic web experiences. I excel in both
                front-end and back-end development, delivering solutions that
                look great and work flawlessly. Let’s bring your vision to life
                with clean code and creativity!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 xl:mt-24">
          <RiScrollToBottomLine className="scroll-icon mx-auto text-2xl xl:text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Header;
