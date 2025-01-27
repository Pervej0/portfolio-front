import Image from "next/image";
import React from "react";

type propTypes = {
  imageUrl: any;
  position: string;
  year: number;
  company: string;
  location: string;
  desc: string[];
};

const Professional = ({
  imageUrl,
  position,
  year,
  company,
  location,
  desc,
}: propTypes) => {
  return (
    <div className="border border-gray-200 min-h-[450px] flex justify-center flex-col items-center rounded-xl pb-10 pt-6">
      <div
        className={`md:m-4 md:p-5 p-0 m-0 bg-white clip-your-needful-style ${
          company === "Genex Infosys Limited" && "!bg-white"
        }`}
      >
        <Image
          src={imageUrl}
          alt="computer animated icons"
          width={100}
          height={100}
        />
      </div>
      <div className="pl-4 pr-4">
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-xl">{position}</h3>
          <h5 className="text-sm mt-1">{year}</h5>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">{company}</span>
          <span className="text-sm">{location}</span>
        </div>
        <ul className="list-disc pl-3 text-sm leading-6 mt-3">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Professional;
