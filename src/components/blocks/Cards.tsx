"use client";

import { Page } from "@/types/page";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";
import { Arrow } from "../ui/Icons";
import AnimatedBlock from "../ui/Animated";

interface CardProps {
  data: Page["bloc_1"];
}
const Cards: React.FC<CardProps> = ({ data }) => {
  const images = [
    "/images/card-1.png",
    "/images/card-2.png",
    "/images/card-3.png",
  ];

  return (
    <AnimatedBlock>
      <div className="container mx-auto lg:py-20 py-10">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-main-orange divider text-center w-full">
            <span className="lg:w-1/2">{data?.title}</span>
          </h2>
          <p className="lg:w-1/2 text-center">{data?.subtitle}</p>
          <div className="grid lg:grid-cols-3 gap-8 lg:mt-24 mt-0">
            {data?.cases.map((caseItem, idx) => (
              <div
                key={caseItem?.tagline}
                className={twMerge(
                  "flex flex-col gap-4 cursor-pointer hover:-translate-y-5 transition-all duration-500",
                  idx % 2 != 0 && "md:-translate-y-20 hover:-translate-y-24"
                )}
              >
                <Image
                  src={images[idx]}
                  alt={caseItem?.tagline}
                  width={397}
                  height={397}
                  className="w-full object-cover rounded-lg"
                />
                <p className="text-main-orange text-lg font-medium">
                  {caseItem?.category}
                </p>
                <p className="text-brown-coffee font-medium text-28">
                  {caseItem?.tagline}
                </p>
                <p className="text-brown-coffee/80 font-lg line-clamp-2">
                  {caseItem?.description}
                </p>
                <div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-3 justify-center"
                  >
                    {caseItem?.cta}
                    <Arrow />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Cards;
