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
          className={`${montserrat.className} whitespace-nowrap text-4xl transition-all md:text-7xl xl:text-[154px]`}
        />
      </div>
      <div className="container mx-auto flex w-full flex-col items-center justify-center py-8 md:py-24 xl:py-48">
        <ul className="flex w-10/12 justify-around xl:w-7/12">
          {socials.map((social, idx) => (
            <Link href={social.link} key={idx} target="_blank">
              <li className="rounded-full bg-white p-2 text-3xl md:text-5xl md:p-4 transition-all hover:bg-[#aaeec3] duration-300">
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
