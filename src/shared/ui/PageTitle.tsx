import Image from "next/image";

type PageTitleProps = {
  pageName: string;
  imgSrc: any;
};

export default function PageTitle({ pageName, imgSrc }: PageTitleProps) {
  return (
    <section className="relative h-[40vh] w-full">
      <Image
        src={imgSrc}
        alt={pageName}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60"></div>

      {/* Content */}
      <div className="container relative h-full flex justify-center items-center z-10">
        <h3 className="md:text-3xl text-2xl uppercase text-white">
          {pageName}
        </h3>
      </div>
    </section>
  );
}
