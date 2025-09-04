"use client";

import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const links = [
  { name: "Home", href: "/" },
  { name: "Forums", href: "/forums" },
  { name: "Chat", href: "/chat" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow-lg p-4 md:p-6 rounded-b-xl border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo/Brand Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 22h20L12 2zm0 17.5L5.5 12h13L12 19.5z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600"
          >
            ClavardageDirect
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon (X)
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 0 1-1.414-1.414L10.586 12 5.722 7.136a1 1 0 0 1 1.414-1.414L12 10.586l4.864-4.864a1 1 0 0 1 1.414 1.414L13.414 12l4.864 4.864z"
                />
              ) : (
                // Hamburger icon
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu and mobile menu content */}
        <div
          id="mobile-menu"
          className={`w-full md:w-auto md:flex md:items-center mt-4 md:mt-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 font-medium rounded-lg transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-center">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
