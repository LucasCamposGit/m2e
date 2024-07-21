"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let location: string = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle =
    "px-4 py-2 font-semibold text-white transition-all duration-300 border-b-2 hover:border-white";
  const activeLinkStyle = "border-white";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#88d0da] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/imgs/logo-nobg.png"
            alt="M2E"
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
          <span className="ml-3 text-2xl font-bold text-white">M2E</span>
        </a>
        
        {/* Hamburger menu for small screens */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation for medium and large screens */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="/"
                className={`${linkStyle} ${
                  location === "/" ? activeLinkStyle : "border-transparent"
                }`}
              >
                M2E
              </a>
            </li>
            <li>
              <a
                href="/servicos"
                className={`${linkStyle} ${
                  location === "/servicos"
                    ? activeLinkStyle
                    : "border-transparent"
                }`}
              >
                SERVIÇOS
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#88d0da] py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="/"
                className={`${linkStyle} ${
                  location === "/" ? activeLinkStyle : "border-transparent"
                }`}
                onClick={toggleMenu}
              >
                M2E
              </a>
            </li>
            <li>
              <a
                href="/servicos"
                className={`${linkStyle} ${
                  location === "/servicos"
                    ? activeLinkStyle
                    : "border-transparent"
                }`}
                onClick={toggleMenu}
              >
                SERVIÇOS
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;