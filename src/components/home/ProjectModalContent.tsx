"use client";
import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ProjectModalContent = (prop: any) => {
  if (!prop.project) return;
  console.log(prop.project, "xxxxxx");
  const { description, projectName, images } = prop.project;

  return (
    <DialogContent className="sm:max-w-[750px] px-10 rounded-md">
      <DialogHeader>
        <DialogTitle>{projectName}</DialogTitle>
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
                // objectFit="contain"
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
        <DialogClose asChild>
          <Button type="button">Close</Button>
        </DialogClose>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProjectModalContent;
