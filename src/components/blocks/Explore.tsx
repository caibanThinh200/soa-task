"use client";

import { Page } from "@/types/page";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import SwiperType from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedBlock from "../ui/Animated";

interface ExploreProps {
  data: Page["bloc_5"];
}

const Explore: React.FC<ExploreProps> = ({ data }) => {
  const images = [
    "/images/explore-1.png",
    "/images/explore-2.png",
    "/images/explore-3.png",
    "/images/explore-4.png",
    "/images/explore-5.png",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
  return (
    <AnimatedBlock>
      <div className="bg-[#EAFCFF] bg-gradient-to-t from-white to-transparent">
        <div className="container mx-auto py-20">
          <div className="flex items-center flex-col md:flex-row gap-10">
            <p className="text-lg mb-8 flex-1 text-brown-coffee/80">
              {data?.text}
            </p>
            <h2 className="text-3xl font-semibold mb-4 flex-1 text-brown-coffee uppercase">
              {data?.title} <span className="text-main-orange">#Basic</span>
            </h2>
          </div>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 mb-10"
          >
            {data?.reviews?.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-fit flex items-center flex-col justify-center rounded-lg lg:p-20 p-5">
                  <div className="absolute size-full inset-0 rounded-lg overflow-hidden">
                    <Image
                      className="size-full object-cover"
                      alt={review?.review}
                      src={images[idx]}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="absolute size-full inset-0 rounded-lg  bg-viridian-green/30"></div>
                  <div className="bg-white relative z-10 rounded-lg p-5 lg:size-2/3 md:w-11/12">
                    <div className="flex flex-col gap-5">
                      <div className="lg:h-[300px] h-[200px] 2xl:h[470px] w-full rounded-lg overflow-hidden">
                        <Image
                          className="size-full object-cover"
                          alt={review?.review}
                          src={images[idx]}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row">
                        <p className="text-brown-coffee/80">{review?.author}</p>
                        <p className="border border-brown-coffee/30 p-2 rounded-full">
                          {new Date(review?.date) &&
                            moment(new Date(review?.date)).format(
                              "DD MMM YYYY"
                            )}
                        </p>
                      </div>
                      <div>
                        <p className="text-silver">{review?.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {data?.reviews?.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative lg:h-[250px] md:h-[165px] h-[70px] rounded-lg overflow-hidden cursor-pointer">
                  {/* <Image /> */}
                  <Image
                    className="size-full object-cover"
                    alt={review?.review}
                    src={images[idx]}
                    width={292}
                    height={292}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10">
            <p className="text-silver">{data?.footer}</p>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Explore;
