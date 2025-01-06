"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PointerSVG } from "@/asset/svg";

type propTypes = { icon?: any; iconUrl?: string; name: string };

const SkillTech = ({ icon, iconUrl, name }: propTypes) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    console.log("Helooooooooooooo");
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <>
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger>
            {iconUrl ? (
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div
                  onClick={handleClick}
                  className="h-28 w-28 flex justify-center items-center"
                >
                  <span className="bg-white text-black h-28 w-28 p-5 flex justify-center items-center rounded">
                    <Image src={iconUrl} alt="sql" height={50} width={50} />
                  </span>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-white h-28 w-28 rounded"
                >
                  <p className="text-black p-2">Intermediate</p>
                </div>
              </ReactCardFlip>
            ) : (
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div onClick={handleClick}>
                  <span className="bg-white text-black relative p-5 rounded h-28 w-28 flex justify-center items-center">
                    {name === "JavaScript" && (
                      <span className="inline absolute left-1 bottom-1">
                        <PointerSVG />
                      </span>
                    )}
                    {icon}
                  </span>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-white h-28 w-28 rounded-full flex justify-center items-center"
                >
                  <p className="text-black p-2">Intermediate</p>
                </div>
              </ReactCardFlip>
            )}
          </TooltipTrigger>
          <TooltipContent>{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SkillTech;
