import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header(): JSX.Element {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="/">
        <a>
          <Image src="/img/logo.svg" alt="DoWhile2020" width={150} height={30} />
        </a>
      </Link>

      <nav className="hidden md:block space-x-8 ">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-400">Next.js</a>
        </Link>
        <Link href="/tailwindcss">
          <a className="tracking-wide hover:text-gray-400">TailwindCss</a>
        </Link>
        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-400">Framer Motion</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

// 20:22
