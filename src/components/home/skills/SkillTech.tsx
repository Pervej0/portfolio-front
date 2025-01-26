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
import { Slider } from "@/components/ui/slider";

type propTypes = {
  content: {
    id: number;
    icon?: any;
    iconUrl?: string;
    name: string;
    level: string;
    percentage: number;
  };
};

const SkillTech = ({ content }: propTypes) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <>
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger>
            {content.iconUrl ? (
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div
                  onClick={handleClick}
                  className="h-28 w-28 flex justify-center items-center"
                >
                  <span className="bg-white text-black h-28 w-28 p-5 flex justify-center items-center rounded">
                    <Image
                      src={content.iconUrl}
                      alt="sql"
                      height={50}
                      width={50}
                    />
                  </span>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-white h-28 w-28 rounded-full flex gap-y-1 flex-col justify-center items-center"
                >
                  <p className="text-black p-2 text-sm">{content.level}</p>
                  <div className="w-[75%] flex flex-col justify-center mt-2 gap-y-2 h-1">
                    <Slider
                      className="w-[100%] mt-4 h-4"
                      defaultValue={[content.percentage]}
                      max={100}
                      step={1}
                      disabled
                    />
                    <span className="text-sm text-black font-bold">
                      {content.percentage}%
                    </span>
                  </div>
                </div>
              </ReactCardFlip>
            ) : (
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div onClick={handleClick}>
                  <span className="bg-white text-black relative p-5 rounded h-28 w-28 flex justify-center items-center">
                    {content.id === 0 && (
                      <span className="inline absolute left-1 bottom-1">
                        <PointerSVG />
                      </span>
                    )}
                    {content.icon}
                  </span>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-white h-28 w-28 rounded-full flex gap-y-2 flex-col justify-center items-center"
                >
                  <p className="text-black p-2 text-sm">{content.level}</p>
                  <div className="w-[75%] level-slider flex flex-col justify-center mt-2 gap-y-2 h-1">
                    <Slider
                      className="w-[100%] mt-2 h-4"
                      defaultValue={[43]}
                      max={100}
                      step={1}
                      disabled
                    />
                    <span className="text-sm text-black font-bold">
                      {content.percentage}%
                    </span>
                  </div>
                  {/* </div> */}
                </div>
              </ReactCardFlip>
            )}
          </TooltipTrigger>
          <TooltipContent>{content.name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SkillTech;
