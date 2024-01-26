"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const [current_year, set_current_year] = useState(0);

  useEffect(() => {
    const date = new Date();
    set_current_year(date.getFullYear());

    return () => {
      set_current_year(0);
    };
  }, []);

  return (
    <footer className="bg-dark">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
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

        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {current_year} CalcWeb —
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://jaykerkar.vercel.app"
            className="text-gray-600 ml-1 cursor-pointer"
          >
            @Jay Kerkar
          </Link>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jaykerkar0405"
            className="mx-3 text-gray-500 cursor-pointer"
          >
            <IoLogoGithub className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-gray-500 cursor-pointer"
            href="https://www.linkedin.com/in/jaykerkar0405"
          >
            <IoLogoLinkedin className="w-5 h-5" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
