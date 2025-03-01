"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type Slide = {
  image: string;
  title: string;
  description: string;
};

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      className="w-full"
    >
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #1988ff !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #1988ff !important;
        }
      `}</style>

      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="overflow-hidden rounded-lg sm:grid sm:grid-cols-2 sm:grid-rows-1">
            <Image
              src={slide.image}
              alt={slide.title}
              width={200}
              height={200}
              className="h-64 w-full object-cover"
            />
            <div className="flex w-full flex-col justify-center bg-SecBlack p-4 pb-8 text-white">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
