import Link from "next/link";
import React from "react";
import "@/styles/Banner.css";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-container mx-auto py-4 bg-transparent">
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
    </nav>
  );
};

export default Navbar;
