"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/Banner.css";
import MobileNavbar from "./MobileNavbar";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { images } from "@/asset";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      // Smooth scroll to contact section if already on home page
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to home with query or hash
      router.push("/#contact");
    }
  };

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
              <Link href="/">
                <Image
                  src={images.Profile}
                  height={80}
                  width={80}
                  alt="Pervej"
                />
              </Link>
            </h2>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex gap-x-8">
              <div>
                <Link className="font-openSans text-lg" href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/about">
                  About
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/blogs">
                  Articles
                </Link>
              </div>
              <div>
                <Link className="font-openSans text-lg" href="/experience">
                  Experiences
                </Link>
              </div>
              <div>
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="font-openSans text-lg"
                >
                  Get in Touch
                </a>
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
