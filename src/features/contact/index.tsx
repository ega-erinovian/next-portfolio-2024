import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { montserrat } from "@/utils/font";
import Link from "next/link";
import { socials } from "../constants";

const ContactComponent = () => {
  return (
    <div className="h-full pt-32">
      <div
        className="relative h-[116px] w-full overflow-hidden md:h-[144px] xl:h-[300px]"
        id="contact">
        <VelocityScroll
          text="Get In Touch — "
          default_velocity={1}
          className={`${montserrat.className} whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px] `}
        />
      </div>
      <div className="container mx-auto flex h-[520px] w-full flex-col items-center justify-center gap-20 px-4 md:h-[1000px] xl:gap-24">
        <h1 className="playfair-display-700 text-center text-6xl font-bold md:text-7xl lg:text-8xl">
          Interested to work with me?
        </h1>
        <ul className="flex w-full md:w-1/2 justify-around xl:w-1/3">
          {socials.map((social, idx) => (
            <Link href={social.link} key={idx} target="_blank">
              <li className="rounded-full bg-white p-2 text-3xl transition-all hover:bg-[#aaeec3]">
                {social.component}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactComponent;
