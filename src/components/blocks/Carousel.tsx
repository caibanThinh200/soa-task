'use client'

import { Page } from "@/types/page";
import Image from "next/image";
import AnimatedBlock from "../ui/Animated";

interface CarouselProps {
  data: Page["bloc_4"];
}
const Carousel = ({ data }: CarouselProps) => {
  const icons = [
    "/svg/service-1.svg",
    "/svg/service-2.svg",
    "/svg/service-3.svg",
    "/svg/service-4.svg",
    "/svg/service-5.svg",
  ];

  return (
    <AnimatedBlock>
      <div className="bg-gradient-to-t from-[#FFF_100%] to-[rgba(255,255,255,0.00)_0%] bg-[#EAFCFF]">
        <div className="container mx-auto lg:py-20 py-10">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-10">
              <div className="flex flex-col gap-10 lg:w-1/2">
                <h2 className="text-center w-full bg-clip-text text-transparent bg-gradient-to-r from-main-orange to-main-orange/60">
                  <span className="lg:w-1/2">{data?.title}</span>
                </h2>
                <div className="divider-left lg:ml-32">
                  <div className="flex flex-col gap-10">
                    <p className="font-medium text-28 text-brown-coffee">
                      {data?.text_title}
                    </p>
                    <p className="text-brown-coffee/80">{data?.text}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src={"/images/ice-cream.png"}
                  alt="ice-cream"
                  width={400}
                  height={400}
                  className="object-cover rounded-lg ml-auto"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-5 gap-10 grid-cols-2">
              {data?.pictos?.map((pic, idx) => (
                <div
                  key={pic.title}
                  className=" flex flex-col gap-2 items-center"
                >
                  <div className="size-[58px] rounded-full p-3 bg-[#0E9594]">
                    <Image
                      src={icons[idx]}
                      alt={pic.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-brown-coffee font-medium">{pic.title}</p>
                  <p className="text-brown-coffee/80 text-center">
                    {pic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Carousel;
