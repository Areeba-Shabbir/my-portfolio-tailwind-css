import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#081b29] p-8 shadow-md">
      <div className="flex justify-center gap-8 mt-4 pb-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-[#00abf0] bg-[#2f4056] rounded-full transition-transform duration-300 ease-in-out transform hover:text-[#dbe4e6] hover:scale-125"
        >
          <FaFacebookF className="text-2xl font-bold" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-[#00abf0] bg-[#2f4056] rounded-full transition-transform duration-300 ease-in-out transform hover:text-[#dbe4e6] hover:scale-125"
        >
          <FaGithub className="text-2xl font-bold" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center text-[#00abf0] bg-[#2f4056] rounded-full transition-transform duration-300 ease-in-out transform hover:text-[#dbe4e6] hover:scale-125"
        >
          <FaLinkedinIn className="text-2xl font-bold" />
        </a>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="https://vercel.com/favicon.ico" alt="Vercel" className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
