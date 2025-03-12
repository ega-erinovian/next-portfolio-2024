import CopyButton from "./CopyButton";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <>
      <div className="container mx-auto xl:h-[calc(100vh-68px)]">
        <div className="text-container flex xl:h-screen flex-col py-10 px-8 justify-center gap-8 xl:gap-28">
          <HeaderTitle />
          <div className="flex justify-between flex-col md:flex-row gap-4">
            <div>
              <h4 className="text-lg xl:text-xl">Let's Talk!</h4>
              <p className="text-[#999999] text-sm xl:text-xl text-justify flex gap-2 font-light">
                erinovian69@gmail.com <CopyButton />
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#999999] text-xs xl:text-xl text-justify font-light">
                Hi, I’m Ega, a full-stack web developer passionate about
                creating responsive, dynamic web experiences. I excel in both
                front-end and back-end development, delivering solutions that
                look great and work flawlessly. Let’s bring your vision to life
                with clean code and creativity!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
