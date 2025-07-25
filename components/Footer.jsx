import Image from "next/image";
import logoLight from "../public/images/logoLight.png";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-bgColor text-textColor px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image src={logoLight} width={60} height={60} alt="Web3ProdigyDev logo" className="object-contain" />
          <p className="flex items-center text-sm font-titleFont gap-1 text-center sm:text-left">
            <AiOutlineCopyrightCircle aria-hidden="true" className="mt-[1px]" />
            <span>
              Web3ProdigyDev {currentYear}. All rights reserved.
            </span>
          </p>
        </div>

        <div className="flex gap-4 sm:gap-6 pointer-events-auto">
          <a
            href="https://www.youtube.com/@Web3ProdigyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Web3ProdigyDev's YouTube profile"
            className="inline-block pointer-events-auto transform hover:scale-110 transition-transform duration-300"
          >
            <BsYoutube className="w-6 h-6 sm:w-7 sm:h-7 text-primaryColor/50 hover:text-primaryColor cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/Web3ProdigyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Web3ProdigyDev's Facebook profile"
            className="inline-block pointer-events-auto transform hover:scale-110 transition-transform duration-300"
          >
            <BsFacebook className="w-6 h-6 sm:w-7 sm:h-7 text-primaryColor/50 hover:text-primaryColor cursor-pointer" />
          </a>
          <a
            href="https://github.com/Web3ProdigyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Web3ProdigyDev's GitHub profile"
            className="inline-block pointer-events-auto transform hover:scale-110 transition-transform duration-300"
          >
            <BsGithub className="w-6 h-6 sm:w-7 sm:h-7 text-primaryColor/50 hover:text-primaryColor cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/Web3ProdigyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Web3ProdigyDev's LinkedIn profile"
            className="inline-block pointer-events-auto transform hover:scale-110 transition-transform duration-300"
          >
            <BsLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-primaryColor/50 hover:text-primaryColor cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/Web3ProdigyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Web3ProdigyDev's Twitter profile"
            className="inline-block pointer-events-auto transform hover:scale-110 transition-transform duration-300"
          >
            <BsTwitter className="w-6 h-6 sm:w-7 sm:h-7 text-primaryColor/50 hover:text-primaryColor cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;