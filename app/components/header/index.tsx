"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let location: string = usePathname();

  let defaultLinkStyle = "border-t-2 border-orange-400 py-2 hover:border-t-4 px-5 text-green";
  let activeLinkStyle = "border-t-4 border-orange-400 font-bold py-2 px-5 text-green";

  return (
    <header className={"w-full bg-green flex justify-center gap-6 items-center py-6"}>
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-green">
          <Image
            src={"/imgs/logo.jpeg"}
            alt="M2E"
            width={110}
            height={110}
          />
        </a>
      </div>
      <nav className="">
        <ul className="flex gap-6 w-full md:flex md:flex-row flex-col">  {/* Added responsive classes */}
          <li className="">
            <a
              href="/"
              className={location == "/" ? activeLinkStyle : defaultLinkStyle}
            >
              M2E
            </a>
          </li>
          {/* <li className="">
            <a
              href="/equipe"
              className={
                location == "/equipe" ? activeLinkStyle : defaultLinkStyle
              }
            >
              EQUIPE
            </a>
          </li> */}
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
