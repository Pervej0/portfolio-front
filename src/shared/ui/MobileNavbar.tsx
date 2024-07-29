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
import { Menu } from "lucide-react";
import React from "react";

const MobileNavbar = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="top-0 mt-0 mr-[75%] px-3 rounded-t-none rounded-[10px]">
        <div className="mx-auto w-full max-w-sm">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="mt-3 h-[120px]">
                <h1>Hello World</h1>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
