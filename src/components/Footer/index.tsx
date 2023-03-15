import Link from "next/link";
import React from "react";
import { FaTwitter, FaHome } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import {
  homeUrl,
  LogoPath,
  ProjectName,
  telegramUrl,
  twitterUrl,
} from "@utils/config";

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center border border-text bg-bgbase text-text">
      <div className="grid w-full max-w-2xl grid-flow-col items-center p-4">
        <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href={homeUrl} target="_blank">
            <FaHome size={24} />
          </Link>
          <Link href={twitterUrl} target="_blank">
            <FaTwitter size={24} />
          </Link>
          <Link href={telegramUrl} target="_blank">
            <IoMdPaperPlane size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
