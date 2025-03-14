"use client";

import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const email = "erinovian69@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <span onClick={copyToClipboard}>
      {copied ? (
        <FaCheck className="fill-[#aaeec3] cursor-pointer transition-all delay-100" />
      ) : (
        <FaRegCopy className="fill-[#999999] hover:fill-white cursor-pointer transition-all delay-100" />
      )}
    </span>
  );
};

export default CopyButton;
