"use client";

import { Page } from "@/types/page";
import Image from "next/image";
import Button from "../ui/Button";
import AnimatedBlock from "../ui/Animated";

interface ContentProps {
  data: Page["bloc_6"];
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <AnimatedBlock>
      <div className="relative pb-32">
        <div className="absolute size-full inset-0">
          <Image
            src={"/images/contact.png"}
            width={1000}
            height={600}
            alt={data?.title}
            className="size-full object-cover"
          />
        </div>
        <div className="container mx-auto py-20 relative">
          <div className="flex flex-col gap-10 items-center relative z-10">
            <h2 className="text-52 text-center flex flex-col gap-10">
              <span className="text-brown-coffee">{data?.title}</span>
              <span className="text-brown-coffee/50">{data?.subtitle}</span>
            </h2>
            <p className="text-brown-coffee">{data?.text}</p>
            <Button variant="primary">{data?.button}</Button>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Content;
