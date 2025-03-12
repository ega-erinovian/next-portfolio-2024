"use client";

import DecryptedText from "@/components/blocks/TextAnimations/DecryptedText/DecryptedText";

const HeaderTitle = () => {
  const textClassName =
    "text-[58px] md:text-[120px] font-medium xl:text-[284px] leading-none -tracking-[2px] md:-tracking-[4px] xl:-tracking-[20px] mb-3 md:mb-7";

  return (
    <DecryptedText
      text="Websites & Web Apps"
      parentClassName={textClassName}
      encryptedClassName={textClassName}
      speed={100}
      sequential={true}
      animateOn="view"
      useOriginalCharsOnly={true}
    />
    // <h1 className="text-[58px] md:text-[120px] font-medium xl:text-[284px] leading-none -tracking-[2px] md:-tracking-[4px] xl:-tracking-[20px] mb-3 md:mb-7">
    //   Websites & Web Apps
    // </h1>
  );
};

export default HeaderTitle;
