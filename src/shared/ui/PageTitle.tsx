import React from "react";

const PageTitle = ({
  pageName,
  imgSrc = "https://i.ibb.co.com/1tHn1Mz3/professional.jpg",
}: {
  pageName: string;
  imgSrc?: string;
}) => {
  return (
    <section
      className="h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
                    rgba(43, 43, 43, 0.7),
                    rgba(43, 43, 43, 0.6)
                  ),
                  url(${imgSrc});`,
      }}
    >
      <div className="container h-full flex justify-center items-center">
        <h3 className="md:text-3xl text-2xl uppercase">{pageName}</h3>
      </div>
    </section>
  );
};

export default PageTitle;
