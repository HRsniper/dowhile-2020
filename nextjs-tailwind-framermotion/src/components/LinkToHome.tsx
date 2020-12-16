import React from "react";
import Link from "next/link";

// interface CardProps {
type LinkToHomeProps = {
  href: string;
  text: string;
};

function LinkToHome({ href, text }: LinkToHomeProps): JSX.Element {
  return (
    <Link href={href}>
      <a className="bg-gray-900 text-gray-100 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
        {text}
      </a>
    </Link>
  );
}

export default LinkToHome;
