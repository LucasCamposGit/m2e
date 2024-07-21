"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let location: string = usePathname();

  const linkStyle =
    "px-4 py-2 font-semibold text-white transition-all duration-300 border-b-2 hover:border-white";
  const activeLinkStyle = "border-white";

  return (
    <header className="w-full bg-[#88d0da] shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
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
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-row justify-around md:justify-start items-center md:space-x-6">
            <li className="w-1/2 md:w-auto">
              <a
                href="/"
                className={`${linkStyle} ${
                  location === "/" ? activeLinkStyle : "border-transparent"
                } block text-center md:inline-block md:text-left`}
              >
                M2E
              </a>
            </li>
            <li className="w-1/2 md:w-auto">
              <a
                href="/servicos"
                className={`${linkStyle} ${
                  location === "/servicos"
                    ? activeLinkStyle
                    : "border-transparent"
                } block text-center md:inline-block md:text-left`}
              >
                SERVIÇOS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
