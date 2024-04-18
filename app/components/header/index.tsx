"use client";
import Image from "next/image";
import React, { useEffect } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = window.location.pathname;

  let defaultLinkStyle = "border-t-2 py-2 hover:border-t-4 px-5 text-green";
  let activeLinkStyle = "border-t-4 font-bold py-2 px-5 text-green";

  return (
    <header
      className={"bg-green flex justify-center gap-6 items-center py-6"}
    >
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-green">
          <Image
            src={"/imgs/logo.png"}
            alt="M2E"
            width={200}
            height={200}
          >

          </Image>
        </a>
      </div>
      <nav className="">
        <ul className="flex gap-6 w-full">
          <li className="">
            <a
              href="/"
              className={location == "/" ? activeLinkStyle : defaultLinkStyle}
            >
              M2E
            </a>
          </li>
          <li className="">
            <a
              href="/equipe"
              className={
                location == "/equipe" ? activeLinkStyle : defaultLinkStyle
              }
            >
              EQUIPE
            </a>
          </li>
          <li className="">
            <a
              href="/servicos"
              className={
                location == "/servicos" ? activeLinkStyle : defaultLinkStyle
              }
            >
              SERVIÇOS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
