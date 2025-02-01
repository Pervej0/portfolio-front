"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/Banner.css";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to the number of pixels you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <nav
        className={`mx-auto py-4 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-[#363636] shadow-md z-40"
            : "relative"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-mono">Pervej</h2>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex gap-x-8">
              <div>
                <Link className="font-openSans text-lg" href="/home">
                  Home
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/home">
                  About
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/home">
                  Showcase
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/home">
                  Experiences
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/home">
                  Experiences
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
