import React from "react";

const page = ({ slug }: { slug: string }) => {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default page;
