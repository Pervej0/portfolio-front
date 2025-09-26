"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

const images = [
  "https://i.ibb.co.com/84WsC3N/Md-Pervej-Hossain.jpg",
  "https://i.ibb.co.com/84WsC3N/Md-Pervej-Hossain.jpg",
  "https://i.ibb.co.com/84WsC3N/Md-Pervej-Hossain.jpg",
  "https://i.ibb.co.com/84WsC3N/Md-Pervej-Hossain.jpg",
];

export default function GalleryContent() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="my-12 mx-auto container px-4">
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={`Gallery ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
        <DialogContent className="p-0 max-w-6xl z-50 w-full bg-black">
          {selectedIndex !== null && (
            <Swiper
              initialSlide={selectedIndex}
              navigation
              zoom
              modules={[Navigation, Zoom]}
              className="w-[90%] h-[80vh] z-0"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-zoom-container flex items-center justify-center z-50">
                    <Image
                      src={src}
                      alt={`Full ${idx + 1}`}
                      width={1600}
                      height={900}
                      className="object-contain w-full h-full z-50"
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
