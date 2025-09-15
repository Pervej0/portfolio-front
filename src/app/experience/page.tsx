import { CubixTechnologyIcon, GenexIcon } from "@/asset";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  return (
    <section>
      <div className="cover-image">
        <h4>Industry Exprience</h4>
      </div>
      <div className="container">
        <div className="mt-4">
          <Image
            src={CubixTechnologyIcon}
            height={150}
            width={150}
            alt="Cubix Technology"
          />
          <p className="my-4">
            Each place where I worked I met some people those name always will
            be remembered. I am lucky & enough competitive that I had chance to
            meet those guys. From <b>Cubix Technology</b> Shoriful Vai (Senior
            Developer) such a nice person I met. Always so much helpful and open
            to take any questions from juniors.
          </p>
        </div>
        <div className="mt-4">
          <Image
            src={GenexIcon}
            height={150}
            width={150}
            alt="Genex Infosys Limited"
          />
          <p className="my-4">
            In Genex Infosys, I was ready to explore diverse experience working
            worked closely with software development team. Visited field to
            maintain sales data flow through EFD and SDC device restaurants in
            dhaka. I met closely with Zakir Ahmed (Project Manager) and
            Kamruzzaman Sir (Project Lead) received acknowledgement.
          </p>
        </div>

        <h3 className="text-2xl font-semibold">Gallery</h3>
      </div>
    </section>
  );
};

export default ExperiencePage;
