// App's External Imports
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-purple-700">
      <div className="container mx-auto flex flex-wrap px-5 md:px-10 py-5 flex-row justify-between items-center">
        <Link
          href="/"
          className="cursor-pointer flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image
            width={40}
            height={40}
            alt="Header Icon"
            className="rounded-full"
            src="/apple-icon.png"
          />
          <span className="ml-3 text-xl text-white">CalcWeb</span>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jaykerkar0405/CalcWeb"
          className="inline-flex items-center gap-2 rounded-md bg-dark px-3 sm:px-5 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-dark-hover"
        >
          <IoLogoGithub /> View Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
