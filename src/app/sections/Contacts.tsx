import { socials } from "@/lib/constants";
import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <div
        className="relative h-[116px] w-full overflow-hidden md:h-[144px] xl:h-[300px]"
        id="contact">
        <div className="absolute">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
        <div className="absolute right-0 top-10 md:top-16 xl:top-36">
          <h1 className="montserrat-700 outlined-letter whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px]">
            Get In Touch — Get In Touch
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex h-[520px] w-full flex-col items-center justify-center gap-20 px-4 md:h-[1000px] xl:gap-36">
        <h1 className="playfair-display-700 text-center text-6xl font-bold md:text-7xl lg:text-8xl">
          Interested to work with me?
        </h1>
        <ul className="flex w-full justify-around xl:w-1/3">
          {socials.map((social, idx) => (
            <Link href={social.link} key={idx} target="_blank">
              <li className="rounded-full bg-white p-2 text-3xl transition-all hover:bg-[#aaeec3]">
                {social.component}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
