"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Story",
    path: "/story",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Connect",
    path: "/connect",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setNavbarOpen(false);
    }
  };

  // Effect to add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed z-40 top-0 left-0 right-0 bg-[#121212] bg-opacity-80 border border-[#33353F]">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-1 lg:py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-semibold"
        >
          <Image src="/Logo.png" height="40" width="80" priority alt="logo" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex mt-0 p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
