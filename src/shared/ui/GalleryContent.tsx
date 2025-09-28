"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

type propTypes = {
  id: number;
  title: string;
  src: string;
}[];

export default function GalleryContent({ images }: { images: propTypes }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="my-16 mx-auto container px-4">
      {/* Simple Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images?.map(({ src, id, title }) => (
          <div
            key={id}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
            onClick={() => setSelectedIndex(id)}
          >
            <Image
              src={src}
              alt={title}
              title={title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition duration-500 ease-in-out"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white font-medium">View</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
        <DialogContent className="p-0 max-w-6xl z-50 w-full bg-black rounded-xl overflow-hidden">
          {selectedIndex !== null && (
            <Swiper
              initialSlide={selectedIndex}
              navigation
              zoom
              modules={[Navigation, Zoom]}
              className="w-full h-[80vh] z-0"
            >
              {images.map(({ src, id, title }) => (
                <SwiperSlide key={id}>
                  <div className="swiper-zoom-container flex items-center justify-center bg-black">
                    <Image
                      src={src}
                      alt={title}
                      title={title}
                      width={1600}
                      height={900}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
