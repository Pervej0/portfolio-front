"use client";
import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Image from "next/image";
import Link from "next/link";

const ProjectModalContent = (prop: any) => {
  if (!prop.project) return;
  const {
    description,
    projectName,
    images,
    categories,
    projectType,
    technologies,
    liveSite,
    clientCode,
    serverCode,
  } = prop.project;

  return (
    <DialogContent className="sm:max-w-[850px] px-10 rounded-md">
      <DialogHeader>
        <DialogTitle>{projectName}</DialogTitle>
        <h2 className="text-md mt-4">Project-type: {projectType}</h2>
        <h2>
          Technologies:{" "}
          {technologies?.map((item: string, index: number) => (
            <span className="text-sm px-2 underline" key={index}>
              {item}&nbsp;
            </span>
          ))}
        </h2>
        <DialogDescription>
          <ul className="pt-3 leading-5 list-disc">
            {description.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </DialogDescription>
      </DialogHeader>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src: string, index: number) => (
            <CarouselItem
              key={index}
              className="overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[300px]"
            >
              <Image
                className="w-full"
                objectFit="contain"
                src={src}
                alt="Project Image"
                height={500}
                width={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <DialogFooter>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <Link className="text-sm" href={liveSite} target="_blank">
              Live
            </Link>
            <Link className="text-sm" href={clientCode}>
              Front
            </Link>
            {serverCode && (
              <Link className="text-sm" href={serverCode} target="_blank">
                Back
              </Link>
            )}
          </div>
          <div>
            <h2>
              Categories:{" "}
              {categories.map((item: string, index: number) => (
                <span className="text-sm px-2 underline" key={index}>
                  {item}&nbsp;
                </span>
              ))}
            </h2>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProjectModalContent;
