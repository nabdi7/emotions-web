import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    {
      href: "/terms",
      name: "Terms",
    },
    {
      href: "/privacy",
      name: "Privacy",
    },
    {
      href: "/about",
      name: "About us",
    },
  ];
  return (
    <footer className="relative pt-10">
      <div className="px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-64 relative">
        <div className="flex flex-col items-center space-y-6">
          <Link href="/" className="text-lg font-bold">
            Emotions Tm
          </Link>
          <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {footerNavs.map((item, idx) => (
              <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 py-10 border-t text-center">
          <p>©{new Date().getFullYear()} Emotions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
