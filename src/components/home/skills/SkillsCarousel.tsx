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
  NestJSIcon,
  NextJsIcon,
  NodeIcon,
  PostgreSqlIcon,
  ReactIcon,
  ReduxIcon,
} from "@/asset/svg";
import { JiraBoard, restAPI } from "@/asset";
type propTypes = { id: number; icon?: any; iconUrl?: string; name: string };

const librariesAndFramework: propTypes[] = [
  {
    id: 0,
    name: "ReactJs",
    icon: <ReactIcon />,
  },
  {
    id: 1,
    name: "NextJs",
    icon: <NextJsIcon />,
  },
  {
    id: 2,
    name: "NodeJs",
    icon: <NodeIcon />,
  },
  {
    id: 3,
    name: "ExpressJs",
    icon: <ExpressIcon />,
  },
  {
    id: 4,
    name: "ReduxIcon",
    icon: <ReduxIcon />,
  },
  {
    id: 5,
    name: "JQuery",
    icon: <JqueryIcon />,
  },
  {
    id: 6,
    name: "JQuery",
    icon: <JqueryIcon />,
  },
  {
    id: 7,
    name: "MongoDB",
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC",
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: <PostgreSqlIcon />,
  },
  {
    id: 9,
    name: "Json Web Token",
    icon: <JWTIcon />,
  },
  {
    id: 10,
    name: "NestJs",
    icon: <NestJSIcon />,
  },
  {
    id: 11,
    name: "Json Web Token",
    icon: <GraphQLIcon />,
  },
  {
    id: 20,
    name: "Jira Board",
    iconUrl: JiraBoard,
  },
];

const SkillsCarousel = () => {
  return (
    <div className="mt-14">
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
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<NextJsIcon />} name="NextJs" />
            <p className="text-center space-x-11">NextJs</p>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ReactIcon />} name="ReactJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<NodeIcon />} name="NodeJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ExpressIcon />} name="ExpressJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ExpressIcon />} name="ExpressJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ExpressIcon />} name="ExpressJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ExpressIcon />} name="ExpressJs" />
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/5">
            <SkillTech icon={<ExpressIcon />} name="ExpressJs" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SkillsCarousel;
