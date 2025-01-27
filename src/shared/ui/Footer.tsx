import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <div
      className="py-4 bg-gray-700 border border-gray-400"
      style={{
        backgroundColor: "#252525",
      }}
    >
      <div className="container">
        <div className="flex md:justify-between justify-center items-center flex-wrap">
          <div>
            <h5 className="text-white mb-4">
              Copyright © All rights reserved.
            </h5>
          </div>
          <div>
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
