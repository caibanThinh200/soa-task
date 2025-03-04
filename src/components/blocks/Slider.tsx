"use client";

import { Page } from "@/types/page";
import { Chevron } from "../ui/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import SwiperType from "swiper";
import AnimatedBlock from "../ui/Animated";

interface SliderProps {
  data: Page["bloc_3"];
}

const images = [
  "/images/slider-1.png",
  "/images/slider-2.png",
  "/images/slider-3.png",
  "/images/slider-4.png",
];

const Slider: React.FC<SliderProps> = ({ data }) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  return (
    <AnimatedBlock>
      <div className="container mx-auto lg:py-20 py-10">
        <div>
          <div className="flex justify-between items-center mb-10 flex-wrap gap-10">
            <h2 className="text-main-orange line-clamp-1">
              <span>{data?.title}</span>
            </h2>
            <button
              onClick={() => swiper?.slideNext()}
              className="flex gap-2 items-center font-medium text-spanish-gray border-b border-spanish-gray"
            >
              En savoir plus
              <Chevron />
            </button>
          </div>
          <div className="lg:pl-32">
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={20}
              // slidesPerView={1}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              //   onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data?.cases?.map((caseItem, idx) => (
                <SwiperSlide key={caseItem?.tagline}>
                  <div className="flex items-center justify-center h-full cursor-pointer">
                    <div className="flex flex-col gap-4 h-full justify-between">
                      <Image
                        src={images[idx]}
                        alt={caseItem?.tagline}
                        height={340}
                        width={340}
                        className="object-cover rounded-lg lg:h-[340px]"
                      />
                      <p className="text-main-orange text-lg font-medium">
                        {caseItem?.category}
                      </p>
                      <p className="text-brown-coffee font-medium text-28 line-clamp-2">
                        {caseItem?.tagline}
                      </p>
                      <p className="text-brown-coffee/80 font-lg line-clamp-2 ml-2 pl-5 border-l-[0.5px] border-silver">
                        {caseItem?.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Slider;
