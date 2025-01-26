"use client";

import React from "react";
import SkillTech from "./SkillTech";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  ExpressIcon,
  GraphQLIcon,
  JqueryIcon,
  JWTIcon,
  MongooseIcon,
  NestJSIcon,
  NextJsIcon,
  NodeIcon,
  PostgreSqlIcon,
  ReactIcon,
  ReduxIcon,
} from "@/asset/svg";
import { JiraBoard, mongoDBUrl, restAPI } from "@/asset";
type propTypes = {
  id: number;
  icon?: any;
  iconUrl?: string;
  name: string;
  percentage: number;
  level: string;
};

const librariesAndFramework: propTypes[] = [
  {
    id: 0,
    name: "ReactJs",
    icon: <ReactIcon />,
    percentage: 82,
    level: "Specialty",
  },
  {
    id: 1,
    name: "NextJs",
    icon: <NextJsIcon />,
    percentage: 85,
    level: "Specialty",
  },
  {
    id: 2,
    name: "NodeJs",
    icon: <NodeIcon />,
    percentage: 75,
    level: "Intermediate",
  },
  {
    id: 3,
    name: "ExpressJs",
    icon: <ExpressIcon />,
    percentage: 65,
    level: "Intermediate",
  },
  {
    id: 4,
    name: "Redux Toolkit",
    icon: <ReduxIcon />,
    percentage: 75,
    level: "Intermediate",
  },
  {
    id: 5,
    name: "JQuery",
    icon: <JqueryIcon />,
    percentage: 58,
    level: "Intermediate",
  },
  {
    id: 7,
    name: "MongoDB",
    iconUrl: mongoDBUrl,
    percentage: 85,
    level: "Specialty",
  },
  {
    id: 7,
    name: "Mongoose",
    icon: <MongooseIcon />,
    percentage: 70,
    level: "Intermediate",
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: <PostgreSqlIcon />,
    percentage: 80,
    level: "Specialty",
  },
  {
    id: 9,
    name: "Json Web Token",
    icon: <JWTIcon />,
    percentage: 70,
    level: "Intermediate",
  },
  {
    id: 10,
    name: "NestJs",
    icon: <NestJSIcon />,
    percentage: 75,
    level: "Intermediate",
  },
  {
    id: 11,
    name: "GraphQL",
    icon: <GraphQLIcon />,
    percentage: 50,
    level: "Beginner",
  },
];

const SkillsCarousel = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1600,
            stopOnFocusIn: true,
          }),
        ]}
        opts={{
          align: "end",
          loop: true,
          direction: "ltr",
          duration: 200,
          startIndex: 0,
        }}
        className="mt-14 w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-1 text-center">
          {librariesAndFramework.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <SkillTech content={item} />
              <p className="text-center space-x-11">{item.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SkillsCarousel;
