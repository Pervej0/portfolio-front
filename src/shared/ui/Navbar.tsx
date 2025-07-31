"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/Banner.css";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
      {pathname === "/" && (
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
      )}
      <nav
        className={`mx-auto py-4 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-[#363636] shadow-md z-40"
            : "relative"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-mono">
              <Link href="/">Pervej</Link>
            </h2>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex gap-x-8">
              <div>
                <Link className="font-openSans text-lg" href="#home_section">
                  Home
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="#about_section">
                  About
                </Link>
              </div>
              <div>
                <Link
                  className="font-openSans text-lg"
                  href="#showcase_section"
                >
                  Showcase
                </Link>
              </div>
              <div>
                <Link
                  className="font-openSans text-lg"
                  href="#experiences_section"
                >
                  Experiences
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="#contact">
                  Get in Touch
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
