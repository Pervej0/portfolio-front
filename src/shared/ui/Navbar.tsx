import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <nav className="flex justify-between items-center w-container mx-auto py-4">
        <div>
          <h2 className="text-3xl font-mono">Pervej</h2>
        </div>
        <div>
          <div className="flex gap-x-8">
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
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
