"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import ProjectModalContent from "./ProjectModalContent";

type PropTypes = {
  projectImg: string;
  projectTitle: string;
  projectDesc: string;
  front: string;
  back: string;
  live: string;
};

const Project = (prop: any) => {
  if (!prop.project) return;

  const { projectName, bannerImg, serverCode, liveSite, clientCode } =
    prop?.project;

  return (
    <div>
      <Dialog>
        <ProjectModalContent project={prop.project} />
        <div className="relative rounded-lg group overflow-hidden">
          <div className="h-[400px] w-full relative">
            <Image
              src={bannerImg}
              alt={`${bannerImg || "Hello_sky image"}`}
              className="transition-transform duration-500 ease-in-out group-hover:scale-105 h-full w-full"
              objectFit="contain"
              height={500}
              width={500}
            />
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute z-10 left-1/2 top-1/2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border border-white bg-white text-black hover:bg-transparent"
              >
                View Details
              </Button>
            </DialogTrigger>
          </div>
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-red-600 via-red-500/50 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <div className="absolute bottom-5 left-5 text-white pr-2">
              <h6 className="mb-1 text-xl font-mono">{projectName}</h6>
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
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Project;
