import React from "react";

const PageTitle = ({
  pageName,
  imgSrc = "https://images.unsplash.com/photo-1592938545461-68c9cba71b7f",
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
