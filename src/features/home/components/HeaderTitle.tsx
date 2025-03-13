"use client";

import DecryptedText from "@/components/blocks/TextAnimations/DecryptedText/DecryptedText";

const HeaderTitle = () => {
  const textClassName =
    "text-[58px] md:text-[120px] lg:text-[164px] font-medium xl:text-[276px] leading-none -tracking-[2px] md:-tracking-[4px] xl:-tracking-[20px] mb-3 md:mb-8 lg:mb-16";

  return (
    <DecryptedText
      text="Websites & Web Apps"
      parentClassName={textClassName}
      encryptedClassName={textClassName}
      speed={75}
      sequential={true}
      animateOn="view"
      useOriginalCharsOnly={true}
    />
  );
};

export default HeaderTitle;
