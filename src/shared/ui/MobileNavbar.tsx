"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="top-0 mt-0 mr-[0] sm:mr-[55%] md:mr-[70%] px-3 rounded-t-none rounded-[10px]">
        <div className="mx-auto w-full max-w-sm">
          <div className="mx-auto w-full max-w-sm">
            <DrawerClose asChild className="flex justify-end ml-auto">
              <Button variant="outline">
                <X />
              </Button>
            </DrawerClose>
            <div className="p-4 pb-0">
              <div className="mt-3 h-auto">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full mx-auto pb-3 text-center border-b">
                    <Link className="font-openSans text-md" href="/home">
                      Home
                    </Link>
                  </div>
                  <div className="w-full mx-auto py-3 text-center border-b">
                    <Link className="font-openSans text-md" href="/home">
                      About
                    </Link>
                  </div>
                  <div className="w-full mx-auto py-3 text-center border-b">
                    <Link className="font-openSans text-md" href="/home">
                      Showcase
                    </Link>
                  </div>
                  <div className="w-full mx-auto py-3 text-center border-b">
                    <Link className="font-openSans text-md" href="/home">
                      Experiences
                    </Link>
                  </div>
                  <div className="w-full mx-auto py-3 text-center">
                    <Link className="font-openSans text-md" href="/home">
                      Experiences
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <DrawerHeader className="mb-0 pb-0">
              <DrawerTitle className="text-center text-3xl">Pervej</DrawerTitle>
              <DrawerDescription className="font-mono">
                Maxim: Where there is a will there is a way.
              </DrawerDescription>
            </DrawerHeader>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
